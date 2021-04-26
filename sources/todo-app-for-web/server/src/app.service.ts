import { Injectable } from '@nestjs/common';
import { Todo } from './todo.dto';

@Injectable()
export class AppService {
  getTodoList(): Todo[] {
    // DBからデータを取得

    return [
      new Todo(0, "test"),
      new Todo(1, "hoge"),
      new Todo(2, "fuga")
    ];
  }

  addTodo(todo: Todo) {
    // DBに登録

    todo.id = 4
    return todo;
  }

  completeTodo(id: number): Todo {
    return new Todo(id, "");
  }
}
