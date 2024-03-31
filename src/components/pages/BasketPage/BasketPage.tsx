import './BasketPage.scss';

import BasketItem from '../../BasketItem/BasketItem';
import BasketTotalSection from '../../BasketTotalSection/BasketTotalSection';
import { useBasketContext } from '../../../hooks/useBasketContext';

const BasketPage = () => {
  const { basketItems, totalCost } = useBasketContext();

  return (
    <div className="basket-page">
      <h2 className="basket-page__title">Корзина</h2>
      <section className="basket-page__section-items">
        <div className="basket-page__items-wrapper">
          {basketItems.map((item) => {
            return <BasketItem {...item} key={item.id} />;
          })}
        </div>
        <BasketTotalSection totalBasketPrice={totalCost} />
      </section>
    </div>
  );
};

export default BasketPage;
