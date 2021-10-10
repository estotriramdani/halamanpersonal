import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  validateEmail,
  validateName,
  validateUsername,
  validatePassword,
} from '../../utils/helpers/formValidator';
import Gap from '../atoms/Gap';
import { register } from '../../utils/helpers/auth';
import { useRouter } from 'next/dist/client/router';
import InputFormik from '../atoms/InputFormik';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const RegisterPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  return (
    <div>
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
          setIsLoading(false);
          if (createUser.token) {
            toast.success('Register berhasil');
            Cookies.set('credentials', btoa(createUser.token));
            window.localStorage.setItem(
              'user_info',
              JSON.stringify(createUser.user)
            );
            setTimeout(() => {
              router.push('/auth/login');
            }, 1000);
          } else {
            toast.error('Email sudah terdaftar.');
          }
          setSubmitting(false);
        }}>
        {({ errors, touched, isValidating }) => (
          <Form>
            <InputFormik
              errors={errors}
              label={'Fullname'}
              name={'name'}
              placeholder={'Fullname'}
              touched={touched}
              type={'text'}
              validator={validateName}
              icon={'file-earmark-person-fill'}
            />
            <Gap height={10} />
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
              label={'Username'}
              name={'username'}
              placeholder={'Your username'}
              touched={touched}
              type={'text'}
              validator={validateUsername}
              icon={'person-fill'}
            />
            <Gap height={10} />
            <InputFormik
              errors={errors}
              label={'Password'}
              name={'password'}
              placeholder={'Password'}
              touched={touched}
              type={'password'}
              validator={validatePassword}
              icon={'key-fill'}
            />
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
