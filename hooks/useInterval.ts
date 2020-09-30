import React from 'react'

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef<() => void | null>()

  React.useEffect(() => {
    savedCallback.current = callback
  })

  React.useEffect(() => {
    function tick() {
      if (typeof savedCallback?.current !== 'undefined') {
        savedCallback && savedCallback.current()
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
