import { useState, useEffect } from 'react';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_DOMAIN;

function useFetchApplicant(id: string): [any, boolean] {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchApplication(): Promise<any> {
      const json = await axios.get(`${api_url}/api/application/${id}/nofiles`);
      return json.data.data;
    }

    async function fetchUser(userID: any): Promise<any> {
      const json = await axios.get(`${api_url}/api/user/${userID}`);
      return json.data.data;
    }

    async function fetchMarker(userID: any): Promise<any> {
      const json = await axios.get(`${api_url}/api/marker/${userID}`);
      return json.data.data;
    }

    async function fetchData(): Promise<void> {
      const application = await fetchApplication();
      const user = await fetchUser(application.markerID);
      const marker = await fetchMarker(application.markerID);
      setData({ ...application, ...user, ...marker });
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return [data, loading];
}

export default useFetchApplicant;
