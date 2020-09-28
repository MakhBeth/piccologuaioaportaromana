import styled from '@emotion/styled'
import { colors } from '../constants/colors'

export const Button = styled.button`
  border: 0;
  outline: none;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
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
    box-shadow: calc(10px + 0.5rem) calc(10px + 0.5rem) calc(10px + 0.5rem)
      ${colors.shadow};
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
`
