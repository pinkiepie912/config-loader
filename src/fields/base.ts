export default class BaseField {
  optional: boolean
  defaultValue?: any

  constructor(optional: boolean = false, defaultValue?: any) {
    if (optional && defaultValue !== undefined) {
      throw new TypeError('optional can not be used with defaultValue');
    }
    this.optional = optional;
    this.defaultValue = defaultValue;
  }

  parse_string(value: string): string {
    return value
  }
}