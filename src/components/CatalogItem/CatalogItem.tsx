import './CatalogItem.scss';

import { memo } from 'react';

import { ICatalogItemProps } from '../../utils/interfaces';
import Icon from '../Icon/Icon';

const CatalogItem = memo(
  ({
    title,
    price,
    discountPrice,
    rate,
    img,
    id,
    addItemToBasket,
    isItemInBasket,
  }: ICatalogItemProps) => {
    const finalPrice = discountPrice || price;
    const oldPrice = discountPrice ? `${price} ₽` : '';

    const handleClick = () => {
      const itemToAddToBasket = {
        title,
        price,
        discountPrice,
        img,
        id,
        quantity: 1,
      };
      addItemToBasket(itemToAddToBasket);
    };

    return (
      <div className="catalog-item">
        <img src={img} alt="section item" />

        <div className="catalog-item__description">
          <div className="catalog-item__title-rate-wrapper">
            <p className="catalog-item__title">{title}</p>
            <div className="catalog-item__rate">
              <Icon name="star" /> {rate}
            </div>
          </div>
          <div className="catalog-item__price-buy-wrapper">
            <div className="catalog-item__price-wrapper">
              <p className="catalog-item__price">{`${finalPrice} ₽`}</p>
              <p className="catalog-item__old-price">{oldPrice}</p>
            </div>

            <button
              className="catalog-item__button"
              type="button"
              onClick={handleClick}
              disabled={isItemInBasket}
            >
              {isItemInBasket ? 'В корзине' : 'Купить'}
            </button>
          </div>
        </div>
      </div>
    );
  },
);

export default CatalogItem;
