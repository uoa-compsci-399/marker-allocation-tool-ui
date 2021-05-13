import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchApplicant(id: string): [any, boolean] {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchApplication(): Promise<any> {
      const json = await axios.get(`https://dev.classe.wumbo.co.nz/api/application/${id}`);
      return json.data.data;
    }

    async function fetchUser(markerID: void): Promise<any> {
      const json = await axios.get(`https://dev.classe.wumbo.co.nz/api/user/${markerID}`);
      return json.data.data;
    }

    async function fetchData(): Promise<void> {
      const application = await fetchApplication();
      const user = await fetchUser(application.markerID);
      setData({ ...application, ...user });
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return [data, loading];
}

export default useFetchApplicant;
