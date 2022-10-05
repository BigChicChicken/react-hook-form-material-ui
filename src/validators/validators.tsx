export function isEmail(value: string) {
  const regexp = new RegExp(
    '^' +
      "[a-zA-Z0-9\\.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+" +
      '$',
    'i'
  );

  return !!regexp.exec(value);
}

export function isUrl(value: string) {
  const regexp = new RegExp(
    '^' +
      '(?:https?://)?' + // Protocol
      '(?:\\S+(?::\\S*)?@)?' + // Authentication user:pass
      '(?:' +
      '(?:(?:\\d{1,3})(?:\\.\\d{1,3}){3})' + // IP address
      '|' +
      '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' + // Host name
      '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' + // Domain name
      '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' + // TLD identifier
      ')' +
      '(?::\\d{2,5})?' + // Port
      '(?:\\/[-a-zA-Z0-9()@:%_+.~#?&=]*)*' + // Path
      '$',
    'i'
  );

  return !!regexp.exec(value);
}

export function hasUppercase(value: string) {
  const regexp = new RegExp('[A-Z]');

  return !!regexp.exec(value);
}

export function hasLowercase(value: string) {
  const regexp = new RegExp('[a-z]');

  return !!regexp.exec(value);
}

export function hasDigit(value: string) {
  const regexp = new RegExp('\\d');

  return !!regexp.exec(value);
}

export function hasSpecialCharacter(value: string) {
  const regexp = new RegExp('[&~"#\'{(\\[\\-|`_\\\\@)\\]+=}^$%*?,.;\\/:!<>]');

  return !!regexp.exec(value);
}
