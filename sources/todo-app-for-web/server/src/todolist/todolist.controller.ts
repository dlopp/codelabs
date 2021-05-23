import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './todo.entity';

@Controller('todolist')
export class TodolistController {
  constructor(private todolistService: TodolistService) {}

  @Get()
  getTodolist(): Promise<Todo[]> {
    return this.todolistService.getTodolist();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTodo(@Body() todoDto: TodoDto): Promise<Todo> {
    return this.todolistService.addTodo(todoDto);
  }

  @Delete('/:id')
  deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.todolistService.completeTodo(id);
  }
}
