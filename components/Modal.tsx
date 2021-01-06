/** @jsx jsx */
import { jsx, ClassNames, keyframes } from '@emotion/core'
import { opacify } from 'polished'
import Modal from 'react-modal'
import { colors } from '../constants/colors'
Modal.setAppElement('#__next')

const animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const Element: React.FunctionComponent<{ opened: boolean; closeFn: any }> = ({
  opened,
  closeFn,
  children,
}) => {
  return (
    <ClassNames>
      {({ css }) => (
        <Modal
          overlayClassName={css`
            position: fixed;
            width: 100vw;
            min-height: 100vh;
            display: flex;
            background-color: ${opacify(-0.25, colors.neutral.low)};
            top: 0;
            left: 0;
            justify-content: center;
            align-items: center;
            padding: 1rem;
          `}
          css={css`
            animation: 300ms ${animation};
            font-size: 1.2rem;
            background: ${colors.main.neutral};
            margin-bottom: 2rem;
            max-width: calc(50rem);
            padding: 1rem 2rem;
            border-radius: 1rem;
            width: 100%;
            outline: none;
            text-align: center;
            position: relative;
            max-height: 96vh;
            overflow: auto;
          `}
          isOpen={opened}
          onRequestClose={closeFn}
        >
          {children}
        </Modal>
      )}
    </ClassNames>
  )
}

export { Element as Modal }
