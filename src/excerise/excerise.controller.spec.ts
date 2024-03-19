import { Test, TestingModule } from '@nestjs/testing';
import { ExceriseController } from './excerise.controller';
import { ExceriseService } from './excerise.service';

describe('ExceriseController', () => {
  let controller: ExceriseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExceriseController],
      providers: [ExceriseService],
    }).compile();

    controller = module.get<ExceriseController>(ExceriseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
