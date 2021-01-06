import { useCallback, useState } from 'react'
import serialize from 'form-serialize'

export const useSubmit = () => {
  const [loading, setLoading] = useState<boolean | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const submit = useCallback(e => {
    if (e.target.checkValidity()) {
      setLoading(true)
      e.preventDefault()
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: serialize(e.target),
      })
        .then(() => {
          setLoading(false)
          setSubmitted(true)
        })
        .catch(error => {
          console.error(error)
          setLoading(null)
        })
    }
  }, [])
  return { submit, loading, submitted }
}
