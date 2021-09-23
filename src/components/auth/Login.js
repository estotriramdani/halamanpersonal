import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Gap from '../atoms/Gap';
import { login } from '../../utils/helpers/auth';
import { useRouter } from 'next/dist/client/router';
import AuthAlert from '../atoms/Alert';
import InputFormik from '../atoms/InputFormik';

export const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  return (
    <div>
      {!isSuccess ? (
        <AuthAlert
          message="Login Failed. Username or password is wrong."
          type="danger"
        />
      ) : (
        ''
      )}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setIsLoading(true);
          const createUser = await login(values);
          await setIsLoading(false);
          if (createUser.token) {
            window.localStorage.setItem('credentials', createUser.token);
            window.localStorage.setItem(
              'user_info',
              JSON.stringify(createUser.user)
            );
            router.push('/dashboard');
          } else {
            setIsSuccess(false);
          }
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <Gap height={10} />
            <InputFormik
              errors={errors}
              label={'Email'}
              name="email"
              placeholder="Your email"
              touched={touched}
              type="text"
              icon="envelope"
            />
            <Gap height={10} />
            <InputFormik
              errors={errors}
              label={'Password'}
              name="password"
              placeholder="Your password"
              touched={touched}
              type="password"
              icon="key"
            />
            <Gap height={20} />
            <button type="submit" className="button-secondary">
              {isLoading ? 'Please wait...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
