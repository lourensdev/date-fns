import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'darbe sa'aatii' p",
  yesterday: "'kaleessa sa'aatii' p",
  today: "'har'a sa'aatii' p",
  tomorrow: "'boru sa'aatii' p",
  nextWeek: "eeee 'itti' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
