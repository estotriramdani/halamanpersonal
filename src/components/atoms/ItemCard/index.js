import Link from 'next/link';
import Image from 'next/image';
import Gap from '../Gap';
import Skeleton from 'react-loading-skeleton';
const ItemCard = () => {
  return (
    <Link href="/">
      <a className="item-card">
        <div className="item-card-thumb">
          <Image
            src="http://esto.my.id/files/images/experiences/thumb/automateall.jpg"
            alt="satu"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="item-card-text-wrapper" style={{ width: '100%' }}>
          <p className="item-card-text-wrapper-title">
            CV Solusi Automasi Indonesia
            {/* <Skeleton width="100%" /> */}
          </p>
          <Gap height={8} />
          <p className="item-card-text-wrapper-subtitle">
            Frontend Web Developer - Internship (February 2021 - May 2021)
            {/* <Skeleton count={2} width="100%" /> */}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ItemCard;
