import styled from '@emotion/styled'
import { colors } from '../constants/colors'

// TODO type the Button or Anchor
export const Button: any = styled.button`
  background-color: ${colors.neutral.highest};
  border-radius: 0.25rem;
  border: 0;
  box-shadow: 10px 10px 0 ${colors.shadow};
  color: ${colors.neutral.lowest};
  display: inline-block;
  font-size: calc(1.2rem + (16 * 1) * (100vw - 320px) / (1800 - 320));
  margin-bottom: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  outline: none;
  padding: 0.25em 1em;
  position: relative;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0, 0.94, 0.13, 1.115);
  will-change: transform, box-shadow;

  &:hover {
    box-shadow: calc(10px + 0.5rem) calc(10px + 0.5rem) 0 ${colors.shadow};
    transform: translate(-0.5rem, -0.5rem);
  }

  &::after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:hover::after {
    height: calc(100% + 10px + 0.5rem);
    width: calc(100% + 10px + 0.5rem);
  }

  &[disabled='true'] {
    pointer-events: none;
  }
`
