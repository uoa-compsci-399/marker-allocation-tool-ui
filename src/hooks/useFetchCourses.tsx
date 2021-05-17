import { useState, useEffect } from 'react';
import axios from 'axios';
import { CourseData } from '../models/CourseData';

interface ResponseBody {
  message: string;
  data: CourseData[];
}

function useFetchCourses(): [ResponseBody, boolean] {
  const [data, setData] = useState<ResponseBody>({ message: '', data: [] });
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
