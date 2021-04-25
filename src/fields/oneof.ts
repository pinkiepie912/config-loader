import BaseField from "./base";
import {InvalidValueError} from "../errors";

export default class OneOfStringField extends BaseField<string>{
  values: string[]

  constructor(values: string[], optional: boolean = false, defaultValue?: any) {
    super(optional, defaultValue)
    this.values = values;
  }

  parseString(value: string): string {
    if (!this.values.includes(value)) {
      throw new InvalidValueError(`${value} is not in given array: ${this.values}`)
    }
    return value
  }
}
