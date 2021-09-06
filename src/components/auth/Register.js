import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  validateEmail,
  validateName,
  validateUsername,
  validatePassword,
} from '../../utils/helpers/formValidator';
import Gap from '../atoms/Gap';
import { register } from '../../utils/helpers/auth';
import { useRouter } from 'next/dist/client/router';
import AuthAlert from '../atoms/Alert';

export const RegisterPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  return (
    <div>
      {!isSuccess ? (
        <AuthAlert
          message="Register Failed. Username or email already registered."
          type="danger"
        />
      ) : (
        ''
      )}

      <Formik
        initialValues={{
          name: '',
          username: '',
          email: '',
          password: '',
          // theme_id: 1,
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setIsLoading(true);
          const createUser = await register(values);
          await setIsLoading(false);
          if (createUser.token) {
            // const protectedToken = safetyToken.protect(createUser.token);
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
            <div className="auth-form-group">
              <label className="auth-form-control-label">Fullname</label>
              <div className="auth-form-control-wrapper">
                <div className="auth-form-control-icon">
                  <i className={`bi bi-` + 'file-earmark-person-fill'}></i>
                </div>
                <Field
                  name="name"
                  validate={validateName}
                  className="auth-form-control"
                  autoComplete="off"
                  placeholder="Your fullname"
                />
              </div>
              {errors.name && touched.name && (
                <div className="auth-form-message">{errors.name}</div>
              )}
            </div>
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
              <label className="auth-form-control-label">Username</label>
              <div className="auth-form-control-wrapper">
                <div className="auth-form-control-icon">
                  <i className={`bi bi-` + 'person-fill'}></i>
                </div>
                <Field
                  name="username"
                  validate={validateUsername}
                  className="auth-form-control"
                  autoComplete="off"
                  placeholder="Your username"
                />
              </div>
              {errors.username && touched.username && (
                <div className="auth-form-message">{errors.username}</div>
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
              {isLoading ? 'Please wait...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
