import * as yup from 'yup';
import {
  EMAIL_FIELD,
  PASSWORD_CONFIRMATION_FIELD,
  PASSWORD_FIELD,
} from './constants/fieldConstants';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const validationFields = {
  EMAIL: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required'),
  PASSWORD: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      PASSWORD_REGEX,
      'Password must be minimum eight characters, at least one letter and one number',
    ),
  PASSWORD_CONFIRMATION: yup
    .string()
    .oneOf([yup.ref('Password'), null], "Passwords don't match"),
};

export const signUpValidationSchema = yup.object().shape({
  [EMAIL_FIELD]: validationFields.EMAIL,
  [PASSWORD_FIELD]: validationFields.PASSWORD,
  [PASSWORD_CONFIRMATION_FIELD]: validationFields.PASSWORD_CONFIRMATION,
});

export const loginValidationSchema = yup.object().shape({
  [EMAIL_FIELD]: validationFields.EMAIL,
  [PASSWORD_FIELD]: validationFields.PASSWORD,
});

export const emailValidationSchema = yup.object().shape({
  [EMAIL_FIELD]: validationFields.EMAIL,
});
