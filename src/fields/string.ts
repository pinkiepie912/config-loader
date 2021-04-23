import BaseField from "./base";

export default class StringField extends BaseField{
  strip: boolean

  constructor(optional: boolean = false, defaultValue?: any, strip: boolean = false) {
    super(optional, defaultValue)
    this.strip = strip
  }

  parse_string(value: string): string {
    if (this.strip) {
      value = value.replace(' ', '');
    }
    return value
  }
}