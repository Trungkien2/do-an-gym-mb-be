import { Module } from '@nestjs/common';
import { MealPlannerService } from './meal_planner.service';
import { MealPlannerController } from './meal_planner.controller';

@Module({
  controllers: [MealPlannerController],
  providers: [MealPlannerService],
})
export class MealPlannerModule {}
