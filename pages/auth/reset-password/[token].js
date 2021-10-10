import Gap from '../../../src/components/atoms/Gap';
import Link from 'next/link';
import AuthLayout from '../../../src/components/Layout/AuthLayout';
import { ResetPasswordPage } from '../../../src/components/auth/ResetPassword';

export default function ForgotPassword() {
  return (
    <AuthLayout title="Reset Password">
      <ResetPasswordPage />
      <Gap height={30} />
      <div style={{ fontSize: '14px' }}>
        <p style={{ textAlign: 'center' }}>
          <Link href="/auth/login">
            <a style={{ textDecoration: 'underline' }}>Login here</a>
          </Link>
        </p>
        <Gap height={20} />
        <p style={{ textAlign: 'center' }}>
          <Link href="/auth/register">
            <a style={{ textDecoration: 'underline' }}>
              Create an account here
            </a>
          </Link>
        </p>
        <Gap height={20} />
        <p style={{ textAlign: 'center' }}>
          <Link href="/">
            <a style={{ textDecoration: 'underline' }}>Back to home</a>
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export async function getServerSideProps({ req }) {
  const { credentials } = req.cookies;
  if (credentials) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
