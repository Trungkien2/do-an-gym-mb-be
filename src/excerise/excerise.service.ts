import { Injectable } from '@nestjs/common';
import { CreateExceriseDto } from './dto/create-excerise.dto';
import { UpdateExceriseDto } from './dto/update-excerise.dto';
import { CrudService } from 'src/core/Base/crud.service';
import { Excerise } from './entities/excerise.entity';

@Injectable()
export class ExceriseService extends CrudService<Excerise> {
  constructor() {
    super(Excerise);
  }
}
