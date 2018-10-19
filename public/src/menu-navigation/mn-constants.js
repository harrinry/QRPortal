export const CLASSES = {
  menu: 'qrp_menu-navigation',
  standardsSubMenu: 'qrp_stdsm',
  container: 'qrp_MenuNavContainer',
  br: 'qrp_menu_nav_br'
};

export const ITEMS = {
  TECHNOLOGIES: 'Technologies',
  EXTENSIONS: 'Packages',
  BUSINESSCRITERIA: 'CAST',
  OWASP: 'OWASP',
  CISQ: 'CISQ',
  CWE: 'CWE',
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
  cwe: 'AIP/quality-standards/CWE/categories',
  technologies: 'aip/technologies',
  extensions: 'aip/extensions',
  standards: 'AIP/quality-standards',
};

export const PATHS = {
  standard: {name: ITEMS.STANDARDS, href: QUERIES.standards, icon: 'img/standards.svg'},
  cisq: {name: ITEMS.CISQ, href: QUERIES.cisq, icon: 'img/' + ITEMS.CISQ + '.svg'},
  cwe: {name: ITEMS.CWE, href: QUERIES.cwe, icon: 'img/' + ITEMS.CWE + '.svg'},
  owasp: {name: ITEMS.OWASP, href: QUERIES.owasp, icon: 'img/' + ITEMS.OWASP + '.svg'},
  businessCriteria: {name: ITEMS.BUSINESSCRITERIA, href: QUERIES.businessCriteria, icon: 'img/castsoftware.svg'},
  technologies: {name: ITEMS.TECHNOLOGIES, href: QUERIES.technologies, icon: 'img/technologies.svg'},
  extensions: {name: ITEMS.EXTENSIONS, href: QUERIES.extensions, icon: 'img/sources.svg'}
};
