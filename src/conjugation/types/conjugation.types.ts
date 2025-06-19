export type Tense =
  | 'present'
  | 'past'
  | 'future'
  | 'presentPerfect'
  | 'pastPerfect'
  | 'futurePerfect'
  | 'presentContinuous'
  | 'pastContinuous'
  | 'futureContinuous'
  | 'presentPerfectContinuous'
  | 'pastPerfectContinuous'
  | 'futurePerfectContinuous'
  | 'conditionalPerfectContinuous'

export type Person =
  | 'yo'
  | 'tú'
  | 'él/ella'
  | 'nosotros'
  | 'vosotros'
  | 'ellos'
  | 'I'
  | 'you'
  | 'he/she'
  | 'we'
  | 'they';

export interface ConjugationResult {
  [tense: string]:
    | {
        [person: string]: string;
      }
    | string
    | undefined;
}
