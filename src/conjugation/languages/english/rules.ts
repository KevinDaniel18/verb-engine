export const EN_PRESENT_SIMPLE_3RD_PERSON_SUFFIX = (verb: string): string => {
  if (verb.endsWith('y') && !/[aeiou]y$/.test(verb)) {
    return verb.slice(0, -1) + 'ies';
  }
  if (
    verb.endsWith('o') ||
    verb.endsWith('ch') ||
    verb.endsWith('sh') ||
    verb.endsWith('x') ||
    verb.endsWith('s')
  ) {
    return verb + 'es';
  }
  return verb + 's';
};

export const EN_PAST_SUFFIX = (verb: string): string => {
  if (verb.endsWith('e')) return verb + 'd';
  if (verb.endsWith('y') && !/[aeiou]y$/.test(verb))
    return verb.slice(0, -1) + 'ied';
  return verb + 'ed';
};

export const toGerund = (verb: string): string => {
  if (verb.endsWith('e') && verb !== 'be') return verb.slice(0, -1) + 'ing';
  return verb + 'ing';
};

export const getBePresent = (subject: string): string => {
  switch (subject) {
    case 'I':
      return 'am';
    case 'he/she':
      return 'is';
    case 'you':
    case 'we':
    case 'they':
      return 'are';
    default:
      throw new Error(`Invalid subject: ${subject}`);
  }
};

export const getBePast = (subject: string): string => {
  switch (subject) {
    case 'I':
    case 'he/she':
      return 'was';
    case 'you':
    case 'we':
    case 'they':
      return 'were';
    default:
      throw new Error(`Invalid subject: ${subject}`);
  }
};
