/**
 * Validate an email address.
 * https://html.spec.whatwg.org/multipage/input.html#email-state-(type=email)
 * @param {string} email - The email to validate.
 * @returns {boolean}
 */
export function isValidEmailAddress(email: string): boolean {
  // eslint-disable-next-line
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    email,
  )
}

export function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  return keys.reduce((acc, currValue) => {
    return { ...acc, [currValue]: obj[currValue] }
  }, {} as Pick<T, K>)
}

export function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && !Array.isArray(v) && v !== null;
}

export function isString(v: unknown): v is string {
  return typeof v === 'string'
}

