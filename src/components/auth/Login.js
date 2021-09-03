import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  validateEmail,
  validatePassword,
} from '../../utils/helpers/formValidator';
import Gap from '../atoms/Gap';
import { login } from '../../utils/helpers/auth';
import { useRouter } from 'next/dist/client/router';
import AuthAlert from '../atoms/Alert';

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
            <div className="auth-form-group">
              <label className="auth-form-control-label">Email</label>
              <div className="auth-form-control-wrapper">
                <div className="auth-form-control-icon">
                  <i className={`bi bi-` + 'envelope'}></i>
                </div>
                <Field
                  name="email"
                  validate={validateEmail}
                  className="auth-form-control"
                  autoComplete="off"
                  placeholder="Your email"
                />
              </div>
              {errors.email && touched.email && (
                <div className="auth-form-message">{errors.email}</div>
              )}
            </div>
            <Gap height={10} />
            <div className="auth-form-group">
              <label className="auth-form-control-label">Password</label>
              <div className="auth-form-control-wrapper">
                <div className="auth-form-control-icon">
                  <i className={`bi bi-` + 'key-fill'}></i>
                </div>
                <Field
                  name="password"
                  validate={validatePassword}
                  className="auth-form-control"
                  autoComplete="off"
                  placeholder="Your password"
                  type="password"
                />
              </div>
              {errors.password && touched.password && (
                <div className="auth-form-message">{errors.password}</div>
              )}
            </div>

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
