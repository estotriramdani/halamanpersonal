import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import { baseUrl } from '../../../../configs/baseUrl';
import fetcher from '../../../../utils/helpers/fetcher';
import Theme1ItemCard from './Theme1ItemCard';

function Theme1ListCard({ username, type }) {
  const { data: items } = useSWR(
    baseUrl.API + 'contents/' + username + '/' + type,
    fetcher
  );
  return items
    ? items.data.map((item) => {
        return (
          <Theme1ItemCard
            key={item.id}
            username={username}
            type={item.type}
            image={item.img}
            slug={item.slug}
            title={item.title}
            subtitle={item.subtitle}
          />
        );
      })
    : [1, 2, 3, 4].map((key) => {
        return <Skeleton key={key} width="100%" height={150} />;
      });
}

export default Theme1ListCard;
