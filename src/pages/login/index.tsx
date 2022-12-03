import { PageLocaleProps } from 'interfaces/locales';
import { Dispatch, SetStateAction } from 'react';
import { IAuthLoginForm } from 'interfaces/forms';

import { AuthLoginForm } from 'components/ui/form/Login';
import { PageProps } from 'interfaces/pages';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: PageLocaleProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const Login = ({ showToast }: PageProps) => {
  const handleLogin = async (
    values: IAuthLoginForm,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
  ): Promise<void> => {
    setIsLoading(true);

    setIsLoading(false);
  };

  <AuthLoginForm handleLogin={handleLogin} />;
};

export default Login;
