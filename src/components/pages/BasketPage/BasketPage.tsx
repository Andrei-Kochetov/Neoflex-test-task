import './BasketPage.scss';

import BasketItem from '../../BasketItem/BasketItem';
import BasketTotalSection from '../../BasketTotalSection/BasketTotalSection';
import useBasketContext from '../../../hooks/useBasketContext';

const BasketPage = () => {
  const { basketItems, updateQuantity, removeItemFromBasket } = useBasketContext();

  return (
    <div className="basket-page">
      <h2 className="basket-page__title">Корзина</h2>
      <section className="basket-page__section-items">
        <div className="basket-page__items-wrapper">
          {basketItems.length > 0 ? (
            basketItems.map((item) => {
              return (
                <BasketItem
                  {...item}
                  key={item.id}
                  updateQuantity={updateQuantity}
                  removeItemFromBasket={removeItemFromBasket}
                />
              );
            })
          ) : (
            <h3 className="basket-page__empty-message">Вы еще не выбрали товары...</h3>
          )}
        </div>
        <BasketTotalSection />
      </section>
    </div>
  );
};

export default BasketPage;
