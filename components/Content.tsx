/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core'
import { FunctionComponent } from 'react'
import { colors } from '../constants/colors'

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

export const Content: FunctionComponent = () => (
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
      Nel frattempo:
    </h3>
    <a
      href="https://www.amazon.it/baby-reg/davide-dipumpo-febbraio-2021-milano/1SYN7DGSB0SVY"
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        padding: 0.25em 1em;
        color: ${colors.main.lowest};
        display: inline-block;
        text-decoration: none;
        background-color: ${colors.neutral.highest};
        font-size: calc(1.2rem + (16 * 1) * (100vw - 320px) / (1800 - 320));
        border-radius: 0.25rem;
        box-shadow: 10px 10px 10px ${colors.shadow};
        margin-bottom: 2rem;
        transition: all 300ms cubic-bezier(0, 0.94, 0.13, 1.115);
        position: relative;

        &:hover {
          transform: translate(-0.5rem, -0.5rem);
          box-shadow: calc(10px + 0.5rem) calc(10px + 0.5rem)
            calc(10px + 0.5rem) ${colors.shadow};
        }

        &::after {
          content: '';
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          position: absolute;
        }

        &:hover::after {
          height: calc(100% + 10px + 0.5rem);
          width: calc(100% + 10px + 0.5rem);
        }
      `}
    >
      Lista nascita
    </a>
  </section>
)
