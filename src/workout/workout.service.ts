import { Inject, Injectable } from '@nestjs/common';

import { CrudService } from 'src/core/Base/crud.service';
import { ModelCtor } from 'sequelize-typescript';
import { Model } from 'sequelize';
import { Workout } from './workout.entity';

@Injectable()
export class WorkoutService extends CrudService<Workout> {
  constructor() {
    super(Workout);
  }
}
