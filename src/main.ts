import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SPANISH_IRREGULARS } from './conjugation/languages/spanish/irregulars';
import { ENGLISH_IRREGULARS } from './conjugation/languages/english/irregulars';

async function bootstrap() {
  console.log('Verbos irregulares:', Object.keys(SPANISH_IRREGULARS));
  console.log('Irregular verbs:', Object.keys(ENGLISH_IRREGULARS));
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
