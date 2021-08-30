/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/no-unknown-property */
import Link from 'next/link';
import Gap from '../../src/components/atoms/Gap';
import DashboardLayout from '../../src/components/Layout/DashboardLayout';
import $ from 'jquery';

function index() {
  return (
    <DashboardLayout title="Home" active="home">
      <div className="container">
        <h3 className="mb-2">Selamat Datang, Esto Triramdani N</h3>
        <p className="mb-4">
          Berikut menu yang dapat Anda gunakan pada aplikasi ini.
        </p>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card" style={{ minHeight: '100%' }}>
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="mb-3">
                  <h5 className="card-title">Profile</h5>
                  <p className="card-text">
                    Silakan ubah informasi mengenai detail anda. Perubahan
                    informasi profil ini akan ditampilkan pada halaman utama
                    website Anda.
                  </p>
                </div>
                <Link href="/dashboard/profile">
                  <a className="card-link btn btn-primary text-white">
                    Profile
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card " style={{ minHeight: '100%' }}>
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="mb-3">
                  <h5 className="card-title">Content Management</h5>
                  <p className="card-text">
                    Tambahkan dan ubah informasi portfolio, pengalaman, dan
                    pendidikan pada halaman ini. Hasil dari halaman ini dapat di
                    lihat di halaman <strong>selain</strong> profile atau home
                    page.
                  </p>
                </div>
                <Link href="/dashboard/content-management">
                  <a className="card-link btn btn-primary text-white">
                    Content Management
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card" style={{ minHeight: '100%' }}>
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="mb-3">
                  <h5 className="card-title">Developer Corner</h5>
                  <p className="card-text">
                    Data yang Anda masukkan (kecuali password dan informasi
                    sensitif lainnya) dapat Anda akses melalui API yang kami
                    sediakan dalam format JSON.
                  </p>
                </div>
                <Link href="/dashboard/content-management">
                  <a className="card-link btn btn-primary text-white">
                    Developer Corner
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gap height={20} />
    </DashboardLayout>
  );
}

export default index;
