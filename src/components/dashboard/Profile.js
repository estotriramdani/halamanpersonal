import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import AuthAlert from '../atoms/Alert';
import Gap from '../atoms/Gap';
import axios from 'axios';
import { baseUrl } from '../../configs/baseUrl';
import {
  validateEmail,
  validateName,
  validateUsername,
} from '../../utils/helpers/formValidator';
import Image from 'next/image';
import { TrixEditor } from 'react-trix/dist/react-trix';
import useScript from '../../utils/hooks/useScript';
import { changeProfile } from '../../utils/helpers/dashboard';
import Skeleton from 'react-loading-skeleton';

function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState('');
  const [photo, setPhoto] = useState({});
  const [introduction, setIntroduction] = useState('www');
  const [moreInfo, setMoreInfo] = useState('ww');

  const handleChangePhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleChangeIntroduction = (e, t) => {
    setIntroduction(e);
    console.log(e);
  };

  const handleChangeMoreInfo = (e) => {
    setMoreInfo(e);
    console.log(e);
  };

  useEffect(() => {
    if (!isLoaded) {
      const user_info = JSON.parse(window.localStorage.getItem('user_info'));
      const credentials = window.localStorage.getItem('credentials');
      setToken(credentials);
      axios
        .get(baseUrl.API + user_info.username)
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
        <div
          style={{
            width: '300px',
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '40',
          }}
        >
          <AuthAlert message="Profile updated!" type="success" />
        </div>
      ) : (
        ''
      )}
      {isLoaded ? (
        <Formik
          initialValues={{
            name: userInfo.name || '',
            username: userInfo.username || '',
            email: userInfo.email || '',
            password: 'qwe123',
            photo: userInfo.photo || '',
            headline: userInfo.headline || '',
            facebook: userInfo.facebook || '',
            instagram: userInfo.instagram || '',
            linkedin: userInfo.linkedin || '',
            github: userInfo.github || '',
            theme_id: userInfo.theme_id || '',
          }}
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
              <div className="photo-section">
                <div className="profile-photo-preview">
                  <Image
                    src={
                      baseUrl.IMAGE + userInfo.photo ||
                      'https://dummyimage.com/200x200/dedede/020312.png&text=No+Image'
                    }
                    layout="fill"
                    alt="profile photo"
                    quality="40"
                    placeholder="blur"
                    blurDataURL={`https://dummyimage.com/200x200/dedede/020312.png&text=No+Image`}
                  />
                </div>
                <Gap height={15} />
                <div className="auth-form-group">
                  <label
                    style={{
                      fontSize: '14px',
                      marginBottom: '5px',
                      display: 'inline-block',
                    }}
                  >
                    Select Profile Photo
                  </label>
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    className="auth-form-upload"
                    onChange={(e) => handleChangePhoto(e)}
                    accept="image/*"
                  />
                </div>
              </div>
              <Gap height={10} />
              <div>
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
                  <label className="auth-form-control-label">Headline</label>
                  <div className="auth-form-control-wrapper">
                    <div className="auth-form-control-icon">
                      <i className={`bi bi-` + 'briefcase-fill'}></i>
                    </div>
                    <Field
                      name="headline"
                      className="auth-form-control"
                      autoComplete="off"
                      placeholder="Your headline (example: An Engineer)"
                    />
                  </div>
                  {errors.headline && touched.headline && (
                    <div className="auth-form-message">{errors.headline}</div>
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
                  <label className="auth-form-control-label">Facebook</label>
                  <div className="auth-form-control-wrapper">
                    <div className="auth-form-control-icon">
                      <i className={`bi bi-` + 'facebook'}></i>
                    </div>
                    <Field
                      name="facebook"
                      className="auth-form-control"
                      autoComplete="off"
                      placeholder="Your facebook username (Example: estolagi)"
                    />
                  </div>
                  {errors.facebook && touched.facebook && (
                    <div className="auth-form-message">{errors.facebook}</div>
                  )}
                </div>
                <Gap height={10} />
                <div className="auth-form-group">
                  <label className="auth-form-control-label">Instagram</label>
                  <div className="auth-form-control-wrapper">
                    <div className="auth-form-control-icon">
                      <i className={`bi bi-` + 'instagram'}></i>
                    </div>
                    <Field
                      name="instagram"
                      className="auth-form-control"
                      autoComplete="off"
                      placeholder="Your instagram username (Example: estolagi)"
                    />
                  </div>
                  {errors.instagram && touched.instagram && (
                    <div className="auth-form-message">{errors.instagram}</div>
                  )}
                </div>
                <Gap height={10} />
                <div className="auth-form-group">
                  <label className="auth-form-control-label">LinkedIn</label>
                  <div className="auth-form-control-wrapper">
                    <div className="auth-form-control-icon">
                      <i className={`bi bi-` + 'linkedin'}></i>
                    </div>
                    <Field
                      name="linkedin"
                      className="auth-form-control"
                      autoComplete="off"
                      placeholder="Your linkedin username"
                    />
                  </div>
                  {errors.linkedin && touched.linkedin && (
                    <div className="auth-form-message">{errors.linkedin}</div>
                  )}
                </div>
                <Gap height={10} />
                <div className="auth-form-group">
                  <label className="auth-form-control-label">GitHub</label>
                  <div className="auth-form-control-wrapper">
                    <div className="auth-form-control-icon">
                      <i className={`bi bi-` + 'github'}></i>
                    </div>
                    <Field
                      name="github"
                      className="auth-form-control"
                      autoComplete="off"
                      placeholder="Your github username"
                    />
                  </div>
                  {errors.github && touched.github && (
                    <div className="auth-form-message">{errors.github}</div>
                  )}
                </div>
              </div>
              <Gap height={15} />
              <div className="editor">
                <label
                  htmlFor="introduction"
                  style={{ marginBottom: '10px', display: 'block' }}
                >
                  Introduction
                </label>
                <TrixEditor
                  className="form-control"
                  style={{ minHeight: '150px' }}
                  placeholder="Please write your short description (example: I am a fast learner and willing to work hard)"
                  onChange={(e) => handleChangeIntroduction(e)}
                  value={userInfo.introduction}
                />
                <Gap height={10} />
                <label
                  htmlFor="introduction"
                  style={{ marginBottom: '10px', display: 'block' }}
                >
                  More Info
                </label>
                <TrixEditor
                  className="form-control"
                  style={{ minHeight: '150px' }}
                  placeholder="Please provide another information(s) like skills, languages, etc."
                  name="more_info"
                  onChange={(e) => handleChangeMoreInfo(e)}
                  value={userInfo.more_info}
                />
              </div>
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
        <div>
          <Gap height={10} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Skeleton circle={true} height={200} width={200} />
          </div>
          <Gap height={20} />
          {[1, 2, 3, 4, 5, 6, 7].map((number) => {
            return (
              <div key={number}>
                <Skeleton width="100%" height={42} />
                <Gap height={10} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Profile;
