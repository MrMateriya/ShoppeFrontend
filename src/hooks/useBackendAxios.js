import {useState} from 'react';

const useBackendAxios = (callback) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  async function request() {
    try {
      setLoading(true)
      const args = [...arguments]
      const response = await callback(...args)
      setError('')

      return response
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  return [request, loading, error, setError];
}

export {useBackendAxios};