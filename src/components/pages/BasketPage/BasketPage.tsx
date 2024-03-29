import './BasketPage.scss';

import { WIRED_HEADPHONES } from '../../../utils/constants';
import BasketItem from '../../BasketItem/BasketItem';
import BasketTotalSection from '../../BasketTotalSection/BasketTotalSection';

const BasketPage = () => {
  return (
    <div className="basket-page">
      <h2 className="basket-page__title">Корзина</h2>
      <section className="basket-page__section-items">
        <div className="basket-page__items-wrapper">
          {WIRED_HEADPHONES.map((item) => {
            return <BasketItem {...item} />;
          })}
        </div>
        <BasketTotalSection totalBasketPrice={10000} />
      </section>
    </div>
  );
};

export default BasketPage;
