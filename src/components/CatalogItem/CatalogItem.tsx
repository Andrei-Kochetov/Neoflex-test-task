import './CatalogItem.scss';

import { ICatalogItem } from '../../utils/interfaces';
import Icon from '../Icon/Icon';
import { useBasketContext } from '../../hooks/useBasketContext';

const CatalogItem = ({ title, price, discountPrice, rate, img, id }: ICatalogItem) => {
  const finalPrice = discountPrice || price;

  const { addItemToBasket, basketItems } = useBasketContext();

  const isItemInBasket = basketItems.some((basketItem) => basketItem.id === id);

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
          <p className="catalog-item__price">{`${finalPrice} 	₽`}</p>
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
};

export default CatalogItem;
