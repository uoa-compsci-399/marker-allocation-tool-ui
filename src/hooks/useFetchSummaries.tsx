import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormApplication } from 'models/FormApplication';

interface ResponseBody {
  message: string;
  data: FormApplication[];
}

const api_url = process.env.REACT_APP_API_DOMAIN;

function useFetchApplicant(id: string): [ResponseBody, boolean] {
  const [data, setData] = useState<ResponseBody>({ message: '', data: [] });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const json = await axios.get(`${api_url}/api/course/${id}/applications`);
      setData({ ...json.data });
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return [data, loading];
}

export default useFetchApplicant;
