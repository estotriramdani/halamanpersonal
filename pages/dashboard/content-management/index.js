import Gap from '../../../src/components/atoms/Gap';
import DashboardLayout from '../../../src/components/Layout/DashboardLayout';
import useScript from '../../../src/utils/hooks/useScript';
import AddContent from '../../../src/components/dashboard/AddContent';
import useSWR from 'swr';
import { baseUrl } from '../../../src/configs/baseUrl';
import { useEffect, useState } from 'react';
import useUserInfo from '../../../src/utils/hooks/useUserInfo';

export default function Dashboard() {
  const userInfo = useUserInfo();
  const status = useScript('/assets/trix.js');
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
      <AddContent />
      <hr />
      <Gap height="30px" />
      <h2 className="dashboard-h2">Konten yang Sudah Tersedia</h2>
      <Gap height="20px" />
    </DashboardLayout>
  );
}
