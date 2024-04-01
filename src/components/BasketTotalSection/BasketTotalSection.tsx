import './BasketTotalSection.scss';
import { useMemo } from 'react';

import useBasketContext from '../../hooks/useBasketContext';

const BasketTotalSection = () => {
  const { basketItems } = useBasketContext();

  const totalCost = useMemo(() => {
    return basketItems.reduce((accumulator, currentItem) => {
      const finalPrice = currentItem.discountPrice || currentItem.price;
      return accumulator + finalPrice * currentItem.quantity;
    }, 0);
  }, [basketItems]);

  return (
    <section className="basket-total-section">
      <div className="basket-total-section__price">
        <p>ИТОГО</p>
        <p>{`₽ ${totalCost}`}</p>
      </div>
      <button className="basket-total-section__button" type="button">
        Перейти к оформлению
      </button>
    </section>
  );
};

export default BasketTotalSection;
