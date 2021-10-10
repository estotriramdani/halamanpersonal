import axios from 'axios';
import Gap from '../../../../src/components/atoms/Gap';
import DashboardLayout from '../../../../src/components/Layout/DashboardLayout';
import AddContent from '../../../../src/components/dashboard/AddContent';
import { baseUrl } from '../../../../src/configs/baseUrl';
import useUserInfo from '../../../../src/utils/hooks/useUserInfo';
import Link from 'next/link';
import useQuery from '../../../../src/utils/hooks/useQuery';
import styles from './content-detail.module.css';
import { useEffect, useState } from 'react';
import {
  deleteContent,
  updateContent,
} from '../../../../src/utils/helpers/dashboard';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';

export default function DashboardDetailContent() {
  const [initialValues, setInitialValues] = useState({});
  const { userInfo, token } = useUserInfo();
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');
  const { slug, type, isReady } = useQuery();
  const [isLoaded, setIsLoaded] = useState(false);

  const router = useRouter();

  const handleDeleteContent = async () => {
    const conf = confirm('Yakin hapus?');
    if (conf) {
      const deletedContent = await deleteContent(token, slug);
      if (deletedContent.status === 'success') {
        toast.success('Konten berhasil dihapus.');
        scrollTo(top);
        setTimeout(() => {
          router.push('/dashboard/content-management/' + type);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    if (isReady) {
      setUsername(userInfo.username);
      if (username && username != '') {
        axios
          .get(`${baseUrl.API}contents/${username}/${type}/${slug}`)
          .then((response) => {
            setInitialValues(response.data.data);
            setImage(response.data.data.img);
          });
      }
    }
  }, [isReady, slug, type, userInfo, isLoaded, username]);
  return (
    <DashboardLayout title="Content Management" pageTitle="Content Management">
      <h2 className="dashboard-h2">Edit Content</h2>
      <Gap height={20} />
      <p className="dashboard-page-desc"></p>
      <Link href={`/dashboard/content-management/${type}`}>
        <a className={styles.linkBack}>{type}</a>
      </Link>
      <Gap height={20} />
      {initialValues.title ? (
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
      ) : (
        <>
          <Skeleton height={200} width={'100%'} />
          <Gap height={15} />
          <Skeleton height={40} width="100%" />
          <Gap height={15} />
          <Skeleton height={40} width="100%" />
          <Gap height={15} />
          <Skeleton height={40} width="100%" />
          <Gap height={15} />
          <Skeleton height={150} width="100%" />
        </>
      )}
      <hr />
      <Gap height="10px" />
      {initialValues.title ? (
        <button
          className="button-secondary"
          style={{ background: 'red', color: 'white' }}
          onClick={handleDeleteContent}>
          HAPUS KONTEN
        </button>
      ) : (
        ''
      )}
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
