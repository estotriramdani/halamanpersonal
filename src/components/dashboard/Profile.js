/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import Gap from '../atoms/Gap';
import axios from 'axios';
import { baseUrl } from '../../configs/baseUrl';
import { changeProfile } from '../../utils/helpers/dashboard';
import InputFormik from '../atoms/InputFormik';
import {
  profileFieldInitialValueGenerator,
  profileInputField,
} from './profileInputField';
import TextareaFormik from '../atoms/TextareaFormik';
import ProfileSkeleton from './ProfileSkeleton';
import ProfilePhotoPreview from '../atoms/ProfilePhotoPreview';
import UploadInstrusction from '../atoms/UploadInstruction';
import { toast } from 'react-toastify';
import useUserInfo from '../../utils/hooks/useUserInfo';

function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [photo, setPhoto] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [moreInfo, setMoreInfo] = useState('');

  const { token } = useUserInfo();

  const getUserInfoLocal = useCallback(async () => {
    const user_info = await JSON.parse(
      window.localStorage.getItem('user_info')
    );
    axios
      .get(baseUrl.API + 'user/' + user_info.username)
      .then((response) => {
        setUserInfo(response.data.data);
        setMoreInfo(response.data.data.more_info);
        setIntroduction(response.data.data.introduction);
        setPhoto(response.data.data.photo);
      })
      .then(() => {
        setIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      getUserInfoLocal();
    }
  }, [getUserInfoLocal, isLoaded]);
  return (
    <div>
      {isLoaded ? (
        <Formik
          initialValues={profileFieldInitialValueGenerator(userInfo)}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            setIsLoading(true);
            const updateProfile = await changeProfile(
              values,
              introduction,
              moreInfo,
              photo,
              token
            );
            setIsLoading(false);
            if (updateProfile.status === 'success') {
              scrollTo(top);
              toast.success('Profile berhasil diperbarui');
            } else {
              toast.error('Gagal. Pastikan username dan email bersifat unik.');
              scrollTo(top);
            }
          }}>
          {({ errors, touched, isValidating }) => (
            <Form>
              <ProfilePhotoPreview
                onChange={(e) => setPhoto(e.target.value)}
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
                onChange={(e) => setIntroduction(e)}
                placeholder="Please write your short description (example: I am a fast learner and willing to work hard)"
                value={userInfo.introduction}
              />
              <Gap height={10} />
              <TextareaFormik
                label="More Info"
                onChange={(e) => setMoreInfo(e)}
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
