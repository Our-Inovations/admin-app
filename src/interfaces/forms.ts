export interface IAuthLoginForm {
  email: string;
  password: string;
}

export interface IAuthRegisterationForm extends IAuthLoginForm {
  name: string;
  confirm_password: string;
}

export interface IAuthVerificationForm {
  code: string;
}

export interface IAuthResetPasswordForm extends IAuthVerificationForm {
  password: string;
  confirm_password: string;
}

export interface IAuthForgotPasswordForm {
  email: string;
}

export interface IInternForm {
  first_name: string;
  last_name: string;
}
