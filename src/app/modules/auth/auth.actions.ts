import { createAction, props } from '@ngrx/store';
import { LoginDto, LoginResponseDto, RegisterDto, ResetPasswordDto, UserDto } from './auth.types';

export const LOGIN = createAction('[AUTH] Login', props<{ payload: LoginDto }>());
export const LOGIN_SUCCESS = createAction('[AUTH] Login Success', props<{ loginResponse: LoginResponseDto }>());
export const LOGIN_ERROR = createAction('[AUTH] Login Error', props<{ error: any }>());

export const REGISTER = createAction('[AUTH] Register', props<{ payload: RegisterDto }>());
export const REGISTER_SUCCESS = createAction('[AUTH] Register Success', props<{ loginResponse: LoginResponseDto }>());
export const REGISTER_ERROR = createAction('[AUTH] Register Error', props<{ error: any }>());

export const FORGOT_PASSWORD = createAction('[AUTH] Forgot Password', props<{ email: string }>());
export const FORGOT_PASSWORD_SUCCESS = createAction('[AUTH] Forgot Password Success');
export const FORGOT_PASSWORD_ERROR = createAction('[AUTH] Forgot Password Error', props<{ error: any }>());

export const RESET_PASSWORD = createAction('[AUTH] Reset Password', props<{ payload: ResetPasswordDto, token: string }>());
export const RESET_PASSWORD_SUCCESS = createAction('[AUTH] Reset Password Success');
export const RESET_PASSWORD_ERROR = createAction('[AUTH] Reset Password Error', props<{ error: any }>());
