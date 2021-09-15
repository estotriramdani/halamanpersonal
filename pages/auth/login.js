import Link from 'next/link';
import Gap from '../../src/components/atoms/Gap';
import { LoginPage } from '../../src/components/auth/Login';
import AuthLayout from '../../src/components/Layout/AuthLayout';

function Login() {
  return (
    <AuthLayout title="Login">
      <LoginPage />
      <Gap height={30} />
      <div style={{ fontSize: '14px' }}>
        <p style={{ textAlign: 'center' }}>
          Not registered?
          <Link href="/auth/register">
            <a style={{ textDecoration: 'underline' }}> Register here.</a>
          </Link>
        </p>
        <Gap height={15} />
        <p style={{ textAlign: 'center' }}>
          Forgot password?
          <Link href="/auth/forgot-password">
            <a style={{ textDecoration: 'underline' }}> Reset password here.</a>
          </Link>
        </p>
        <Gap height={15} />
        <p style={{ textAlign: 'center' }}>
          <Link href="/">
            <a style={{ textDecoration: 'underline' }}>Back to home</a>
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;
