import * as yup from 'yup';
import { WorkloadDistribution } from './WorkloadDistribution';

type Modify<T, R> = Omit<T, keyof R> & R;

export const newCourseFormSchema = yup.object({
  courseName: yup.string().defined('Required field'),
  enrolmentEstimate: yup.string().matches(/^\d+$/, 'Input must be a valid number'),
  enrolmentFinal: yup.string().matches(/^\d+$/, 'Input must be a valid number'),
  expectedWorkload: yup.string().matches(/^\d+$/, 'Input must be a valid number'),
  preferredMarkerCount: yup
    .string()
    .matches(/^\d+$/, 'Input must be a valid number')
    .defined('Required field'),
  courseCoordinators: yup
    .array()
    .of(yup.string())
    .defined()
    .min(1, 'You must choose at least 1 available course'),
  semesters: yup.array().of(yup.string()).defined().min(1, 'You must select a available period'),
  year: yup
    .string()
    .matches(/^\d{4}$/, 'Input must be a valid year')
    .defined('Required field'),
  workloadDistributions: yup.array().of(
    yup.object({
      assignment: yup.string(),
      workload: yup.string().matches(/^\d+$/, 'Input must be a valid number'),
    })
  ),
  applicationClosingDate: yup.string().defined('Enter an application closing date'),
  courseInfoDeadline: yup.string(),
  markerAssignmentDeadline: yup.string().defined('Required field'),
  markerPrefDeadline: yup.string(),
  isPublished: yup.string().defined('Required field'),
  otherNotes: yup.string(),
});

export type FormTypes = yup.InferType<typeof newCourseFormSchema>;

//This will allow me to make modifications before posting the data
export type FormFormatted = Modify<
  FormTypes,
  {
    courseID?: string;
    isPublished: number | string;
    semesters: string[] | any;
    workloadDistributions: yup.SchemaOf<WorkloadDistribution[]> | any;
  }
>;
