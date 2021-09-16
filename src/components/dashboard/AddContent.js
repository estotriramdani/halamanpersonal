import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Gap from '../atoms/Gap';
import useSWR from 'swr';
import fetcher from '../../utils/helpers/fetcher';
import { baseUrl } from '../../configs/baseUrl';
import { createContent } from '../../utils/helpers/dashboard';
import useUserInfo from '../../utils/hooks/useUserInfo';
import AlertFloating from '../atoms/AlertFloating';
import InputFormik from '../atoms/InputFormik';
import TextareaFormik from '../atoms/TextareaFormik';
import InputUpload from '../atoms/InputUpload';
import { useRouter } from 'next/dist/client/router';

export default function AddContent({
  initialValues,
  image,
  buttonTitle,
  desc = '',
  uploadLabel = 'Pilih photo cover (optional)',
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { data: types, error } = useSWR(baseUrl.API + 'types', fetcher);
  const [photo, setPhoto] = useState({});
  const [description, setDescription] = useState(desc);
  const router = useRouter();
  const handleChangeDescription = (e) => {
    setDescription(e);
  };

  const handleChangePhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const { userInfo, token } = useUserInfo();

  return (
    <div>
      {isSuccess ? (
        <AlertFloating message="Konten berhasil ditambahkan" type={'success'} />
      ) : (
        ''
      )}
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Title wajib diisi';
          }
          if (!values.subtitle) {
            errors.subtitle = 'Subtitle wajib diisi';
          }
          if (!values.type) {
            errors.type = 'Type wajib diisi';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setIsLoading(true);
          const request = await createContent(
            token,
            userInfo.username,
            description,
            values,
            photo
          );
          if (request) {
            setIsSuccess(true);
            setTimeout(() => {
              setIsSuccess(false);
              setIsLoading(false);
              values.subtitle = '';
              values.title = '';
              setPhoto('');
              setDescription('');
            }, 2000);
          }
          setTimeout(() => {
            router.push('/dashboard/content-management/' + values.type);
          }, 2100);
          setTimeout(() => {
            scrollTo(top);
          }, 500);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <Gap height={10} />
            <InputFormik
              errors={errors}
              touched={touched}
              icon="type-h1"
              label="Title (wajib)"
              name="title"
              placeholder="Contoh: PT Amerta Indah Otsuka"
              type="text"
              validator={undefined}
            />
            <Gap height={10} />
            <InputFormik
              errors={errors}
              touched={touched}
              icon="type-h2"
              label="Subtitle (wajib)"
              name="subtitle"
              placeholder="Contoh: Software Engineer (April 2021 - present)"
              type="text"
              validator={undefined}
            />
            <Gap height={15} />
            <div className="theme-picker">
              <p>Pilih type (wajib)</p>
              <Field
                name="type"
                id="type"
                style={{
                  width: '100%',
                  padding: '10px',
                  textTransform: 'capitalize',
                }}
                component="select"
              >
                {types ? (
                  types.data.map((type) => {
                    return (
                      <option
                        value={type.name}
                        key={type.id}
                        style={{ textTransform: 'capitalize' }}
                      >
                        {type.name}
                      </option>
                    );
                  })
                ) : (
                  <option value="">
                    <Skeleton />
                  </option>
                )}
              </Field>
            </div>
            <Gap height={15} />
            <TextareaFormik
              label="Description"
              onChange={(e) => handleChangeDescription(e)}
              placeholder="Tulis deskripsi dari konten tersebut"
              value={description}
            />
            <Gap height={20} />
            <InputUpload
              label={uploadLabel}
              name="photo"
              onChange={(e) => handleChangePhoto(e)}
              accept={'image/*'}
            />
            <Gap height={20} />
            <button
              type="submit"
              className="button-secondary"
              disabled={isValidating}
            >
              {isLoading ? 'Please wait...' : buttonTitle}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
