import { Module } from '@nestjs/common';
import { ExceriseService } from './excerise.service';
import { ExceriseController } from './excerise.controller';

@Module({
  controllers: [ExceriseController],
  providers: [ExceriseService]
})
export class ExceriseModule {}
