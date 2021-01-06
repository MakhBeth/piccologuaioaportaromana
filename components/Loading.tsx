/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from '@emotion/react'
import { colors } from '../constants/colors'
import { useTranslation } from '../i18n'

export const Loading: React.FunctionComponent = () => {
  const { t } = useTranslation()
  return (
    <div
      css={css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: ${colors.main.neutral};
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
      `}
    >
      {t('loading')}
    </div>
  )
}
