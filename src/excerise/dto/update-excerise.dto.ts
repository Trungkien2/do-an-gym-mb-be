import { PartialType } from '@nestjs/swagger';
import { CreateExceriseDto } from './create-excerise.dto';

export class UpdateExceriseDto extends PartialType(CreateExceriseDto) {}
