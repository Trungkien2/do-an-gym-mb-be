import { Controller } from '@nestjs/common';
import { ExceriseService } from './excerise.service';
import { CrudController } from 'src/core/Base/crud.controller';

@Controller('excerise')
export class ExceriseController extends CrudController<ExceriseService> {
  constructor(private readonly exceriseService: ExceriseService) {
    super(exceriseService);
  }
}
