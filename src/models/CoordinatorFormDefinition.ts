import * as yup from 'yup';

type Modify<T, R> = Omit<T, keyof R> & R;

export const courseCoordinatorSchema = yup.object({
  firstName: yup.string().defined('Required field'),
  lastName: yup.string().defined('Required field'),
  email: yup.string().email('Input must be a valid email').defined('Required field'),
  UPI: yup.string().defined('Required field'),
});

export type CCTypes = yup.InferType<typeof courseCoordinatorSchema>;

export type CCFormatted = Modify<
  CCTypes,
  {
    userID?: number | string;
  }
>;

export const initialCCValues: CCTypes = {
  firstName: '',
  lastName: '',
  email: '',
  UPI: '',
};
