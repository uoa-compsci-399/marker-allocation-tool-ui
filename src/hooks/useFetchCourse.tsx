import { useState, useEffect } from 'react';
import axios from 'axios';
import { NULL_COURSE_ID } from '../utils/Constants';
import { initialValues, ResponseCourseData } from '../models/ResponseCourseData';

interface ResponseBody {
  message: string;
  data: ResponseCourseData;
}

function useFetchCourses(id: string): [ResponseBody, boolean] {
  const [data, setData] = useState<ResponseBody>({ message: '', data: initialValues });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchAvaliableCourses(): Promise<void> {
      const json = await axios.get(`https://dev.classe.wumbo.co.nz/api/course/${id}`);
      setData({ ...json.data });
      setLoading(false);
    }

    if (id !== NULL_COURSE_ID) {
      fetchAvaliableCourses();
    } else {
      setLoading(false);
    }
  }, [id]);

  return [data, loading];
}

export default useFetchCourses;
