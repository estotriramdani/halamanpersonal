import Link from 'next/link';
import Image from 'next/image';
import Gap from '../Gap';
const ItemCard = ({ image, title, subtitle, slug, type }) => {
  return (
    <Link href={`/dashboard/${type}/${slug}`}>
      <a className="item-card">
        <div className="item-card-thumb" style={{ position: 'relative' }}>
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/img/placeholder-landscape"
          />
        </div>
        <div className="item-card-text-wrapper" style={{ width: '100%' }}>
          <p className="item-card-text-wrapper-title">
            {title}
            {/* <Skeleton width="100%" /> */}
          </p>
          <Gap height={8} />
          <p className="item-card-text-wrapper-subtitle">
            {subtitle}
            {/* <Skeleton count={2} width="100%" /> */}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ItemCard;
