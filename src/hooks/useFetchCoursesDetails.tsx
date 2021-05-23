import { useState, useEffect } from 'react';
import axios from 'axios';
import { CoursesDetails } from 'models/CoursesDetails';

interface ResponseBody {
  message: string;
  data: CoursesDetails[];
}

const api_url = process.env.REACT_APP_API_DOMAIN;

function useFetchCoursesDetails(): [ResponseBody, boolean] {
  const [data, setData] = useState<ResponseBody>({ message: '', data: [] });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCoursesDetails(): Promise<void> {
      const json = await axios.get(`${api_url}/api/courses/available/details`);
      setData({ ...json.data });
      setLoading(false);
    }

    fetchCoursesDetails();
  }, []);

  return [data, loading];
}

export default useFetchCoursesDetails;
