import { useState, useEffect } from 'react';
import axios from 'axios';
import { CoordinatorData } from '../models/CoordinatorData';

interface ResponseBody {
  message: string;
  data: CoordinatorData[];
}

const api_url = process.env.REACT_APP_API_DOMAIN;

function useFetchCoordinators(): [ResponseBody, boolean] {
  const [data, setData] = useState<ResponseBody>({ message: '', data: [] });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCoordinators(): Promise<void> {
      const json = await axios.get(`${api_url}/api/coursecoordinators/details`);
      setData({ ...json.data });
      setLoading(false);
    }

    fetchCoordinators();
  }, []);

  return [data, loading];
}

export default useFetchCoordinators;
