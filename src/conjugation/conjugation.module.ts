import { Module } from '@nestjs/common';
import { ConjugationService } from './conjugation.service';
import { ConjugationController } from './conjugation.controller';

@Module({
  controllers: [ConjugationController],
  providers: [ConjugationService],
  exports: [ConjugationService],
})
export class ConjugationModule {}
