import './BasketItem.scss';

import { useState } from 'react';

import { BasketItemType } from '../../utils/types';
import Icon from '../Icon/Icon';

const BasketItem = ({ title, price, discountPrice, img }: BasketItemType) => {
  const finalPrice = discountPrice || price;

  const [quantityCount, setQuantityCount] = useState(1);

  return (
    <div className="basket-item">
      <div className="basket-item__img-quantity-wrapper">
        <img src={img} alt="basket item" />
        <div className="basket-item__quantity">
          <Icon name="minus" />
          {quantityCount}
          <Icon name="plus" />
        </div>
      </div>

      <div className="basket-item__description">
        <Icon name="delete" className="basket-item__delete-button" />
        <div className="basket-item__title-old-price-wrapper">
          <p className="basket-item__title">{title}</p>
          <p className="basket-item__old-price">{`${finalPrice} 	₽`}</p>
        </div>
        <p className="basket-item__final-price">{`${finalPrice} 	₽`}</p>
      </div>
    </div>
  );
};

export default BasketItem;
