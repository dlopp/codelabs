import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';
import { Todo } from "./todo.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo])
  ],
  controllers: [TodolistController],
  providers: [TodolistService]
})
export class TodolistModule {}
