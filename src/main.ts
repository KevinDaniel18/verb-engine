import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SPANISH_IRREGULARS } from './conjugation/languages/spanish/irregulars';

async function bootstrap() {
  console.log('Verbos irregulares:', Object.keys(SPANISH_IRREGULARS));
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
