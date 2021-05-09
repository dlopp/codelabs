import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './todo.entity';
import { TodolistService } from './todolist.service';

const mockRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
})

describe('TodolistService', () => {
  let todolistService: TodolistService;
  let todolistRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodolistService,
        { provide: getRepositoryToken(Todo), useFactory: mockRepository }
      ],
    }).compile();

    todolistService = await module.get<TodolistService>(TodolistService);
    todolistRepository = await module.get(getRepositoryToken(Todo));
  });

  describe("getTodolist", () => {
    it("get all todos", async () => {
      todolistRepository.find.mockResolvedValue("mockTodo");
      expect(todolistRepository.find).not.toHaveBeenCalled;

      const result = await todolistService.getTodolist();
      expect(todolistRepository.find).toHaveBeenCalled();
      expect(result).toEqual('mockTodo');
    })
  })
});
