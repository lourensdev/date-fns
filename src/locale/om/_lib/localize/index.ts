import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['B', 'A'] as const,
  abbreviated: ['OD', 'KB'] as const,
  wide: ['Kiristoos dura', 'Anno Domini'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Q1tti', 'Q2', 'Q3tti', 'Q4'] as const,
  wide: [
    'Kurmaana 1ffaa',
    'Kurmaana 2ffaa',
    'Kurmaana 3ffaa',
    'Kurmaana 4ffaa',
  ] as const,
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'] as const,
  abbreviated: [
    'amajjii',
    'Gurraandhala',
    'ama',
    'Ebla',
    'caamsaa',
    'waxabajjii',
    'adool',
    'Hagayya',
    'ful',
    'onkololeessa',
    'sad',
    'Muddee',
  ] as const,
  wide: [
    'amajjii',
    'Gurraandhala',
    'amajjii',
    'Ebla',
    'caamsaa',
    'waxabajjii',
    'adoolessa',
    'Hagayya',
    'fulbaana',
    'onkololeessa',
    'sadaasa',
    'Muddee',
  ] as const,
}

const dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as const,
  short: ['Su', 'Mo', 'Tu', 'Nuti', 'Th', 'Fr', 'Sa'] as const,
  abbreviated: [
    'dilbata',
    'wiiyxata',
    'kibxata',
    'roobii',
    'kamisa',
    'Jimaata',
    'sanbata',
  ] as const,
  wide: [
    'dilbata',
    'wiiyxata',
    'kibxata',
    'roobii',
    'kamisa',
    'Jimaata',
    'sanbata',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'ganama',
    afternoon: 'waaree booda',
    evening: 'galgala',
    night: 'halkan',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'halkan walakkaa',
    noon: 'waaree',
    morning: 'ganama',
    afternoon: 'waaree booda',
    evening: 'galgala',
    night: 'halkan',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'halkan walakkaa',
    noon: 'waaree',
    morning: 'ganama',
    afternoon: 'waaree booda',
    evening: 'galgala',
    night: 'halkan',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'ganama',
    afternoon: 'waaree booda',
    evening: 'galgala galgala',
    night: 'halkan',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'halkan walakkaa',
    noon: 'waaree',
    morning: 'ganama',
    afternoon: 'waaree booda',
    evening: 'galgala galgala',
    night: 'halkan',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'halkan walakkaa',
    noon: 'waaree',
    morning: 'ganama',
    afternoon: 'waaree booda',
    evening: 'galgala galgala',
    night: 'halkan',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  const number = Number(dirtyNumber)

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  return number + 'ffaa'
}

const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => (quarter - 1) as Quarter,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
