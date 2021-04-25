import BaseField from "./base";
import {InvalidJsonObjError} from "../errors";

export default class JsonField<T> extends BaseField<T>{
  objType: T;

  constructor(objType: T, optional: boolean = false, defaultValue?: any) {
    super(optional, defaultValue);
    this.objType = objType;
  }

  parseString(value: string): T {
    const obj = JSON.parse(value);
    if (typeof obj !== typeof this.objType) {
      throw new InvalidJsonObjError()
    }
    return obj
  }
}

