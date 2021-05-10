import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodolistService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async getTodolist(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async addTodo(todoDto: TodoDto): Promise<Todo> {
    const { title } = todoDto;
    const todo = new Todo();
    todo.title = title;

    try {
      await this.todoRepository.save(todo);
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return todo;
  }

  async completeTodo(id: number): Promise<void> {
    const result = await this.todoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }
}
