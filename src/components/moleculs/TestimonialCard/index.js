import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-photo">
        <Image
          src="https://estotriramdani.github.io/img/photo-1x1.jpg"
          objectFit="cover"
          layout="fill"
          alt="Photo"
          quality={25}
        />
      </div>
      <div className="testimonial-card-text">
        <p className="testimonial-card-text-name">Esto Triramdani N</p>
        <p className="testimonial-card-text-profession">Front-end Engineer</p>
        <Link href="/estotriramdani">
          <a className="testimonial-card-text-link">
            halamanpersonal.id/estotriramdani
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCard;
