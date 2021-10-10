import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  validateEmail,
  validatePassword,
} from '../../utils/helpers/formValidator';
import Gap from '../atoms/Gap';
import { forgotPassword, resetPassword } from '../../utils/helpers/auth';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-toastify';
import InputFormik from '../atoms/InputFormik';

export const ResetPasswordPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  useEffect(() => {
    if (router.isReady) {
      setToken(router.query.token);
    }
  }, [router, token]);
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          password_confirmation: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setIsLoading(true);
          const resetPasswordAPI = await resetPassword(values, token);
          setIsLoading(false);
          if (resetPasswordAPI.status === 'success') {
            console.log(resetPasswordAPI);
            toast.success('Reset password success');
          } else {
            toast.error(resetPasswordAPI.message);
          }
          setSubmitting(false);
        }}>
        {({ errors, touched, isValidating }) => (
          <Form>
            <InputFormik
              errors={errors}
              label={'Email'}
              name={'email'}
              placeholder={'Your email'}
              touched={touched}
              type={'text'}
              validator={validateEmail}
              icon={'envelope-fill'}
            />
            <Gap height={10} />
            <InputFormik
              errors={errors}
              label={'Password'}
              name={'password'}
              placeholder={'Your Password'}
              touched={touched}
              type={'password'}
              validator={validatePassword}
              icon={'key-fill'}
            />
            <Gap height={10} />
            <InputFormik
              errors={errors}
              label={'Repeat Password'}
              name={'password_confirmation'}
              placeholder={'Your Repeat Password'}
              touched={touched}
              type={'password'}
              validator={undefined}
              icon={'key-fill'}
            />
            <Gap height={20} />
            <button type="submit" className="button-secondary">
              {isLoading ? 'Please wait...' : 'Reset Password'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
