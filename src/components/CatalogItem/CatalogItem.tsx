import './CatalogItem.scss';

import { ICatalogItem } from '../../utils/types';
import Icon from '../Icon/Icon';

const CatalogItem = ({ title, price, discountPrice, rate, img }: ICatalogItem) => {
  const finalPrice = discountPrice || price;

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
          <button className="catalog-item__button" type="button">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
