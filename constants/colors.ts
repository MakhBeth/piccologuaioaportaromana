type Variant = 'lowest' | 'low' | 'neutral' | 'high' | 'highest' | 'accent'

type Color = Record<Variant, string>

type Colors = {
  main: Omit<Color, 'accent'>
  neutral: Omit<Color, 'accent'>
  skin: Omit<Color, 'high' | 'highest'>
  accent: Pick<Color, 'neutral' | 'low'>
  red: string
  yellow: string
  green: string
}

export const neutral: Colors = {
  main: {
    lowest: '#1FB8A1',
    low: '#70EEDB',
    neutral: '#28EBCD',
    high: '#4eacc5',
    highest: '#304045',
  },
  neutral: {
    lowest: '#202020',
    low: '#202020',
    neutral: '#DEDEDE',
    high: '#F7F7F7',
    highest: '#ffffff',
  },
  skin: {
    lowest: '#BA926F',
    low: '#F3DCBC',
    neutral: '#FFEEDC',
    accent: '#EDA6B4',
  },
  accent: {
    neutral: '#F6D65D',
    low: '#CCAA3E',
  },
  red: '#c23616',
  yellow: '#fbc531',
  green: '#28EBCD',
}

export const female: Colors = {
  main: {
    lowest: '#D9799C',
    low: '#F2A0BE',
    neutral: '#F2D5E0',
    high: '#F2B3CA',
    highest: '#F2F2F2',
  },
  neutral: {
    lowest: '#202020',
    low: '#202020',
    neutral: '#DEDEDE',
    high: '#F7F7F7',
    highest: '#ffffff',
  },
  skin: {
    lowest: '#BF877A',
    low: '#F3DCBC',
    neutral: '#FFEEDC',
    accent: '#EDA6B4',
  },
  accent: {
    neutral: '#F6D65D',
    low: '#CCAA3E',
  },
  red: '#c23616',
  yellow: '#fbc531',
  green: '#28EBCD',
}

export const male: Colors = {
  main: {
    highest: '#C6FFE0',
    high: '#B4E8DB',
    neutral: '#D2FEFF',
    low: '#C6DFFF',
    lowest: '#B4D9E8',
  },
  neutral: {
    lowest: '#202020',
    low: '#202020',
    neutral: '#DEDEDE',
    high: '#F7F7F7',
    highest: '#ffffff',
  },
  skin: {
    lowest: '#BF877A',
    low: '#F3DCBC',
    neutral: '#FFEEDC',
    accent: '#EDA6B4',
  },
  accent: {
    neutral: '#F6D65D',
    low: '#CCAA3E',
  },
  red: '#c23616',
  yellow: '#fbc531',
  green: '#28EBCD',
}

export const colors: Colors = ((): Colors => {
  return female
})()
