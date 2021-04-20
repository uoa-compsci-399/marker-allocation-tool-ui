import * as yup from 'yup';

type Modify<T, R> = Omit<T, keyof R> & R;

const FILE_SIZE = 50000000; //50 mb

export const applicationSchema = yup.object({
  firstName: yup.string().defined('Required field'),
  lastName: yup.string().defined('Required field'),
  studentId: yup.string().matches(/^\d+$/, 'Input must be a number').defined('Required field'),
  email: yup.string().email('Input must be a valid email').defined('Required field'),
  selectedCourse: yup
    .array()
    .of(yup.string())
    .defined()
    .min(1, 'You must select an avaliable course'),
  areaOfStudy: yup.string().defined('Select area of study'),
  dateOfBirth: yup.string().defined('Input date of birth'),
  enrolmentStatus: yup.string().defined('Select your enrolment status'),
  avaliability: yup.array().of(yup.string()).defined().min(1, 'You must select a avaliable period'),
  previousMarker: yup.string().defined('Required field'),
  workEligible: yup.string().defined('Required field'),
  inAuckland: yup.string().defined('Required field'),
  academicRecord: yup
    .mixed()
    .defined('Upload academic record')
    .test('fileSize', 'File Size is too large', (value) =>
      value ? value.size <= FILE_SIZE : true
    ),
  cirriculumVitae: yup
    .mixed()
    .defined('Upload cirriculum vitae')
    .test('fileSize', 'File Size is too large', (value) =>
      value ? value.size <= FILE_SIZE : true
    ),
  declaration: yup.string().defined('Please sign declaration'),
});

export type FormTypes = yup.InferType<typeof applicationSchema>;

//This will allow me to make modifications before posting the data
export type FormFormatted = Modify<
  FormTypes,
  {
    previousMarker: number | string;
    workEligible: number | string;
    inAuckland: number | string;
    declaration: number | string;
  }
>;

export const initialValues: FormTypes = {
  firstName: '',
  lastName: '',
  studentId: '',
  email: '',
  selectedCourse: [],
  areaOfStudy: '',
  dateOfBirth: '',
  enrolmentStatus: '',
  avaliability: [],
  previousMarker: '',
  workEligible: '',
  inAuckland: '',
  academicRecord: undefined,
  cirriculumVitae: undefined,
  declaration: '',
};
