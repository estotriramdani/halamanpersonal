import Link from 'next/link';

function HomeButton() {
  return (
    <div className="dashboard-nav-item">
      <Link href="/">
        <a
          style={{ width: '100%', display: 'inline-block', cursor: 'pointer' }}
        >
          <i className="bi bi-house-fill"></i>&nbsp; Home
        </a>
      </Link>
    </div>
  );
}

export default HomeButton;
