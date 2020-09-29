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

export const Content: FunctionComponent = () => {
  const { t } = useTranslation()
  return (
    <section
      css={css`
        animation: ${enterAnimation} 1s 5s;
        animation-fill-mode: backwards;
      `}
    >
      <h3
        css={css`
          font-size: calc(0.8rem + (8 * 1) * (100vw - 320px) / (1800 - 320));
          margin-bottom: 1em;
        `}
      >
        {t('meanwhile')}
      </h3>
      <Button
        as="a"
        href="https://www.amazon.it/baby-reg/davide-dipumpo-febbraio-2021-milano/1SYN7DGSB0SVY"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('babyregistry')}
      </Button>
      <Notification />
    </section>
  )
}
