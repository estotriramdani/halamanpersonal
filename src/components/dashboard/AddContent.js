/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Gap from '../atoms/Gap';
import useSWR from 'swr';
import fetcher from '../../utils/helpers/fetcher';
import { baseUrl } from '../../configs/baseUrl';
import useUserInfo from '../../utils/hooks/useUserInfo';
import InputFormik from '../atoms/InputFormik';
import TextareaFormik from '../atoms/TextareaFormik';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import UploadInstrusction from '../atoms/UploadInstruction';
import { toast } from 'react-toastify';

export default function AddContent({
  initialValues,
  image,
  buttonTitle,
  desc = '',
  uploadLabel = 'Link photo cover (optional)',
  handleFunction,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { data: types, error } = useSWR(baseUrl.API + 'types', fetcher);
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState(desc);
  const router = useRouter();
  const handleChangeDescription = (e) => {
    setDescription(e);
  };

  const slug = router.query.slug || '';

  const handleChangePhoto = (e) => {
    setPhoto(e.target.value);
  };

  const { userInfo, token } = useUserInfo();
  let imagePreview;
  if (image) {
    imagePreview =
      image.substr(0, 4) === 'http' ? image : '/img/placeholder-landscape.jpg';
  }

  return (
    <div>
      {image ? (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '200px',
            borderRadius: '5px',
            overflow: 'hidden',
          }}>
          <Image
            src={imagePreview}
            alt={initialValues.title}
            layout="fill"
            objectFit="cover"
            quality={50}
          />
        </div>
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
          const request = await handleFunction(
            token,
            userInfo.username,
            description,
            values,
            photo,
            slug
          );
          if (request) {
            toast.success('Konten berhasil disimpan');
            setTimeout(() => {
              setIsLoading(false);
            }, 2000);
          } else {
            console.log(request);
          }
          setTimeout(() => {
            router.push('/dashboard/content-management/' + values.type);
          }, 2100);
          setTimeout(() => {
            scrollTo(top);
          }, 500);
        }}>
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
                component="select">
                {types ? (
                  types.data.map((type) => {
                    return (
                      <option
                        value={type.name}
                        key={type.id}
                        style={{ textTransform: 'capitalize' }}>
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
            <div className="auth-form-group">
              <label className="auth-form-control-label">{uploadLabel}</label>
              <div className="auth-form-control-wrapper">
                <div className="auth-form-control-icon">
                  <i className={`bi bi-` + 'image'}></i>
                </div>
                <input
                  className="auth-form-control"
                  type="text"
                  autoComplete="off"
                  placeholder={
                    'https://halamanpersonal-images.my.id/images/...'
                  }
                  onChange={(e) => handleChangePhoto(e)}
                />
              </div>
              <UploadInstrusction />
              <div>
                {photo.length ? (
                  <>
                    <Gap height={15} />
                    <img
                      src={photo}
                      alt="Jika link sudah sesuai, pratinjau gambar akan muncul di sini"
                      className="image-preivew"
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'contain',
                        borderRadius: '5px',
                      }}
                    />
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
            <Gap height={20} />
            <button
              type="submit"
              className="button-secondary"
              disabled={isValidating}>
              {isLoading ? 'Please wait...' : buttonTitle}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
