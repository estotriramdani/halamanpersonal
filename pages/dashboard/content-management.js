import Gap from '../../src/components/atoms/Gap';
import DashboardLayout from '../../src/components/Layout/DashboardLayout';

export default function Dashboard() {
  return (
    <DashboardLayout title="Content Management" pageTitle="Content Management">
      <h2 className="dashboard-h2">Content Management</h2>
      <Gap height={20} />
      <p className="dashboard-page-desc">
        Tambahkan dan ubah informasi portfolio, pengalaman, dan pendidikan pada
        halaman ini. Hasil dari halaman ini dapat di lihat di halaman{' '}
        <strong>selain</strong> profile atau home page.
      </p>
    </DashboardLayout>
  );
}
