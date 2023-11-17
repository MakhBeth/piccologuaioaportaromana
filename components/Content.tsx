/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css, keyframes } from '@emotion/react'
import { FunctionComponent } from 'react'
import { useTranslation } from '../i18n'
import { BornValues } from './BornValues'
import { Button } from './Button'
import { Notification } from './Notification'
import { Toto } from './Toto'

const enterAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Content: FunctionComponent<{ born?: boolean }> = ({ born }) => {
  const { t } = useTranslation()
  return (
    <section
      css={css`
        animation: ${enterAnimation} 1s 5s;
        animation-fill-mode: backwards;
        will-change: transform, opacity;
      `}
    >
      <BornValues />

      <Button
        as="a"
        href="https://oopswediditagain.com"
        rel="noopener noreferrer"
      >
        {t('oops')}
      </Button>
      {!born && <Toto />}
      {!born && <Notification />}
    </section>
  )
}
