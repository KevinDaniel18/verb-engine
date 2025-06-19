import { Injectable } from '@nestjs/common';
import { ConjugationResult } from './types/conjugation.types';
import { conjugateSpanish } from './languages/spanish/spanish-conjugator';
import { conjugateEnglish } from './languages/english/english-conjugator';

@Injectable()
export class ConjugationService {
  conjugate(verb: string, language: string): ConjugationResult {
    switch (language.toLowerCase()) {
      case 'spanish':
        return conjugateSpanish(verb);
      case 'english':
        return conjugateEnglish(verb);
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }
}
