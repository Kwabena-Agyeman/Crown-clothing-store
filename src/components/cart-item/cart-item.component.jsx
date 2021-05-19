import React from 'react';

import './cart-item.styles.scss';

const CartItem = (props) => {
  const { imageUrl, price, name, quantity } = props.item;

  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='shopping item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
