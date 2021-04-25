import BaseField from "./fields/base";
import { MissingConfigValueError } from "./errors";


export function loadFromEnv(prefix: string, schema: { [key: string]: BaseField<any> }) {
  const config: { [key: string]: any } = {};

  for (let key in schema) {
    let field = schema[key];
    let prefixedKey = prefix + key;

    let value = process.env[prefixedKey.toUpperCase()];
    if (value === undefined) {
      if (!field.optional) {
        throw new MissingConfigValueError(`${key} is missing`)
      } else {
        if (field.defaultValue !== undefined) {
          config[key] = field.defaultValue;
        }
      }
      continue;
    }

    value = field.parseString(value)
    config[key] = value
  }
}