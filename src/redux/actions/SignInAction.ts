import { action } from 'typesafe-actions';
import { SingInValues } from '@/pages/signIn';

export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_LOADING = 'SIGNIN_LOADING';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';

export const signInAction = (values: SingInValues) => action(SIGNIN, values);

export const signInSuccess = () => action(SIGNIN_SUCCESS);

export const signInError = () => action(SIGNIN_ERROR);

export const signInLoading = () => action(SIGNIN_LOADING);

export default {
  signInAction,
  signInSuccess,
  signInError,
  signInLoading,
};
