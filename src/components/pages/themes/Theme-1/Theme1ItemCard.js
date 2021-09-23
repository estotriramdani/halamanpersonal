/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Theme1ItemCard({
  username,
  type,
  title,
  slug,
  subtitle,
  image,
}) {
  return (
    <div className="theme-1-showcase-item" style={{ marginBottom: '25px' }}>
      <div className="theme-1-showcase-item-image">
        <img
          src={image}
          alt={title}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      <div className="theme-1-showcase-item-desc">
        <p className="theme-1-showcase-item-desc-title">{title}</p>
        <p className="theme-1-showcase-item-desc-subtitle">{subtitle}</p>
        <div className="theme-1-showcase-item-desc-btn-wrapper">
          <Link href={`/${username}/${type}/${slug}`}>
            <a className="theme-1-btn">Detail</a>
          </Link>
        </div>
      </div>
      <hr className="theme-1-showcase-item-linebreak" />
    </div>
  );
}
