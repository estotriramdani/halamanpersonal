import Gap from '../../src/components/atoms/Gap';
import AuthInput from '../../src/components/auth/AuthInput';
import Link from 'next/link';
import AuthUpload from '../../src/components/auth/AuthUpload';
import AuthLayout from '../../src/components/Layout/AuthLayout';
import { RegisterPage } from '../../src/components/auth/Register';

const Register = () => {
  return (
    <AuthLayout title="Register">
      <RegisterPage />
      <Gap height={30} />
      <div style={{ fontSize: '14px' }}>
        <p style={{ textAlign: 'center' }}>
          Already registered?{' '}
          <Link href="/auth/login">
            <a style={{ textDecoration: 'underline' }}>Login here</a>
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
};

export default Register;
