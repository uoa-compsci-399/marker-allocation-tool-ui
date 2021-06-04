import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchPDF(url: string): [data: string, loading: boolean] {
  const [data, setData] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPdf(): Promise<void> {
      const json = await axios.get(url);
      const data = json.data;
      setData(data);
      setLoading(false);
    }

    fetchPdf();
  }, [url]);

  return [data, loading];
}

export default useFetchPDF;
