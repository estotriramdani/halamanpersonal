import Gap from '../../src/components/atoms/Gap';
import DashboardLayout from '../../src/components/Layout/DashboardLayout';
import AuthInput from '../../src/components/auth/AuthInput';
import AuthUpload from '../../src/components/auth/AuthUpload';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'draft-js/dist/Draft.css';

export default function Dashboard() {
  return (
    <DashboardLayout title="Profile" pageTitle="Profile">
      <h2 className="dashboard-h2">Profile</h2>
      <Gap height={20} />
      <p className="dashboard-page-desc">
        Silakan ubah atau sesuaikan informasi mengenai detail Anda. Perubahan
        informasi profil ini akan ditampilkan pada halaman utama website Anda.
      </p>
      <Gap height={20} />
      <div className="profile-photo-preview">
        <Image
          src={'https://estotriramdani.github.io/img/photo-1x1.jpg'}
          layout="fill"
          alt=""
          quality="40"
          placeholder="blur"
          blurDataURL="https://estotriramdani.github.io/img/photo-1x1.jpg"
        />
      </div>
      <Gap height={15} />
      <AuthUpload />
      <Gap height={15} />
      <AuthInput
        icon="person-fill"
        label="Full Name"
        id="name"
        placeholder="You fullname is ..."
        type="text"
      />
      <Gap height={10} />
      <AuthInput
        icon="briefcase-fill"
        label="Profession"
        id="profession"
        placeholder="Are you student, software engineer, or something?"
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
      <Gap height={10} />
      <AuthInput
        icon="facebook"
        label="Facebook"
        id="facebook"
        placeholder="Your Facebook profile link"
        type="text"
      />
      <Gap height={10} />
      <AuthInput
        icon="twitter"
        label="Twitter"
        id="twitter"
        placeholder="Your Twitter username"
        type="text"
      />
      <Gap height={10} />
      <AuthInput
        icon="instagram"
        label="Instagram"
        id="instagram"
        placeholder="Your Instagram username"
        type="text"
      />
      <Gap height={10} />
      <AuthInput
        icon="linkedin"
        label="LinkedIn"
        id="linkedin"
        placeholder="Your LinkedIn profile link"
        type="text"
      />
      <Gap height={10} />
      <AuthInput
        icon="github"
        label="GitHub"
        id="github"
        placeholder="Your GitHub username"
        type="text"
      />
      <Gap height={10} />
      <div className="dashboard-text-area">
        <label>Skill (seperate with commas)</label>
        <textarea
          className=""
          rows={5}
          placeholder="Microsoft Word, Photoshop"
        ></textarea>
      </div>
      <Gap height={10} />
      <div className="dashboard-text-area">
        <label>More info</label>
        <textarea
          className=""
          rows={5}
          placeholder="Please provide more info about you"
        ></textarea>
      </div>
      <Gap height={10} />
      <div className="theme-picker">
        <p>Select Theme</p>
        <div className="radio">
          <input id="radio-1" name="radio" type="radio" />
          <label htmlFor="radio-1" className="radio-label">
            Checked
          </label>
        </div>
        <Link href="/theme-list">
          <a>See all themes here</a>
        </Link>
      </div>
      <Gap height={20} />
      <button className="button-secondary">Change Profile</button>
    </DashboardLayout>
  );
}
