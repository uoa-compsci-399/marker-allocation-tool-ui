import { useState, useEffect } from 'react';
import axios from 'axios';

// fetches Application summaries

function useFetchApplicant(id: string): [any, boolean] {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchApplication(): Promise<any> {
      const json = await axios.get(`https://dev.classe.wumbo.co.nz/api/application/${id}`);
      return json.data.data;
    }

    async function fetchData(): Promise<void> {
      const application = await fetchApplication();
      setData({ ...application });
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return [data, loading];
}

export default useFetchApplicant;
