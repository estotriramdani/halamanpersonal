import Image from 'next/image';
import Link from 'next/link';
import { baseUrl } from '../../../configs/baseUrl';

const TestimonialCard = ({ photo, username, name, headline }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-photo">
        {photo ? (
          <Image
            src={
              photo.substr(0, 5) !== 'https'
                ? '/img/placeholder-landscape.jpg'
                : photo
            }
            objectFit="cover"
            layout="fill"
            alt="Photo"
            quality={25}
          />
        ) : (
          ''
        )}
      </div>
      <div className="testimonial-card-text">
        <p className="testimonial-card-text-name">{name}</p>
        <p className="testimonial-card-text-profession">{headline}</p>
        <Link href={'/' + username}>
          <a className="testimonial-card-text-link">
            halamanpersonal.id/{username}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCard;
