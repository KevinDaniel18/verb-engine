import { Module } from '@nestjs/common';
import { ConjugationModule } from './conjugation/conjugation.module';

@Module({
  imports: [ConjugationModule],
})
export class AppModule {}
