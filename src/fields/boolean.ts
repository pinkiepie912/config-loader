import BaseField from "./base";
import {UnkownBooleanValueError} from "../errors";

const FALSE_VALUES = ['f', 'false', 'no', 'n', 'off', '0']
const TRUE_VALUES = ['t', 'true', 'yes', 'y', 'on', '1']

export default class BooleanField extends BaseField<boolean>{
  trueValues: string[]
  falseValues: string[]

  constructor(trueValues: string[] = TRUE_VALUES, falseValues: string[] = FALSE_VALUES, optional: boolean = false, defaultValue?: any) {
    super(optional, defaultValue);
    this.trueValues = trueValues
    this.falseValues = falseValues
  }

  parseString(value: string): boolean {
    if (this.trueValues.includes(value)) {
      return true
    }
    if (this.falseValues.includes(value)) {
      return false
    }
    throw new UnkownBooleanValueError(`${value} is invalid`)
  }
}