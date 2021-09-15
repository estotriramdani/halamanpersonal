import Link from 'next/link';

export default function Theme1TypeCard({ username, pageName, icon }) {
  return (
    <Link href={`/${username}/${pageName}`}>
      <a className="theme-1-content-menu-item">
        <div className="theme-1-content-menu-item-icon">
          <i className={`bi bi-${icon}`}></i>
        </div>
        <p style={{ textTransform: 'capitalize' }}>{pageName}</p>
      </a>
    </Link>
  );
}
