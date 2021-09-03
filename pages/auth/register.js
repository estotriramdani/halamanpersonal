import Gap from '../../src/components/atoms/Gap';
import AuthInput from '../../src/components/auth/AuthInput';
import Link from 'next/link';
import AuthUpload from '../../src/components/auth/AuthUpload';
import AuthLayout from '../../src/components/Layout/AuthLayout';
import { RegisterPage } from '../../src/components/auth/Register';

const Register = () => {
  return (
    <AuthLayout title="Register">
      <div className="auth-form-wrapper">
        {/* <AuthInput
          icon="person-fill"
          label="Full Name"
          id="name"
          placeholder="You fullname is ..."
          type="text"
        />
        <Gap height={10} />
        <AuthInput
          icon="textarea-t"
          label="Username"
          id="username"
          placeholder="Type your username"
          type="text"
        />
        <Gap height={10} />
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
        <Gap height={10} />
        <AuthInput
          icon="key-fill"
          label="Repeat Password"
          id="passwordRepeat"
          placeholder="Please repeat your password"
          type="password"
        />
        <Gap height={15} />
        <Link href="/auth/login" passHref>
          <button className="button-primary">Register</button>
        </Link> */}
      </div>
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
