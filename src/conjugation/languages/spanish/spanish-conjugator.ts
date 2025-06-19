import { ConjugationResult } from 'src/conjugation/types/conjugation.types';
import { SPANISH_IRREGULARS } from './irregulars';
import {
  SPANISH_PRESENT_ENDINGS,
  SPANISH_FUTURE_SUFFIX,
  SPANISH_PAST_ENDINGS,
  SPANISH_IMPERFECT_ENDINGS,
  SPANISH_CONDITIONAL_SUFFIX,
  getPastParticiple,
  AUX_HABER,
  AUX_ESTAR,
  getGerundio,
} from './rules';
import { SPANISH_VERB_ALIASES } from './aliases';

const SUBJECTS = ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos'];

export function conjugateSpanish(verb: string): ConjugationResult {
  const normalized = verb.normalize('NFC').toLowerCase();
  const canonicalVerb = SPANISH_VERB_ALIASES[normalized] ?? normalized;

  const irregular = SPANISH_IRREGULARS[canonicalVerb];

  const root = verb.slice(0, -2);
  const ending = verb.slice(-2) as 'ar' | 'er' | 'ir';

  const presentEndings = SPANISH_PRESENT_ENDINGS[ending];
  const pastEndings = SPANISH_PAST_ENDINGS[ending];
  const imperfectEndings = SPANISH_IMPERFECT_ENDINGS[ending];
  const participle = getPastParticiple(canonicalVerb);
  const gerundio = getGerundio(canonicalVerb);

  const present: Record<string, string> = {};
  const future: Record<string, string> = {};
  const past: Record<string, string> = {};
  const imperfect: Record<string, string> = {};
  const conditional: Record<string, string> = {};
  const presentPerfect: Record<string, string> = {};
  const pastPerfect: Record<string, string> = {};
  const futurePerfect: Record<string, string> = {};
  const conditionalPerfect: Record<string, string> = {};
  const presentContinuous: Record<string, string> = {};
  const pastContinuous: Record<string, string> = {};
  const futureContinuous: Record<string, string> = {};
  const presentPerfectContinuous: Record<string, string> = {};
  const pastPerfectContinuous: Record<string, string> = {};
  const futurePerfectContinuous: Record<string, string> = {};
  const conditionalPerfectContinuous: Record<string, string> = {};

  SUBJECTS.forEach((subject, i) => {
    present[subject] = root + presentEndings[i];
    past[subject] = root + pastEndings[i];
    future[subject] = verb + SPANISH_FUTURE_SUFFIX[i];
    imperfect[subject] = root + imperfectEndings[i];
    conditional[subject] = verb + SPANISH_CONDITIONAL_SUFFIX[i];
    presentPerfect[subject] = `${AUX_HABER.present[i]} ${participle}`;
    pastPerfect[subject] = `${AUX_HABER.imperfect[i]} ${participle}`;
    futurePerfect[subject] = `${AUX_HABER.future[i]} ${participle}`;
    conditionalPerfect[subject] = `${AUX_HABER.conditional[i]} ${participle}`;
    presentContinuous[subject] = `${AUX_ESTAR.present[i]} ${gerundio}`;
    pastContinuous[subject] = `${AUX_ESTAR.imperfect[i]} ${gerundio}`;
    futureContinuous[subject] = `${AUX_ESTAR.future[i]} ${gerundio}`;
    presentPerfectContinuous[subject] =
      `${AUX_HABER.present[i]} estado ${gerundio}`;
    pastPerfectContinuous[subject] =
      `${AUX_HABER.imperfect[i]} estado ${gerundio}`;
    futurePerfectContinuous[subject] =
      `${AUX_HABER.future[i]} estado ${gerundio}`;
    conditionalPerfectContinuous[subject] =
      `${AUX_HABER.conditional[i]} estado ${gerundio}`;
  });

  if (irregular) {
    if (irregular.present) Object.assign(present, irregular.present);
    if (irregular.past) Object.assign(past, irregular.past);
    if (irregular.future) Object.assign(future, irregular.future);
    if (irregular.imperfect) Object.assign(imperfect, irregular.imperfect);
    if (irregular.conditional)
      Object.assign(conditional, irregular.conditional);
  }

  return {
    present,
    past,
    future,
    imperfect,
    conditional,
    presentPerfect,
    pastPerfect,
    futurePerfect,
    conditionalPerfect,
    presentContinuous,
    pastContinuous,
    futureContinuous,
    presentPerfectContinuous,
    pastPerfectContinuous,
    futurePerfectContinuous,
    conditionalPerfectContinuous,
  };
}
