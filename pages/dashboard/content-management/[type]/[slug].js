import Gap from '../../../../src/components/atoms/Gap';
import DashboardLayout from '../../../../src/components/Layout/DashboardLayout';
import AddContent from '../../../../src/components/dashboard/AddContent';
import useSWR from 'swr';
import { baseUrl } from '../../../../src/configs/baseUrl';
import useUserInfo from '../../../../src/utils/hooks/useUserInfo';
import Link from 'next/link';
import useQuery from '../../../../src/utils/hooks/useQuery';
import fetcher from '../../../../src/utils/helpers/fetcher';
import styles from './content-detail.module.css';
import { useEffect, useState } from 'react';
import {
  deleteContent,
  updateContent,
} from '../../../../src/utils/helpers/dashboard';
import AlertFloating from '../../../../src/components/atoms/AlertFloating';
import { useRouter } from 'next/dist/client/router';

export default function DashboardDetailContent() {
  const [initialValues, setInitialValues] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { userInfo, token } = useUserInfo();
  const [image, setImage] = useState('');
  const { slug, type } = useQuery();
  const [isSuccess, setIsSuccess] = useState(false);
  const { data, errorType } = useSWR(
    `${baseUrl.API}contents/${userInfo.username}/${type}/${slug}`,
    fetcher
  );

  const router = useRouter();

  const handleDeleteContent = async () => {
    const conf = confirm('Yakin hapus?');
    if (conf) {
      const deletedContent = await deleteContent(token, slug);
      if (deletedContent.status === 'success') {
        setIsSuccess(true);
        scrollTo(top);
        setTimeout(() => {
          setIsSuccess(false);
          router.push('/dashboard/content-management/' + type);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    if (isLoaded === false && data) {
      setInitialValues(data.data);
      setImage(data.data.img);
    }
    return () => {
      setIsLoaded(true);
    };
  }, [isLoaded, data]);

  return (
    <DashboardLayout title="Content Management" pageTitle="Content Management">
      {isSuccess ? (
        <AlertFloating
          message="Konten berhasil dihapus. Mohon tunggu."
          type="success"
        />
      ) : (
        ''
      )}
      <h2 className="dashboard-h2">Edit Content</h2>
      <Gap height={20} />
      <p className="dashboard-page-desc"></p>
      <Link href={`/dashboard/content-management/${type}`}>
        <a className={styles.linkBack}>{type}</a>
      </Link>
      <Gap height={20} />
      <AddContent
        initialValues={{
          title: initialValues.title,
          subtitle: initialValues.subtitle,
          type: initialValues.type,
        }}
        buttonTitle="Perbarui Konten"
        desc={initialValues.desc}
        uploadLabel="Pilih cover (jika ingin mengganti)"
        handleFunction={updateContent}
        image={image}
      />
      <hr />
      <Gap height="10px" />
      <button
        className="button-secondary"
        style={{ background: 'red', color: 'white' }}
        onClick={handleDeleteContent}>
        HAPUS KONTEN
      </button>
    </DashboardLayout>
  );
}

export async function getServerSideProps({ req }) {
  const { credentials } = req.cookies;
  if (!credentials) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const credentialsDecode = Buffer.from(credentials, 'base64').toString(
    'ascii'
  );
  return {
    props: {
      credentials: credentialsDecode,
    },
  };
}
