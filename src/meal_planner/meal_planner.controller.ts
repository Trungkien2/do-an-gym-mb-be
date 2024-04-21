import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MealPlannerService } from './meal_planner.service';
import { CrudController } from 'src/core/Base/crud.controller';

@Controller('meal_planner')
export class MealPlannerController extends CrudController<MealPlannerService> {
  constructor(private readonly mealPlannerService: MealPlannerService) {
    super(mealPlannerService);
  }
}
