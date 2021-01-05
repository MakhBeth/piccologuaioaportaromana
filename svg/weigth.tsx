/** @jsx jsx */ import { FunctionComponent } from 'react'
import { jsx } from '@emotion/core'
import { colors } from '../constants/colors'

export const Weigth: FunctionComponent = () => (
  <svg height="300px" width="300px" viewBox="0 0 300 300" x="0px" y="0px">
    <path
      fill={colors.main.neutral}
      d="M234.4,9.4H65.6C33.9,11.8,9.3,38.3,9.4,70.1v159.4c-0.1,33.7,27.1,61,60.7,61.1c0,0,0.1,0,0.1,0h159.4
	c33.7,0.1,61-27.2,61-60.8c0,0,0-0.1,0-0.1V70.3C290.8,38.4,266.2,11.8,234.4,9.4z"
    />
    <path
      fill={colors.main.low}
      d="M178.1,57.5c0-5.2,4.2-9.4,9.4-9.4s9.4,4.2,9.4,9.4v29.4h18.8V30.7h-56.2v25.6c0,5.2-4.2,9.4-9.4,9.4
	c-5.2,0-9.4-4.2-9.4-9.4V30.7h-18.8v25.6c0,5.2-4.2,9.4-9.4,9.4s-9.4-4.2-9.4-9.4V30.7H84.4v56.3h93.8V57.5z"
    />
    <path
      fill={colors.main.low}
      d="M234.4,9.4v86.8c0,5.2-4.2,9.4-9.4,9.4H75c-5.2,0-9.4-4.2-9.4-9.4V9.4C33.9,11.8,9.3,38.3,9.4,70.1v159.4
	c-0.1,33.7,27.1,61,60.7,61.1c0,0,0.1,0,0.1,0h159.4c33.7,0.1,61-27.2,61-60.8c0,0,0-0.1,0-0.1V70.3
	C290.8,38.4,266.2,11.8,234.4,9.4z"
    />
  </svg>
)
