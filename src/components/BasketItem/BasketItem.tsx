import { memo } from 'react';
import { IBasketItemProps } from '../../utils/interfaces';
import Icon from '../Icon/Icon';
import './BasketItem.scss';

const BasketItem = memo(
  ({
    title,
    price,
    discountPrice,
    img,
    quantity,
    id,
    updateQuantity,
    removeItemFromBasket,
  }: IBasketItemProps) => {
    const finalPrice = discountPrice || price;

    const deleteItemHandleClick = () => removeItemFromBasket(id);

    const decreaseQuantityHandleClick = () => {
      if (quantity > 1) updateQuantity(id, quantity - 1);
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
          <div className="basket-item__title-price-wrapper">
            <p className="basket-item__title">{title}</p>
            <p className="basket-item__price">{`${price} ₽`}</p>
          </div>
          <p className="basket-item__final-price">{`${finalPrice * quantity} ₽`}</p>
        </div>
      </div>
    );
  },
);

export default BasketItem;
