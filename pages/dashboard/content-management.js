import { TrixEditor } from 'react-trix/dist/react-trix';
import Gap from '../../src/components/atoms/Gap';
import AuthInput from '../../src/components/auth/AuthInput';
import DashboardLayout from '../../src/components/Layout/DashboardLayout';
import Skeleton from 'react-loading-skeleton';
import useScript from '../../src/utils/hooks/useScript';
import AuthUpload from '../../src/components/auth/AuthUpload';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  const status = useScript('/assets/trix.js');
  const arr = [1, 2, 3, 4, 5];
  return (
    <DashboardLayout title="Content Management" pageTitle="Content Management">
      <h2 className="dashboard-h2">Content Management</h2>
      <Gap height={20} />
      <p className="dashboard-page-desc">
        Tambahkan dan ubah informasi portfolio, pengalaman, dan pendidikan pada
        halaman ini. Hasil dari halaman ini dapat di lihat di halaman{' '}
        <strong>selain</strong> profile atau home page.
      </p>
      <Gap height={20} />
      <div>
        <AuthInput
          icon="spellcheck"
          label="Title"
          id="title"
          placeholder="Judul konten (Ex: PT Amerta Indah Otsuka)"
          type="text"
        />
        <Gap height={10} />
        <AuthInput
          icon="tags"
          label="Subtitle"
          id="subtitle"
          placeholder="Subjudul konten (Web Developer (2021-present))"
          type="text"
        />
        <Gap height={10} />
        <div className="theme-picker">
          <p>Pilih type</p>
          <select
            name="type"
            id="type"
            style={{ width: '100%', padding: '10px' }}
          >
            <option value="education">Education</option>
            <option value="experience">Experience</option>
          </select>
        </div>
        <Gap height={30} />
        {status === 'ready' ? (
          <TrixEditor
            className="form-control"
            style={{ minHeight: '150px' }}
            placeholder="Ceritakan konten Anda (experience, portfolio, atau lainnya lebih spesifik di sini)"
            value=""
          />
        ) : (
          <Skeleton width="100%" height="150px" />
        )}
        <Gap height={15} />
        <p
          style={{ marginBottom: '10px', marginLeft: '10px', fontSize: '14px' }}
        >
          Gambar Sampul
        </p>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            borderRadius: '5px',
          }}
        >
          <Image
            src={'http://esto.my.id/files/images/experiences/thumb/aio.jpg'}
            layout="fill"
            alt=""
            quality="40"
            placeholder="blur"
            blurDataURL="https://raw.githubusercontent.com/estotriramdani/estotriramdani.github.io/main/img/placeholder.jpg"
            objectFit="cover"
          />
        </div>
        <Gap height={15} />
        <AuthUpload />
        <Gap height="20px" />
        <button className="button-secondary">Add Content</button>
      </div>
      <hr />
      <Gap height="30px" />
      <h2 className="dashboard-h2">Konten yang Sudah Tersedia</h2>
      <Gap height="20px" />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        {arr.map((arr) => {
          return (
            <div
              style={{
                width: '49%',
                marginBottom: '10px',
                background: 'white',
                borderRadius: '5px',
                boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.04)',
                overflow: 'hidden',
              }}
              key={arr}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="http://esto.my.id/files/images/experiences/thumb/aio.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Gap height={10} />
              <p style={{ fontSize: '16px', fontWeight: '700' }}>
                PT Amerta Indah Otsuka
              </p>
              <p style={{ fontSize: '14px', fontWeight: '400' }}>
                Web Developer
              </p>
              <p style={{ fontSize: '14px', fontWeight: '400' }}>
                in <strong>Experience</strong>
              </p>
              <Gap height={10} />
              <Link href="/">
                <a
                  style={{
                    display: 'block',
                    background: '#219ebc',
                    color: '#f9fafb',
                    padding: '8px',
                    textAlign: 'center',
                    borderRadius: '5px',
                    hover: {
                      background: 'red',
                    },
                  }}
                >
                  Detail / Edit
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
