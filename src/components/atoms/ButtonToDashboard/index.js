import React from 'react';
import Link from 'next/link';

const ButtonToDashboard = () => {
  return (
    <>
      <style jsx>{`
        a {
          position: fixed;
          z-index: 99;
          padding: 10px 20px;
          background: #fff;
          color: black;
          bottom: 10px;
          right: 10px;
          border-radius: 5px;
          box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <Link href="/dashboard">
        <a tabIndex={1}>Go To Dashboard</a>
      </Link>
    </>
  );
};

export default ButtonToDashboard;
