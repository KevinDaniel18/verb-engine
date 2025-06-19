export const SPANISH_PRESENT_ENDINGS = {
  ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
  er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
  ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
};

export const SPANISH_PAST_ENDINGS = {
  ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
  er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
  ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
};

export const SPANISH_IMPERFECT_ENDINGS = {
  ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
  er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
  ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
};

export const SPANISH_CONDITIONAL_SUFFIX = [
  'ía',
  'ías',
  'ía',
  'íamos',
  'íais',
  'ían',
];

export const AUX_HABER = {
  present: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'],
  imperfect: ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'],
  future: ['habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'],
  conditional: [
    'habría',
    'habrías',
    'habría',
    'habríamos',
    'habríais',
    'habrían',
  ],
};

export const AUX_ESTAR = {
  present: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
  imperfect: [
    'estaba',
    'estabas',
    'estaba',
    'estábamos',
    'estabais',
    'estaban',
  ],
  future: ['estaré', 'estarás', 'estará', 'estaremos', 'estaréis', 'estarán'],
};

export const PARTICIPIOS_IRREGULARES: Record<string, string> = {
  abrir: 'abierto',
  decir: 'dicho',
  escribir: 'escrito',
  freír: 'frito',
  hacer: 'hecho',
  imprimir: 'impreso',
  morir: 'muerto',
  poner: 'puesto',
  resolver: 'resuelto',
  romper: 'roto',
  ver: 'visto',
  volver: 'vuelto',
  cubrir: 'cubierto',
  descubrir: 'descubierto',
  devolver: 'devuelto',
  componer: 'compuesto',
  prever: 'previsto',
  satisfacer: 'satisfecho',
  suscribir: 'suscrito',
  oír: 'oído',
  reír: "reído"
};

export const GERUNDIOS_IRREGULARES: Record<string, string> = {
  oír: 'oyendo',
  ir: 'yendo',
  leer: 'leyendo',
  traer: 'trayendo',
  caer: 'cayendo',
  creer: 'creyendo',
  construir: 'construyendo',
  destruir: 'destruyendo',
  influir: 'influyendo',
  huir: 'huyendo',
  reír: 'riendo',
  freír: 'friendo',
  decir: 'diciendo',
  venir: 'viniendo',
  sentir: 'sintiendo',
  pedir: 'pidiendo',
  dormir: 'durmiendo',
  morir: 'muriendo',
  poder: 'pudiendo',
  seguir: 'siguiendo',
  elegir: 'eligiendo',
  vestir: 'vistiendo',
  repetir: 'repitiendo',
  servir: 'sirviendo',
  mentir: 'mintiendo',
  sugerir: 'sugiriendo',
  obtener: 'obteniendo',
  detener: 'deteniendo',
};

export const SPANISH_FUTURE_SUFFIX = ['é', 'ás', 'á', 'emos', 'éis', 'án'];

export const getSpanishFutureConjugation = (infinitive: string): string[] => {
  return SPANISH_FUTURE_SUFFIX.map((suffix) => infinitive + suffix);
};

export const getPastParticiple = (verb: string): string => {
  if (PARTICIPIOS_IRREGULARES[verb]) return PARTICIPIOS_IRREGULARES[verb];

  const ending = verb.slice(-2);
  const root = verb.slice(0, -2);

  if (ending === 'ar') return root + 'ado';
  if (ending === 'er' || ending === 'ir') return root + 'ido';

  return verb;
};

export const getGerundio = (verb: string): string => {
  if (GERUNDIOS_IRREGULARES[verb]) return GERUNDIOS_IRREGULARES[verb];

  const root = verb.slice(0, -2);
  const ending = verb.slice(-2);

  if (ending === 'ar') return root + 'ando';
  if (ending === 'er' || ending === 'ir') return root + 'iendo';

  return verb;
};
