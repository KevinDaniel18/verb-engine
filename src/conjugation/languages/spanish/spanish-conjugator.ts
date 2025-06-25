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
  STEM_CHANGING_O_UE_VERBS,
  STEM_CHANGING_INDICES,
  STEM_CHANGING_E_IE_VERBS,
  STEM_CHANGING_E_I_VERBS,
  replaceLast,
  YO_GO_VERBS,
} from './rules';
import { SPANISH_VERB_ALIASES } from './aliases';
import { VALID_SPANISH_VERBS } from './verbs-es';

const SUBJECTS = ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos'];

export function conjugateSpanish(verb: string): ConjugationResult {
  const normalized = verb.normalize('NFC').toLowerCase();
  const canonicalVerb = SPANISH_VERB_ALIASES[normalized] ?? normalized;

  if (!VALID_SPANISH_VERBS.has(canonicalVerb)) {
    throw new Error(
      `The verb "${canonicalVerb}" is not in the list of valid verbs.`,
    );
  }
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

  function endsInVowelBeforeCerCir(verb: string): boolean {
    return /[aeiou]cer$|[aeiou]cir$/i.test(verb);
  }

  function endsInConsonantBeforeCerCir(verb: string): boolean {
    return /[^aeiou]cer$|[^aeiou]cir$/i.test(verb);
  }

  SUBJECTS.forEach((subject, i) => {
    let localRoot = root;

    if (STEM_CHANGING_INDICES.includes(i)) {
      if (canonicalVerb === 'torcer' && i === 0) {
        localRoot = replaceLast(localRoot, 'o', 'ue').replace(/c$/, 'z');
      } else if (canonicalVerb === 'oler') {
        localRoot = 'h' + replaceLast(localRoot, 'o', 'ue');
      } else if (STEM_CHANGING_O_UE_VERBS.has(canonicalVerb)) {
        localRoot = replaceLast(localRoot, 'o', 'ue');
      } else if (STEM_CHANGING_E_IE_VERBS.has(canonicalVerb)) {
        localRoot = replaceLast(localRoot, 'e', 'ie');
      } else if (STEM_CHANGING_E_I_VERBS.has(canonicalVerb)) {
        localRoot = replaceLast(localRoot, 'e', 'i');
      }
    }

    if (i === 0) {
      if (canonicalVerb.endsWith('guir')) {
        // seguir → sigo, extinguir → extingo
        localRoot = localRoot.replace(/gu(?=[ei])/, 'g');
      } else if (endsInVowelBeforeCerCir(canonicalVerb)) {
        localRoot = localRoot.replace(/c$/, 'zc'); // conocer → conozco
      } else if (endsInConsonantBeforeCerCir(canonicalVerb)) {
        localRoot = localRoot.replace(/c$/, 'z'); // vencer → venzo
      }
    }

    if (YO_GO_VERBS.has(canonicalVerb) && i === 0) {
      if (canonicalVerb === 'decir') {
        localRoot = 'dig';
      } else if (canonicalVerb === 'traer' || canonicalVerb === 'caer') {
        localRoot = root + 'ig';
      } else {
        localRoot = root + 'g';
      }
    }

    present[subject] = localRoot + presentEndings[i];

    if (STEM_CHANGING_E_I_VERBS.has(canonicalVerb) && (i === 2 || i === 5)) {
      const changedRoot = replaceLast(root, 'e', 'i');
      past[subject] = changedRoot + pastEndings[i];
    } else {
      if (i === 0) {
        if (verb.endsWith('gar')) {
          past[subject] = root.slice(0, -1) + 'gué' + pastEndings[i].slice(1);
        } else if (verb.endsWith('car')) {
          past[subject] = root.slice(0, -1) + 'qué' + pastEndings[i].slice(1);
        } else if (verb.endsWith('zar')) {
          past[subject] = root.slice(0, -1) + 'cé' + pastEndings[i].slice(1);
        } else {
          past[subject] = root + pastEndings[i];
        }
      } else {
        past[subject] = root + pastEndings[i];
      }
    }
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

export const getSpanishVerbs = Array.from(VALID_SPANISH_VERBS);
