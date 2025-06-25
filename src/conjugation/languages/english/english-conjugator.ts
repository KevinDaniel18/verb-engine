import { ConjugationResult } from 'src/conjugation/types/conjugation.types';
import { ENGLISH_IRREGULARS } from './irregulars';
import {
  EN_PAST_SUFFIX,
  EN_PRESENT_SIMPLE_3RD_PERSON_SUFFIX,
  getBePast,
  getBePresent,
  toGerund,
} from './rules';
import { VALID_ENGLISH_VERBS } from './verbs-en';

const SUBJECTS = ['I', 'you', 'he/she', 'we', 'they'];

export function conjugateEnglish(verb: string): ConjugationResult {
  if (!VALID_ENGLISH_VERBS.has(verb)) {
    throw new Error(`The verb "${verb}" is not in the list of valid verbs.`);
  }

  const irregular = ENGLISH_IRREGULARS[verb];

  const pastParticiple = irregular?.pastParticiple ?? EN_PAST_SUFFIX(verb);
  const gerund = irregular?.presentParticiple ?? toGerund(verb);

  const present: Record<string, string> = {};
  const past: Record<string, string> = {};
  const future: Record<string, string> = {};
  const presentPerfect: Record<string, string> = {};
  const pastPerfect: Record<string, string> = {};
  const futurePerfect: Record<string, string> = {};
  const presentContinuous: Record<string, string> = {};
  const pastContinuous: Record<string, string> = {};
  const futureContinuous: Record<string, string> = {};
  const presentPerfectContinuous: Record<string, string> = {};
  const pastPerfectContinuous: Record<string, string> = {};
  const futurePerfectContinuous: Record<string, string> = {};

  SUBJECTS.forEach((subject) => {
    const isThirdPerson = subject === 'he/she';

    // Simple tenses
    present[subject] =
      irregular?.present?.[subject] ??
      (isThirdPerson ? EN_PRESENT_SIMPLE_3RD_PERSON_SUFFIX(verb) : verb);
    past[subject] = irregular?.past?.[subject] || EN_PAST_SUFFIX(verb);
    future[subject] = `will ${verb}`;

    // Perfect tenses
    presentPerfect[subject] =
      `${isThirdPerson ? 'has' : 'have'} ${pastParticiple}`;
    pastPerfect[subject] = `had ${pastParticiple}`;
    futurePerfect[subject] = `will have ${pastParticiple}`;

    // Continuous tenses
    presentContinuous[subject] = `${getBePresent(subject)} ${gerund}`;
    pastContinuous[subject] = `${getBePast(subject)} ${gerund}`;
    futureContinuous[subject] = `will be ${gerund}`;

    // Perfect continuous
    presentPerfectContinuous[subject] =
      `${isThirdPerson ? 'has' : 'have'} been ${gerund}`;
    pastPerfectContinuous[subject] = `had been ${gerund}`;
    futurePerfectContinuous[subject] = `will have been ${gerund}`;
  });

  return {
    present,
    past,
    future,
    presentPerfect,
    pastPerfect,
    futurePerfect,
    presentContinuous,
    pastContinuous,
    futureContinuous,
    presentPerfectContinuous,
    pastPerfectContinuous,
    futurePerfectContinuous,
  };
}

export const getEnglishVerbs = Array.from(VALID_ENGLISH_VERBS);
