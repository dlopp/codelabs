import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from './todo.dto';

@Controller("todolist")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTodoList(): Todo[] {
    return this.appService.getTodoList();
  }

  @Post()
  addTodo(@Body() todo: Todo): Todo {
    return this.appService.addTodo(todo);
  }

  @Delete(":id")
  completeTodo(@Param("id") id: number): Todo {
    return this.appService.completeTodo(id);
  }

}
