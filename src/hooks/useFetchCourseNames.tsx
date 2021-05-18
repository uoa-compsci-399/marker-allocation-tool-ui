import { useState, useEffect } from 'react';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_DOMAIN;

function useFetchCourseNames(): [any, boolean] {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchAvailableCourses(): Promise<void> {
      const json = await axios.get(`${api_url}/api/courses`);

      //This will add how many days until application deadline
      const jsonModified = json.data.data.map((course: any) => {
        return course.courseName;
      });

      setData(jsonModified);
      setLoading(false);
    }

    fetchAvailableCourses();
  }, []);

  return [data, loading];
}

export default useFetchCourseNames;
