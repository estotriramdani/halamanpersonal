import Image from 'next/image';
import Link from 'next/link';
import { baseUrl } from '../../configs/baseUrl';

export default function DashboardContentCard({
  image,
  title,
  subtitle,
  slug,
  type,
}) {
  const imagePreview =
    image.substr(0, 4) === 'http' ? image : '/img/placeholder-landscape.jpg';
  return (
    <div
      style={{
        width: '100%',
        marginBottom: '10px',
        background: 'white',
        borderRadius: '5px',
        boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.04)',
        overflow: 'hidden',
      }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '150px',
          overflow: 'hidden',
        }}>
        <Image src={imagePreview} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div style={{ padding: '10px' }}>
        <p style={{ fontSize: '16px', fontWeight: '700' }}>{title}</p>
        <p style={{ fontSize: '14px', fontWeight: '400' }}>{subtitle}</p>
        <p style={{ fontSize: '14px', fontWeight: '400' }}>
          in <strong>{type}</strong>
        </p>
      </div>
      <Link href={`/dashboard/content-management/${type}/${slug}`}>
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
          }}>
          Detail
        </a>
      </Link>
    </div>
  );
}
