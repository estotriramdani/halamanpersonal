/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import Gap from '../atoms/Gap';
import axios from 'axios';
import { baseUrl } from '../../configs/baseUrl';
import { changeProfile } from '../../utils/helpers/dashboard';
import AlertFloating from '../atoms/AlertFloating';
import InputFormik from '../atoms/InputFormik';
import {
  profileFieldInitialValueGenerator,
  profileInputField,
} from './profileInputField';
import TextareaFormik from '../atoms/TextareaFormik';
import ProfileSkeleton from './ProfileSkeleton';
import ProfilePhotoPreview from '../atoms/ProfilePhotoPreview';
import UploadInstrusction from '../atoms/UploadInstruction';

function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState('');
  const [photo, setPhoto] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [moreInfo, setMoreInfo] = useState('');

  const handleChangePhoto = (e) => {
    setPhoto(e.target.value);
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
          setPhoto(response.data.data.photo);
          console.log(response.data.data.photo);
        })
        .then(() => {
          setIsLoaded(true);
        });
    }
  }, [isLoaded, token]);
  return (
    <div>
      <>
        {isSuccess ? (
          <AlertFloating message="Profile updated!" type={'success'} />
        ) : (
          ''
        )}
        {isFailed ? (
          <AlertFloating
            message="Gagal. Pastikan username dan email bersifat unik."
            type={'danger'}
          />
        ) : (
          ''
        )}
      </>
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
            if (updateProfile.status === 'success') {
              setIsLoading(false);
              setIsSuccess(true);
              scrollTo(top);
              setTimeout(() => {
                setIsSuccess(false);
              }, 2800);
            } else {
              setIsFailed(true);
              scrollTo(top);
              setTimeout(() => {
                setIsFailed(false);
              }, 2800);
            }
          }}>
          {({ errors, touched, isValidating }) => (
            <Form>
              <ProfilePhotoPreview
                onChange={(e) => handleChangePhoto(e)}
                photo={photo}
              />
              <UploadInstrusction />
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
                disabled={isValidating}>
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
