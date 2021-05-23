import { useState, useEffect } from 'react';
import axios from 'axios';
import { NULL_USER_ID } from 'utils/Constants';
import { CoordinatorData, initialValues } from 'models/CoordinatorData';

interface ResponseBody {
  message: string;
  data: CoordinatorData;
}

const api_url = process.env.REACT_APP_API_DOMAIN;

function useFetchCoordinator(id: string): [ResponseBody, boolean] {
  const [data, setData] = useState<ResponseBody>({ message: '', data: initialValues });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCoordinator(): Promise<void> {
      const json = await axios.get(`${api_url}/api/user/${id}`);
      setData({ ...json.data });
      setLoading(false);
    }

    if (id !== NULL_USER_ID) {
      fetchCoordinator();
    } else {
      setLoading(false);
    }
  }, [id]);

  return [data, loading];
}

export default useFetchCoordinator;
