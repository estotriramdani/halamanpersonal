import Gap from '../../../src/components/atoms/Gap';
import DashboardLayout from '../../../src/components/Layout/DashboardLayout';
import AddContent from '../../../src/components/dashboard/AddContent';
import useSWR from 'swr';
import { baseUrl } from '../../../src/configs/baseUrl';
import useUserInfo from '../../../src/utils/hooks/useUserInfo';
import Link from 'next/link';
import styles from './content-management.module.css';
import fetcher from '../../../src/utils/helpers/fetcher';
import { createContent } from '../../../src/utils/helpers/dashboard';

export default function Dashboard() {
  const { userInfo } = useUserInfo();
  const { data: types, errorType } = useSWR(
    baseUrl.API + 'types/' + userInfo.username,
    fetcher
  );
  console.log(types);
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
      <AddContent
        initialValues={{
          title: '',
          subtitle: '',
          type: '',
        }}
        buttonTitle="Add Content"
        handleFunction={createContent}
      />
      <hr />
      <Gap height="30px" />
      <h2 className="dashboard-h2">Konten yang Sudah Tersedia</h2>
      <div className={styles.cardContentWrapper}>
        {userInfo && types ? (
          types.data !== 'NULL' ? (
            types.data.map((type) => {
              return (
                <Link href={`/dashboard/content-management/${type}`} key={type}>
                  <a className={styles.cardContent}>{type}</a>
                </Link>
              );
            })
          ) : (
            <p>Belum ada konten apapun. Segera tambahkan.</p>
          )
        ) : (
          ''
        )}
      </div>
      <Gap height="20px" />
    </DashboardLayout>
  );
}
