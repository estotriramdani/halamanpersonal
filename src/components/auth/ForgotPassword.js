import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { validateEmail } from '../../utils/helpers/formValidator';
import Gap from '../atoms/Gap';
import { forgotPassword } from '../../utils/helpers/auth';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-toastify';

export const ForgotPasswordPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setIsLoading(true);
          const forgotPasswordAPI = await forgotPassword(values);
          setIsLoading(false);
          if (forgotPasswordAPI.status === 'success') {
            toast.success('Success. Please check your email');
          } else {
            toast.error('Email not found.');
          }
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
