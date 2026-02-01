export interface Pattern {
  id: string;
  patternName: string;
  patternType: 'Alphanumeric' | 'Numeric' | 'Boolean' | 'Text';
  resultMaxLength: number | null;
  resultPattern: string;
  resultMinValue: number | null;
  resultMaxValue: number | null;
}

export enum Tab {
  RESULT_PATTERNS = 'Result Patterns',
  ATTRIBUTE_GROUPS = 'Attribute Groups',
  ATTRIBUTES = 'Attributes',
  SWITCHES = 'Switches',
  IMPORT = 'Import',
  EXPORT = 'Export',
  TEST = 'Test',
}
