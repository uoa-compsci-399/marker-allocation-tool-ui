import { useState, useEffect } from 'react';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_DOMAIN;

function getDaysLeft(course: any): any {
  const deadline = new Date(course.markerAssignmentDeadline.replace(/-/g, '/'));
  const d = new Date();

  const yyyy = d.getFullYear();
  const mm = `${d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1}`;
  const dd = `${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()}`;

  const now = new Date(yyyy + '/' + mm + '/' + dd);

  return getDifferenceInDays(deadline, now);
}

function getDifferenceInDays(date1: any, date2: any): number {
  const diffInMs = Math.abs(date2 - date1);
  return Math.round(diffInMs / (1000 * 60 * 60 * 24));
}

function useFetchCourses(): [any, boolean] {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchAvailableCourses(): Promise<void> {
      const json = await axios.get(`${api_url}/api/courses`);

      //This will add how many days until application deadline
      const jsonModified = json.data.data.map((course: any) => {
        course['daysLeft'] = getDaysLeft(course);
        return course;
      });

      setData(jsonModified);
      setLoading(false);
    }

    fetchAvailableCourses();
  }, []);

  return [data, loading];
}

export default useFetchCourses;
