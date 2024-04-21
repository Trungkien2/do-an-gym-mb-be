import { PartialType } from '@nestjs/swagger';
import { CreateMealPlannerDto } from './create-meal_planner.dto';

export class UpdateMealPlannerDto extends PartialType(CreateMealPlannerDto) {}
