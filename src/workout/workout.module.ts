import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { Workout } from './workout.entity';

@Module({
  controllers: [WorkoutController],
  providers: [WorkoutService, Workout],
})
export class WorkoutModule {}
