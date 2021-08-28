import Link from 'next/link';
import Gap from '../../src/components/atoms/Gap';
import AuthInput from '../../src/components/auth/AuthInput';
import AuthLayout from '../../src/components/Layout/AuthLayout';

function Login() {
  return (
    <AuthLayout title="Login">
      <div className="auth-form-wrapper">
        <AuthInput
          icon="envelope-fill"
          label="Email"
          id="email"
          placeholder="Type your email"
          type="text"
        />
        <Gap height={10} />
        <AuthInput
          icon="key-fill"
          label="Password"
          id="password"
          placeholder="Create your password"
          type="password"
        />
        <Gap height={20} />
        <button className="button-primary">Login</button>
      </div>
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
