import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url: string): [data: string[], loading: boolean] {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUrl(): Promise<void> {
      const json = await axios.get(url);
      const data = json.data.data;
      setData(data);
      setLoading(false);
    }

    fetchUrl();
  }, [url]);

  return [data, loading];
}

export default useFetch;
