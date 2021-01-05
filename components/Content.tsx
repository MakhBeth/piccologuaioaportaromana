/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core'
import { FunctionComponent } from 'react'
import { useTranslation } from '../i18n'
import { Button } from './Button'
import { Notification } from './Notification'

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
      <Button
        as="a"
        href="https://www.amazon.it/baby-reg/davide-dipumpo-febbraio-2021-milano/1SYN7DGSB0SVY"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('babyregistry')}
      </Button>
      {!born && <Notification />}
    </section>
  )
}
