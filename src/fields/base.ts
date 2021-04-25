export default abstract class BaseField<T> {
  optional: boolean
  defaultValue?: T

  constructor(optional: boolean = false, defaultValue?: T) {
    if (optional && defaultValue !== undefined) {
      throw new TypeError('optional can not be used with defaultValue');
    }
    this.optional = optional;
    this.defaultValue = defaultValue;
  }

  abstract parseString(value: string): T
}