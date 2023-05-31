import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /^(\d+)(ffaa)?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(od|kb)/i,
  wide: /^(kiristoos dura|anno domini)/i,
}
const parseEraPatterns = {
  any: [/^(b|a)/i, /^(od|kb)/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[13]tti|^q[1234]/i,
  wide: /^Kurmaana [1234](ffaa)?/i,
}
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated:
    /(amajjii|Gurraandhala|ama|Ebla|caamsaa|waxabajjii|adool|Hagayya|ful|onkololeessa|sad|Muddee)/i,
  wide: /(amajjii|Gurraandhala|amajjii|Ebla|caamsaa|waxabajjii|adoolessa|Hagayya|fulbaana|onkololeessa|sadaasa|Muddee)/i,
}
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ] as const,
  any: [
    /^amajjii/i,
    /^Gurraandhala/i,
    /^ama/i,
    /^Ebla/i,
    /^caamsaa/i,
    /^waxabajjii/i,
    /^adool/i,
    /^Hagayya/i,
    /^ful/i,
    /^onkololeessa/i,
    /^sad/i,
    /^Muddee/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|nuti|fr|sa)/i,
  abbreviated: /^(dilbata|wiiyxata|kibxata|roobii|kamisa|Jimaata|sanbata)/i,
  wide: /^(dilbata|wiiyxata|kibxata|roobii|kamisa|Jimaata|sanbata)/i,
}
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i] as const,
  short: [/su/i, /mo/i, /tu/i, /we/i, /nuti/i, /fr/i, /sa/i] as const,
  any: [/^dil/i, /^wii/i, /^ki/i, /^ro/i, /^ka/i, /^ji/i, /^sa/i] as const,
}

const matchDayPeriodPatterns = {
  any: /^am|^a\.m\.|^a|^pm|^p\.m\.|^p|mi|n|(halkan walakkaa)|ganama|(waaree booda)|(galgala galgala)|halkan/i,
}
const parseDayPeriodPatterns = {
  any: {
    am: /^am|^a\.m\|^a./i,
    pm: /^pm|^p\.m\|^p./i,
    midnight: /^mi|(halkan walakkaa)/i,
    noon: /waaree/i,
    morning: /ganama/i,
    afternoon: /(waaree booda)/i,
    evening: /galgala/i,
    night: /halkan/i,
  },
}

const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any',
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: (index) => (index + 1) as Quarter,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any',
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any',
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any',
  }),
}

export default match
