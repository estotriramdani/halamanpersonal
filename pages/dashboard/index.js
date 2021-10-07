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
