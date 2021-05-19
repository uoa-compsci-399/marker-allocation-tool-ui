import { useState, useEffect } from 'react';
import axios from 'axios';
import { CourseData } from 'models/CourseData';

interface ResponseBody {
  message: string;
  data: CourseData[];
}

const api_url = process.env.REACT_APP_API_DOMAIN;

function useFetchCourses(): [ResponseBody, boolean] {
  const [data, setData] = useState<ResponseBody>({ message: '', data: [] });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchAvaliableCourses(): Promise<void> {
      const json = await axios.get(`${api_url}/api/courses`);
      setData({ ...json.data });
      setLoading(false);
    }

    fetchAvaliableCourses();
  }, []);

  return [data, loading];
}

export default useFetchCourses;
