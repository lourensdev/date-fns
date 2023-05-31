import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenValue =
  | string
  | {
      one: string
      other: string
    }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'sekondii tokkoo gadi',
    other: '{{count}} sekondii gadi',
  },

  xSeconds: {
    one: 'sekondii 1',
    other: '{{count}} sekondii',
  },

  halfAMinute: 'walakkaa daqiiqaa',

  lessThanXMinutes: {
    one: 'daqiiqaa tokkoo gadi',
    other: 'daqiiqaa {{count}} gadi',
  },

  xMinutes: {
    one: 'daqiiqaa 1',
    other: '{{count}} daqiiqaa',
  },

  aboutXHours: {
    one: 'gara sa’aatii 1tti',
    other: "waa'ee {{count}} sa'aatii",
  },

  xHours: {
    one: "sa'aatii 1",
    other: "{{count}} sa'aatii",
  },

  xDays: {
    one: 'guyyoota 1',
    other: '{{count}} guyyoota',
  },

  aboutXWeeks: {
    one: 'gara torban 1',
    other: 'gara torban {{count}}',
  },

  xWeeks: {
    one: 'torban 1',
    other: '{{count}} torban',
  },

  aboutXMonths: {
    one: "gara ji'a 1tti",
    other: "about {{count}} ji'oota",
  },

  xMonths: {
    one: "ji'oota 1",
    other: "{{count}} ji'oota",
  },

  aboutXYears: {
    one: 'gara waggaa 1',
    other: 'gara {{count}} waggaa',
  },

  xYears: {
    one: 'waggaa 1',
    other: '{{count}} waggaa',
  },

  overXYears: {
    one: 'waggaa 1 ol',
    other: 'waggaa {{count}} ol',
  },

  almostXYears: {
    one: 'almost waggaa 1',
    other: 'almost {{count}} waggaa',
  },
}

const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result

  const tokenValue = formatDistanceLocale[token]
  if (typeof tokenValue === 'string') {
    result = tokenValue
  } else if (count === 1) {
    result = tokenValue.one
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString())
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'keessa ' + result
    } else {
      return result + ' dura'
    }
  }

  return result
}

export default formatDistance
