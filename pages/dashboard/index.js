import Gap from '../../src/components/atoms/Gap';
import DashboardLayout from '../../src/components/Layout/DashboardLayout';
import React from 'react';
import 'draft-js/dist/Draft.css';
import Profile from '../../src/components/dashboard/Profile';

export default function Dashboard() {
  return (
    <DashboardLayout title="Profile" pageTitle="Profile">
      <Profile />
    </DashboardLayout>
  );
}
