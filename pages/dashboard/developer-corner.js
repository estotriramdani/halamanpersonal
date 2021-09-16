import Gap from '../../src/components/atoms/Gap';
import DashboardLayout from '../../src/components/Layout/DashboardLayout';

export default function Dashboard() {
  return (
    <DashboardLayout title="Developer Corner" pageTitle="Developer Corner">
      <h2 className="dashboard-h2">Developer Corner</h2>
      <Gap height={20} />
      <p className="dashboard-page-desc" style={{ textAlign: 'center' }}>
        Avalaible soon!
      </p>
    </DashboardLayout>
  );
}
