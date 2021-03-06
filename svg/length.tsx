/** @jsx jsx */ import { FunctionComponent } from 'react'
import { jsx, SerializedStyles } from '@emotion/core'

export const Length: FunctionComponent<{ addcss?: SerializedStyles }> = ({
  addcss,
}) => (
  <div css={addcss}>
    <svg viewBox="0 0 300 300" x="0px" y="0px">
      <path fill="currentColor" d="M9.9,9.7l0,76.6l281.2,0l0-76.6L9.9,9.7z" />
      <path
        d="M265.3,9.7l0,18.1c0,2.6-1.1,5-2.8,6.7c-1.7,1.7-4.1,2.8-6.7,2.8c-5.2,0-9.5-4.2-9.5-9.5l0-18.1c0,0,0,0,0,0
		l-33.8,0l0,18.1c0,2.6-1.1,5-2.8,6.7c-1.7,1.7-4.1,2.8-6.7,2.8c-5.2,0-9.5-4.2-9.5-9.5l0-18.1l0,0l-33.8,0c0,0,0,0,0,0l0,18.1
		c0,2.6-1.1,5-2.8,6.7c-1.7,1.7-4.1,2.8-6.7,2.8c-5.2,0-9.5-4.2-9.5-9.5l0-18.1l-33.8,0l0,0l0,18.1c0,2.6-1.1,5-2.8,6.7
		s-4.1,2.8-6.7,2.8c-5.2,0-9.5-4.2-9.5-9.5l0-18.1l-33.8,0l0,18.1c0,2.6-1.1,5-2.8,6.7s-4.1,2.8-6.7,2.8c-5.2,0-9.5-4.2-9.5-9.5
		l0-18.1l-25.6,0l0,76.6l281.2,0l0-76.6L265.3,9.7z"
      />
    </svg>
  </div>
)
