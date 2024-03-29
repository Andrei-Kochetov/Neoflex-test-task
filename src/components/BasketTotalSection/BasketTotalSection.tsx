import './BasketTotalSection.scss';

import { IBasketTotalSection } from '../../utils/types';

const BasketTotalSection = ({ totalBasketPrice }: IBasketTotalSection) => {
  return (
    <section className="basket-total-section">
      <div className="basket-total-section__price">
        <p>ИТОГО</p>
        <p>{`₽ ${totalBasketPrice}`}</p>
      </div>
      <button className="basket-total-section__button" type="button">
        Перейти к оформлению
      </button>
    </section>
  );
};

export default BasketTotalSection;
