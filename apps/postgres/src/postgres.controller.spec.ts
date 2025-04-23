import { Test, TestingModule } from '@nestjs/testing';
import { PostgresController } from './postgres.controller';
import { PostgresService } from './postgres.service';

describe('PostgresController', () => {
  let postgresController: PostgresController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostgresController],
      providers: [PostgresService],
    }).compile();

    postgresController = app.get<PostgresController>(PostgresController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(postgresController.getHello()).toBe('Hello World!');
    });
  });
});
