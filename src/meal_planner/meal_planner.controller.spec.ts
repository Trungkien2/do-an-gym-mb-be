import { Test, TestingModule } from '@nestjs/testing';
import { MealPlannerController } from './meal_planner.controller';
import { MealPlannerService } from './meal_planner.service';

describe('MealPlannerController', () => {
  let controller: MealPlannerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealPlannerController],
      providers: [MealPlannerService],
    }).compile();

    controller = module.get<MealPlannerController>(MealPlannerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
