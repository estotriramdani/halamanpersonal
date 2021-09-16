import React from 'react';
import Gap from '../Gap';
import Image from 'next/image';
import { baseUrl } from '../../../configs/baseUrl';
import InputUpload from '../InputUpload';

const ProfilePhotoSection = ({ photo, onChange }) => {
  return (
    <div className="photo-section">
      <div className="profile-photo-preview">
        <Image
          src={
            baseUrl.IMAGE + 'profile/' + photo ||
            'https://dummyimage.com/200x200/dedede/020312.png&text=No+Image'
          }
          layout="fill"
          alt="profile photo"
          quality="40"
          placeholder="blur"
          blurDataURL={`https://dummyimage.com/200x200/dedede/020312.png&text=No+Image`}
        />
      </div>
      <Gap height={15} />
      <InputUpload
        label="Select Profile Photo (Jika gambar tidak berubah setelah sukses Change Profile, silakan refersh halaman ini)"
        name="photo"
        onChange={onChange}
        accept={'image/*'}
      />
    </div>
  );
};

export default ProfilePhotoSection;
