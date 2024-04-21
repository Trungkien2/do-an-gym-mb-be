import { Injectable } from '@nestjs/common';

import { CrudService } from 'src/core/Base/crud.service';
import { Meal } from './entities/meal.entity';

@Injectable()
export class MealService extends CrudService<Meal> {
  constructor() {
    super(Meal);
  }
}
