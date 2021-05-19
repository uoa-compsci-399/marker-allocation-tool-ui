import { useState, useEffect } from 'react';
import axios from 'axios';
import { CourseData } from '../models/CourseData';

interface ResponseBody {
  message: string;
  data: CourseData[];
}

const api_url = process.env.REACT_APP_API_DOMAIN;

/*
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
}*/

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
