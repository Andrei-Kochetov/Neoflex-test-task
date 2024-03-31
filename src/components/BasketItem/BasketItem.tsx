import './BasketItem.scss';

import Icon from '../Icon/Icon';
import { IBasketItem } from '../../utils/interfaces';
import { useBasketContext } from '../../hooks/useBasketContext';

const BasketItem = ({ title, price, discountPrice, img, quantity, id }: IBasketItem) => {
  const finalPrice = discountPrice || price;

  const { removeItemFromBasket, updateQuantity } = useBasketContext();

  const deleteItemHandleClick = () => {
    removeItemFromBasket(id);
  };

  const decreaseQuantityHandleClick = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const increaseQuantityHandleClick = () => {
    if (quantity < 99) updateQuantity(id, quantity + 1);
  };

  return (
    <div className="basket-item">
      <div className="basket-item__img-quantity-wrapper">
        <img src={img} alt="basket item" />
        <div className="basket-item__quantity">
          <button type="button" onClick={decreaseQuantityHandleClick}>
            <Icon name="minus" />
          </button>
          {quantity}
          <button type="button" onClick={increaseQuantityHandleClick}>
            <Icon name="plus" />
          </button>
        </div>
      </div>

      <div className="basket-item__description">
        <button
          className="basket-item__delete-button"
          type="button"
          onClick={deleteItemHandleClick}
        >
          <Icon name="delete" />
        </button>
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
