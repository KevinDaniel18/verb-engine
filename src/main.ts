import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SPANISH_IRREGULARS } from './conjugation/languages/spanish/irregulars';
import { ENGLISH_IRREGULARS } from './conjugation/languages/english/irregulars';
import {
  GERUNDIOS_IRREGULARES,
  PARTICIPIOS_IRREGULARES,
  STEM_CHANGING_E_IE_VERBS,
  STEM_CHANGING_E_I_VERBS,
  STEM_CHANGING_O_UE_VERBS,
  YO_GO_VERBS,
} from './conjugation/languages/spanish/rules';
import { VALID_SPANISH_VERBS } from './conjugation/languages/spanish/verbs-es';
import { VALID_ENGLISH_VERBS } from './conjugation/languages/english/verbs-en';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  app.enableCors(corsOptions);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
