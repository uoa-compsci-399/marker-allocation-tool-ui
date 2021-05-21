import * as yup from 'yup';

type Modify<T, R> = Omit<T, keyof R> & R;

const FILE_SIZE = 50000000; //50 mb

export const applicationSchema = yup.object({
  firstName: yup.string().defined('Required field'),
  lastName: yup.string().defined('Required field'),
  studentId: yup.string().matches(/^\d+$/, 'Input must be a number').defined('Required field'),
  email: yup.string().email('Input must be a valid email').defined('Required field'),
  selectedCourses: yup
    .array()
    .of(yup.string())
    .defined()
    .min(1, 'You choose at least 1 available course'),
  areaOfStudy: yup.string().defined('Select area of study'),
  dateOfBirth: yup.string().defined('Input date of birth'),
  enrolmentStatus: yup.string().defined('Select your enrolment status'),
  availability: yup.array().of(yup.string()).defined().min(1, 'You must select a available period'),
  workEligible: yup.string().defined('Required field'),
  inAuckland: yup.string().defined('Required field'),
  academicRecord: yup
    .mixed()
    .defined('Upload academic record')
    .test('fileSize', 'File Size is too large', (value) =>
      value ? value.size <= FILE_SIZE : true
    ),
  curriculumVitae: yup
    .mixed()
    .defined('Upload curriculum vitae')
    .test('fileSize', 'File Size is too large', (value) =>
      value ? value.size <= FILE_SIZE : true
    ),
  declaration: yup.string().defined('Please sign declaration'),
});

export const courseCoordinatorSchema = yup.object({
  firstName: yup.string().defined('Required field'),
  lastName: yup.string().defined('Required field'),
  email: yup.string().email('Input must be a valid email').defined('Required field'),
  UPI: yup.string().defined('Required field'),
  userID: yup.string(),
});

export type FormTypes = yup.InferType<typeof applicationSchema>;
export type CCType = yup.InferType<typeof courseCoordinatorSchema>;

//This will allow me to make modifications before posting the data
export type FormFormatted = Modify<
  FormTypes,
  {
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
  selectedCourses: [],
  areaOfStudy: '',
  dateOfBirth: '',
  enrolmentStatus: '',
  availability: [],
  workEligible: '',
  inAuckland: '',
  academicRecord: undefined,
  curriculumVitae: undefined,
  declaration: '',
};

export const initialCCValues: CCType = {
  firstName: '',
  lastName: '',
  email: '',
  UPI: '',
  userID: '',
};
