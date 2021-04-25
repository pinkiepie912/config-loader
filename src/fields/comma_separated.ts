import BaseField from "./base";

export default class CommaSeparatedStringField extends BaseField<string[]>{
  strip: boolean;

  constructor(strip: boolean = false, optional: boolean = false, defaultValue?: any) {
    super(optional, defaultValue);
    this.strip = strip;
  }

  parseString(value: string): string[] {
    if (this.strip) {
      value = value.replace(' ', '');
    }
    return value.split(',')
  }
}
