import { Pattern, Tab } from '../types';

export const MOCK_PATTERNS: Pattern[] = [
  {
    id: '1',
    patternName: 'pqm',
    patternType: 'Alphanumeric',
    resultMaxLength: 10,
    resultPattern: 'ddnd',
    resultMinValue: null,
    resultMaxValue: null,
  },
  {
    id: '2',
    patternName: 'Test',
    patternType: 'Alphanumeric',
    resultMaxLength: 3,
    resultPattern: 'ab?',
    resultMinValue: null,
    resultMaxValue: null,
  },
  {
    id: '3',
    patternName: 'NumericPattern',
    patternType: 'Numeric',
    resultMaxLength: 5,
    resultPattern: '#####',
    resultMinValue: 0,
    resultMaxValue: 99999,
  },
  {
    id: '4',
    patternName: 'VINPattern',
    patternType: 'Alphanumeric',
    resultMaxLength: 17,
    resultPattern: '?????????????????',
    resultMinValue: null,
    resultMaxValue: null,
  },
];

export const TABS = [
  Tab.RESULT_PATTERNS,
  Tab.ATTRIBUTE_GROUPS,
  Tab.ATTRIBUTES,
  Tab.SWITCHES,
  Tab.IMPORT,
  Tab.EXPORT,
  Tab.TEST,
];
