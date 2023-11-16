import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)
      try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (err) {
        setError(error)
      } finally {
        setIsFetching(false)
      }
    }

    fetchData()
  }, [url])

  return { data, isFetching, error }
}
