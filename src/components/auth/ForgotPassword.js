import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { validateEmail } from '../../utils/helpers/formValidator';
import Gap from '../atoms/Gap';
import { forgotPassword } from '../../utils/helpers/auth';
import { useRouter } from 'next/dist/client/router';
import AuthAlert from '../atoms/Alert';

export const ForgotPasswordPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [successStatus, setSuccessStatus] = useState(null);
  return (
    <div>
      <>
        {successStatus === true ? (
          <div
            style={{
              width: '300px',
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: '40',
            }}>
            <AuthAlert
              message="Success! Please check your email!"
              type="success"
            />
          </div>
        ) : (
          ''
        )}
        {successStatus === false ? (
          <div
            style={{
              width: '300px',
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: '40',
            }}>
            <AuthAlert message="Failed! Email not found." type="danger" />
          </div>
        ) : (
          ''
        )}
      </>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setIsLoading(true);
          const forgotPasswordAPI = await forgotPassword(false);
          setIsLoading(false);
          if (forgotPasswordAPI === 'OK') {
            setSuccessStatus(true);
          } else {
            setSuccessStatus(false);
          }
          setTimeout(() => {
            setSuccessStatus(null);
          }, 2000);
          setSubmitting(false);
        }}>
        {({ errors, touched, isValidating }) => (
          <Form>
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
