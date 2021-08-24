import React from 'react';
import Image from 'next/image';
import PageHeading from '../PageHeading';
import Gap from '../../atoms/Gap';
import { useRouter } from 'next/dist/client/router';
const ItemDetail = () => {
  const router = useRouter();
  return (
    <div className="detail-item">
      <PageHeading />
      <Gap height={15} />
      <div className="detail-item-image">
        <Image
          src="http://esto.my.id/files/images/experiences/thumb/aio.jpg"
          alt="Nama item"
          layout="fill"
          objectFit="cover"
          quality={50}
        />
      </div>
      <Gap height={18} />
      <div className="detail-item-text-wrapper">
        <h2 className="detail-item-title">PT Amerta Indah Otsuka</h2>
        <Gap height={15} />
        <h3 className="detail-item-subtitle">
          Web/System Developer Engineering Departement
        </h3>
        <Gap height={18} />
        <div className="detail-item-description">
          <p>
            My first project in AIO was built Healthy Asset Management (HAM)
            App. The application is written in PHP the most and JavaScript for
            asynchronous event. After the application was released, it still
            need to be maintained by me (like bug fixing, feature enhancement,
            etc).
          </p>
          <p>
            Now, I got new project to build an application that monitor,
            calculate, and visualize energy consumption (such as water,
            electric, gas, oil, etc.) in AIO Sukabumy Factory. This second
            project will use a lot of tools like SQL, JavaScript, and Grafana. I
            also will build REST API because the app is planned to be used in
            another platform.
          </p>
        </div>
      </div>
      <Gap height={18} />
      <div className="detail-item-feedback">
        <button title={'Like this awesome ' + router.query.pageName}>
          <i className="bi bi-hand-thumbs-up"></i>
        </button>
        <button title={'Save to image this awesome ' + router.query.pageName}>
          <i className="bi bi-save"></i>
        </button>
        <button title={'Share this awesome ' + router.query.pageName}>
          <i className="bi bi-share-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
