import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ConjugationService } from './conjugation.service';
import { ConjugationResult } from './types/conjugation.types';
import { VALID_ENGLISH_VERBS } from './languages/english/verbs-en';
import { VALID_SPANISH_VERBS } from './languages/spanish/verbs-es';

@Controller('conjugate')
export class ConjugationController {
  constructor(private readonly conjugationService: ConjugationService) {}

  @Get()
  getConjugation(
    @Query('verb') verb: string,
    @Query('lang') lang: string,
  ): ConjugationResult {
    if (!verb || !lang) {
      throw new BadRequestException('both "verb" and "lang" are required');
    }

    try {
      return this.conjugationService.conjugate(
        verb.toLocaleLowerCase(),
        lang.toLocaleLowerCase(),
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get('valid-english-verbs')
  getValidEnglishVerbs() {
    try {
      return { verbs: Array.from(VALID_ENGLISH_VERBS) };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get('valid-spanish-verbs')
  getValidSpanishVerbs() {
    try {
      return { verbs: Array.from(VALID_SPANISH_VERBS) };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
