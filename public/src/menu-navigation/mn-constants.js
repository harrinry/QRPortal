export const CLASSES = {
  menu: 'qrp_menu-navigation',
  standardsSubMenu: 'qrp_stdsm'
};

export const ITEMS = {
  TECHNOLOGIES: 'Technologies',
  EXTENSIONS: 'Sources',
  BUSINESSCRITERIA: 'CAST',
  OWASP: 'OWASP',
  CISQ: 'CISQ',
  STANDARDS: 'Standards'
};

export const AIP_VERSIONS_EXT = {
  title: 'CAST AIP',
  href: 'AIP/versions.json',
  versions: [],
  loading: false
};

const QUERIES = {
  businessCriteria: 'AIP/business-criteria',
  cisq: 'AIP/quality-standards/CISQ/categories',
  owasp: 'AIP/quality-standards/OWASP/categories',
  technologies: 'aip/technologies',
  extensions: 'aip/extensions',
  standards: 'AIP/quality-standards',
};

export const PATHS = {
  standard: {name: ITEMS.STANDARDS, href: QUERIES.standards, icon: 'img/standards.svg'},
  cisq: {name: ITEMS.CISQ, href: QUERIES.cisq, icon: 'img/' + ITEMS.CISQ + '.svg'},
  owasp: {name: ITEMS.OWASP, href: QUERIES.owasp, icon: 'img/' + ITEMS.OWASP + '.svg'},
  businessCriteria: {name: ITEMS.BUSINESSCRITERIA, href: QUERIES.businessCriteria, icon: 'img/castsoftware.svg'},
  technologies: {name: ITEMS.TECHNOLOGIES, href: QUERIES.technologies, icon: 'img/technologies.svg'},
  extensions: {name: ITEMS.EXTENSIONS, href: QUERIES.extensions, icon: 'img/sources.svg'}
};

export const qualityRules_post = '/quality-rules';

export const EXTENTION_QUERY_PREFIX = 'rules/extensions?q=';