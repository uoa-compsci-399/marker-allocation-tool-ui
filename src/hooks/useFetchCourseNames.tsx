import { useState, useEffect } from 'react';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_DOMAIN;

function useFetchCourseNames(): [any, boolean] {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchAvailableCourses(): Promise<void> {
      const json = await axios.get(`${api_url}/api/courses/available`);
      const data = json.data.data;

      setData(data);
      setLoading(false);
    }

    fetchAvailableCourses();
  }, []);

  return [data, loading];
}

export default useFetchCourseNames;
