export function isUrl(value) {
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
  )

  return !!regexp.exec(value)
}