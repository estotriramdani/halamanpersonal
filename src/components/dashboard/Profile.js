import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import Gap from '../atoms/Gap';
import axios from 'axios';
import { baseUrl } from '../../configs/baseUrl';
import useScript from '../../utils/hooks/useScript';
import { changeProfile } from '../../utils/helpers/dashboard';
import AlertFloating from '../atoms/AlertFloating';
import InputFormik from '../atoms/InputFormik';
import {
  profileFieldInitialValueGenerator,
  profileInputField,
} from './profileInputField';
import TextareaFormik from '../atoms/TextareaFormik';
import ProfilePhotoSection from '../atoms/ProfilePhotoSection';
import ProfileSkeleton from './ProfileSkeleton';

function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState('');
  const [photo, setPhoto] = useState({});
  const [introduction, setIntroduction] = useState('');
  const [moreInfo, setMoreInfo] = useState('');

  const handleChangePhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleChangeIntroduction = (e, t) => {
    setIntroduction(e);
  };

  const handleChangeMoreInfo = (e) => {
    setMoreInfo(e);
  };

  useEffect(() => {
    if (!isLoaded) {
      const user_info = JSON.parse(window.localStorage.getItem('user_info'));
      const credentials = window.localStorage.getItem('credentials');
      setToken(credentials);
      axios
        .get(baseUrl.API + 'user/' + user_info.username)
        .then((response) => {
          setUserInfo(response.data.data);
          setMoreInfo(response.data.data.more_info);
          setIntroduction(response.data.data.introduction);
        })
        .then(() => {
          setIsLoaded(true);
        });
    }
  }, [isLoaded, token]);

  useScript('/assets/trix.js');

  return (
    <div>
      {isSuccess ? (
        <AlertFloating message="Profile updated!" type={'success'} />
      ) : (
        ''
      )}
      {isLoaded ? (
        <Formik
          initialValues={profileFieldInitialValueGenerator(userInfo)}
          onSubmit={async (values, { setSubmitting }) => {
            setIsLoading(true);
            const updateProfile = await changeProfile(
              values,
              introduction,
              moreInfo,
              photo,
              token
            );
            if (updateProfile === 'success') {
              setIsLoading(false);
              setIsSuccess(true);
              scrollTo(top);
              setTimeout(() => {
                setIsSuccess(false);
              }, 2500);
            }
            console.log(updateProfile);
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              <ProfilePhotoSection
                onChange={(e) => handleChangePhoto(e)}
                photo={userInfo.photo}
              />
              <Gap height={10} />
              {profileInputField.map((field) => {
                return (
                  <div key={field.id}>
                    <InputFormik
                      errors={errors}
                      label={field.label}
                      name={field.name}
                      placeholder={field.placeholder}
                      touched={touched}
                      type={field.type}
                      validator={field.validator}
                      icon={field.icon}
                    />
                    <Gap height={10} />
                  </div>
                );
              })}
              <Gap height={15} />
              <TextareaFormik
                label="Introduction"
                onChange={(e) => handleChangeIntroduction(e)}
                placeholder="Please write your short description (example: I am a fast learner and willing to work hard)"
                value={userInfo.introduction}
              />
              <Gap height={10} />
              <TextareaFormik
                label="More Info"
                onChange={(e) => handleChangeMoreInfo(e)}
                placeholder="Please provide another information(s) like skills, languages, etc."
                value={userInfo.more_info}
              />
              <Gap height={20} />
              <button
                type="submit"
                className="button-secondary"
                disabled={isValidating}
              >
                {isLoading ? 'Please wait...' : 'Change Profile'}
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <ProfileSkeleton />
      )}
    </div>
  );
}

export default Profile;
