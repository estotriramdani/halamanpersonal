import Gap from '../../src/components/atoms/Gap';
import { ForgotPasswordPage } from '../../src/components/auth/ForgotPassword';
import Link from 'next/link';
import AuthLayout from '../../src/components/Layout/AuthLayout';

export default function ForgotPassword() {
  return (
    <AuthLayout title="Forgot Password">
      <ForgotPasswordPage />
      <Gap height={30} />
      <div style={{ fontSize: '14px' }}>
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
