import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchCourses(): [any, boolean] {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchAvaliableCourses(): Promise<void> {
      const json = await axios.get(`https://dev.classe.wumbo.co.nz/api/courses`);
      setData({ ...json.data });
      setLoading(false);
    }

    fetchAvaliableCourses();
  }, []);

  return [data, loading];
}

export default useFetchCourses;
