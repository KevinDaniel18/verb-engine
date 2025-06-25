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
  reír: 'reído',
};

export const GERUNDIOS_IRREGULARES: Record<string, string> = {
  // Gerundios con cambio de vocal
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
  dormir: 'durmiendo',
  morir: 'muriendo',
  poder: 'pudiendo',
  obtener: 'obteniendo',
  detener: 'deteniendo',

  // Verbos e→i en gerundio
  herir: 'hiriendo',
  preferir: 'prefiriendo',
  sentir: 'sintiendo',
  mentir: 'mintiendo',
  arrepentirse: 'arrepintiéndose',
  consentir: 'consintiendo',
  presentir: 'presintiendo',
  resentir: 'resintiendo',
  disentir: 'disintiendo',
  asentir: 'asintiendo',
  convertir: 'convirtiendo',
  divertir: 'divirtiendo',
  advertir: 'advirtiendo',
  pervertir: 'pervirtiendo',
  invertir: 'invirtiendo',
  subvertir: 'subvirtiendo',
  revertir: 'revirtiendo',
  sugerir: 'sugiriendo',
  inferir: 'infiriendo',
  conferir: 'confiriendo',
  diferir: 'difiriendo',
  transferir: 'transfiriendo',
  referir: 'refiriendo',
  deferir: 'defiriendo',
  adherir: 'adhiriendo',
  adquirir: 'adquiriendo',
  inquirir: 'inquiriendo',
  requerir: 'requiriendo',
  servir: 'sirviendo',
  repetir: 'repitiendo',
  competir: 'compitiendo',
  impedir: 'impidiendo',
  medir: 'midiendo',
  pedir: 'pidiendo',
  despedir: 'despidiendo',
  expedir: 'expidiendo',
  vestir: 'vistiendo',
  investir: 'invistiendo',
  revestir: 'revistiendo',
  desvestir: 'desvistiendo',
  seguir: 'siguiendo',
  conseguir: 'consiguiendo',
  perseguir: 'persiguiendo',
  proseguir: 'prosiguiendo',
  subseguir: 'subsiguiendo',
  elegir: 'eligiendo',
  reelegir: 'reeligiendo',
  corregir: 'corrigiendo',
  dirigir: 'dirigiendo',
  erigir: 'erigiendo',
  exigir: 'exigiendo',
  fingir: 'fingiendo',
  infligir: 'infligiendo',
  regir: 'rigiendo',
  surgir: 'surgiendo',
  teñir: 'tiñendo',
  ceñir: 'ciñendo',
  reñir: 'riñendo',
  estreñir: 'estreñendo',
  constreñir: 'constriñendo',
  desceñir: 'desciñendo',
  embestir: 'embistiendo',
  gemir: 'gimiendo',
  henchir: 'hinchendo',
  rendir: 'rindiendo',
  hendir: 'hindiendo',
  desleír: 'desliendo',
  refreír: 'refriendo',
  sofreír: 'sofriendo',
  sonreír: 'sonriendo',
  derretir: 'derritiendo',
  erguir: 'irguiendo',
  brunir: 'bruñendo',
  mullir: 'mullendo',
  bullir: 'bullendo',
  engullir: 'engullendo',
  zambullir: 'zambullendo',
  escabullir: 'escabullendo',
  tullir: 'tullendo',
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

export const STEM_CHANGING_INDICES = [0, 1, 2, 5];

export const STEM_CHANGING_O_UE_VERBS = new Set([
  'soñar',
  'sonar',
  'contar',
  'costar',
  'mostrar',
  'volar',
  'encontrar',
  'recordar',
  'probar',
  'colgar',
  'morder',
  'dormir',
  'morir',
  'resolver',
  'rogar',
  'tronar',
  'volver',
  'remover',
  'mover',
  'acordar',
  'poder',
  'devolver',
  'envolver',
  'revolver',
  'dissolve', // disolver
  'almorzar',
  'forzar',
  'esforzar',
  'reforzar',
  'acostar',
  'acostarse',
  'apostar',
  'tostar',
  'comprobar',
  'aprobar',
  'reprobar',
  'desaprobar',
  'soltar',
  'revolcar',
  'volcar',
  'consolar',
  'poblar',
  'despoblar',
  'repoblar',
  'renovar',
  'innovar',
  'oval', // ovalar (menos común)
  'colar',
  'escolar',
  'dolar', // adolar (menos común)
  'sobrar',
  'cobrar',
  'doblar',
  'poblar',
  'rodar',
  'brotar',
  'abordar',
  'acordarse',
  'recordarse',
  'encontrarse',
  'acostumbrarse',
  'avergonzarse',
  'oler',
  'hollar',
  'soldar',
  'moldear', // aunque no es exacto
  'cometer', // comover
  'promover',
  'conmover',
  'demoler',
  'absorber',
  'torcer',
  'retorcer',
  'destorcer',
  'coser', // aunque es regular
  'doler',
  'condolerse',
  'soler',
  'moler',
  'holgazanear', // holgar
]);

export const STEM_CHANGING_E_IE_VERBS = new Set([
  'pensar',
  'cerrar',
  'empezar',
  'preferir',
  'perder',
  'sentir',
  'mentir',
  'comenzar',
  'negar',
  'recomendar',
  'temblar',
  'tropezar',
  'entender',
  'defender',
  'encender',
  'atender',
  'extender',
  'tender',
  'ascender',
  'descender',
  'atravesar',
  'confesar',
  'despertar',
  'apretar',
  'calentar',
  'sentar',
  'acertar',
  'gobernar',
  'helar',
  'nevar',
  'sembrar',
  'fregar',
  'plegar',
  'regar',
  'segar',
  'sosegar',
  'desterrar',
  'enterrar',
  'alentar',
  'aventar',
  'quebrar',
  'manifestar',
  'reventar',
  'despertarse',
  'sentarse',
  'convertir',
  'divertir',
  'advertir',
  'sugerir',
  'referir',
  'transferir',
  'consentir',
  'presentir',
  'resentir',
  'arrepentirse',
  'herrar',
  'serrar',
  'deshelar',
  'escarmentar',
  'incensar',
  'invernar',
  'merendar',
  'renegar',
  'replegar',
  'restregar',
  'sostenerse',
  'malentender',
  'herir',
  'arrepentir',
]);

export const STEM_CHANGING_E_I_VERBS = new Set([
  'pedir',
  'servir',
  'repetir',
  'medir',
  'competir',
  'vestir',
  'seguir',
  'conseguir',
  'impedir',
  'corregir',
  'despedir',
]);

export const YO_GO_VERBS = new Set([
  'tener',
  'venir',
  'poner',
  'salir',
  'valer',
  'hacer',
  'traer',
  'decir',
  'caer',
]);

export function replaceLast(
  str: string,
  search: string,
  replace: string,
): string {
  const index = str.lastIndexOf(search);
  return index === -1
    ? str
    : str.slice(0, index) + replace + str.slice(index + search.length);
}

export const getGerundio = (verb: string): string => {
  if (GERUNDIOS_IRREGULARES[verb]) return GERUNDIOS_IRREGULARES[verb];

  const root = verb.slice(0, -2);
  const ending = verb.slice(-2);

  if (ending === 'ar') return root + 'ando';
  if (ending === 'er' || ending === 'ir') return root + 'iendo';

  return verb;
};
