const SEARCH_CRITERIA = [
  {
    label: 'None',
    value: '',
    isAuthRequired: false,
  },
  {
    label: 'id',
    value: 'id',
    isAuthRequired: false,
  },
  {
    label: 'Name',
    value: 'name',
    isAuthRequired: false,
  },
  {
    label: 'Rationale',
    value: 'rationale',
    isAuthRequired: false,
  },
  {
    label: 'Technologies',
    value: 'technologies',
    isAuthRequired: false,
  },
  // {
  //   label: 'Severity',
  //   value: 'severity',
  //   isAuthRequired: true,
  // },
  {
    label: 'Remediation',
    value: 'remediation',
    isAuthRequired: true,
  },
  {
    label: 'Sample',
    value: 'sample',
    isAuthRequired: true,
  },
  {
    label: 'Technical criteria',
    value: 'technical-criteria',
    isAuthRequired: true,
  },
  {
    label: 'Business criteria',
    value: 'business-criteria',
    isAuthRequired: true,
  },
  {
    label: 'Quality standards',
    value: 'quality-standards',
    isAuthRequired: true,
  },
];

export const DEFAULT_CRITERION = '';

export default SEARCH_CRITERIA;
