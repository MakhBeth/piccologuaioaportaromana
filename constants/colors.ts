import { opacify } from 'polished'
type Variant = 'lowest' | 'low' | 'neutral' | 'high' | 'highest' | 'accent'

type Color = Record<Variant, string>

type Colors = {
  main: Omit<Color, 'accent' | 'high' | 'highest'>
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
    neutral: '#D2FEFF',
    low: '#C6DFFF',
    lowest: '#60A4BF',
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

export const colors = ((theme): Colors & { shadow: string } => {
  return { shadow: opacify(-0.25, theme.main.low), ...theme }
})(male)
