/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function ProfilePhotoPreview({ photo, onChange }) {
  return (
    <>
      <div className="profile-photo-preview">
        <img
          src={photo}
          alt="profile photo"
          style={{
            objectFit: 'cover',
            width: '200px',
            height: '200px',
          }}
        />
      </div>
      <div className="auth-form-group">
        <label className="auth-form-control-label">Photo</label>
        <div className="auth-form-control-wrapper">
          <div className="auth-form-control-icon">
            <i className={`bi bi-` + 'image'}></i>
          </div>
          <input
            className="auth-form-control"
            autoComplete="off"
            placeholder="Link photo"
            onChange={onChange}
            value={photo}
          />
        </div>
      </div>
    </>
  );
}

export default ProfilePhotoPreview;
