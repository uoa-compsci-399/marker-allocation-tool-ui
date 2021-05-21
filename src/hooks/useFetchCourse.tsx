import { useState, useEffect } from 'react';
import axios from 'axios';
import { NULL_COURSE_ID } from 'utils/Constants';
import { initialValues, ResponseCourseData } from 'models/ResponseCourseData';

interface ResponseBody {
  message: string;
  data: ResponseCourseData;
}

const api_url = process.env.REACT_APP_API_DOMAIN;

function useFetchCourse(id: string): [ResponseBody, boolean] {
  const [data, setData] = useState<ResponseBody>({ message: '', data: initialValues });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCourse(): Promise<void> {
      const json = await axios.get(`${api_url}/api/course/${id}`);
      setData({ ...json.data });
      setLoading(false);
    }

    if (id !== NULL_COURSE_ID) {
      fetchCourse();
    } else {
      setLoading(false);
    }
  }, [id]);

  return [data, loading];
}

export default useFetchCourse;
