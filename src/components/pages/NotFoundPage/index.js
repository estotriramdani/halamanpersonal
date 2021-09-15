import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div id="main">
      <div className="fof">
        <h1>Error 404</h1>
        <br />
        <p style={{ marginBottom: '10px', marginTop: ' 10px' }}>
          Page not found
        </p>
        <Link href="/">
          <a style={{ textDecoration: 'underline', fontSize: '1.1rem' }}>
            Back to home
          </a>
        </Link>
      </div>
    </div>
  );
}
