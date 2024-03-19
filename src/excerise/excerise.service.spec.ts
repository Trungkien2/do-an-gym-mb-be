import { Test, TestingModule } from '@nestjs/testing';
import { ExceriseService } from './excerise.service';

describe('ExceriseService', () => {
  let service: ExceriseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExceriseService],
    }).compile();

    service = module.get<ExceriseService>(ExceriseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
