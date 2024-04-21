import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/core/Base/crud.service';
import { MealPlanner } from './entities/meal_planner.entity';

@Injectable()
export class MealPlannerService extends CrudService<MealPlanner> {
  constructor() {
    super(MealPlanner);
  }
}
