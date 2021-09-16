import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TrixEditor } from 'react-trix/dist/react-trix';
import Gap from '../../src/components/atoms/Gap';
import AuthInput from '../../src/components/auth/AuthInput';
import DashboardLayout from '../../src/components/Layout/DashboardLayout';
import Skeleton from 'react-loading-skeleton';
import useScript from '../../src/utils/hooks/useScript';

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
