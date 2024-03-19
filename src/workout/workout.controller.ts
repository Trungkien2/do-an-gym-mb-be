import { Controller } from '@nestjs/common';
import { CrudController } from 'src/core/Base/crud.controller';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController extends CrudController<WorkoutService> {
  constructor(private readonly workoutService: WorkoutService) {
    super(workoutService);
  }
}
