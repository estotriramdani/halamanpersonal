import Image from 'next/image';
import Link from 'next/link';

export default function DashboardContentCard() {
  return (
    <div
      style={{
        width: '48.5%',
        marginBottom: '10px',
        background: 'white',
        borderRadius: '5px',
        boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.04)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100px',
          overflow: 'hidden',
        }}
      >
        <Image
          src="http://esto.my.id/files/images/experiences/thumb/aio.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div style={{ padding: '10px' }}>
        <p style={{ fontSize: '16px', fontWeight: '700' }}>
          PT Amerta Indah Otsuka
        </p>
        <p style={{ fontSize: '14px', fontWeight: '400' }}>Web Developer</p>
        <p style={{ fontSize: '14px', fontWeight: '400' }}>
          in <strong>Experience</strong>
        </p>
      </div>
      <Link href="/">
        <a
          style={{
            display: 'block',
            background: '#219ebc',
            color: '#f9fafb',
            padding: '8px',
            textAlign: 'center',
            borderRadius: '5px',
            hover: {
              background: 'red',
            },
          }}
        >
          Detail / Edit
        </a>
      </Link>
    </div>
  );
}
