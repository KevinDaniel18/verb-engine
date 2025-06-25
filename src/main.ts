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

async function bootstrap() {
  // const validVerbsSet = new Set(VALID_SPANISH_VERBS);
  // const irregularKeys = Object.keys(YO_GO_VERBS);

  // const allIrregularsAreValid = irregularKeys.every((verb) =>
  //   validVerbsSet.has(verb),
  // );

  // console.log(allIrregularsAreValid);

  // const missing = irregularKeys.filter((verb) => !validVerbsSet.has(verb));

  // if (missing.length > 0) {
  //   console.log(
  //     'Verbos de SPANISH_IRREGULARS que no están en VALID_SPANISH_VERBS:',
  //     missing,
  //   );
  // } else {
  //   console.log('Todos los SPANISH_IRREGULARS están en VALID_SPANISH_VERBS.');
  // }

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
