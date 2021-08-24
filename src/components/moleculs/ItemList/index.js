import Link from 'next/link';
import React from 'react';
import ItemCard from '../../atoms/ItemCard';

const ItemList = () => {
  return (
    <div className="item-list">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
};

export default ItemList;
