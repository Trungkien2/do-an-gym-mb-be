import { Controller } from '@nestjs/common';
import { CrudController } from 'src/core/Base/crud.controller';
import { MealService } from './meal.service';

@Controller('meal')
export class MealController extends CrudController<MealService> {
  constructor(private readonly mealService: MealService) {
    super(mealService);
  }
}
