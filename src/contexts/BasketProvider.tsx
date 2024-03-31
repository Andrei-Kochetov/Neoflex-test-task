import { createContext, useState, useEffect, useMemo } from 'react';

import { IBasketContext, IBasketItem, IBasketProvider } from '../utils/interfaces';

export const BasketContext = createContext<IBasketContext>({
  basketItems: [],
  addItemToBasket: () => {},
  updateQuantity: () => {},
  removeItemFromBasket: () => {},
  totalCost: 0,
});

export const BasketProvider = ({ children }: IBasketProvider) => {
  const [basketItems, setBasketItems] = useState<IBasketItem[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const storageItems = JSON.parse(sessionStorage.getItem('basketItems') || '[]');
    setBasketItems(storageItems);
  }, []);

  useEffect(() => {
    const newTotalCost = basketItems.reduce((accumulator, currentItem) => {
      const finalPrice = currentItem.discountPrice ? currentItem.discountPrice : currentItem.price;
      return accumulator + finalPrice * currentItem.quantity;
    }, 0);
    setTotalCost(newTotalCost);
  }, [basketItems]);

  const addItemToBasket = (item: IBasketItem) => {
    const IsThisItemInBasket = basketItems.some((basketItem) => basketItem.id === item.id);

    if (IsThisItemInBasket) return;

    const newBasketItems = [...basketItems, { ...item, quantity: 1 }];
    setBasketItems(newBasketItems);
    sessionStorage.setItem('basketItems', JSON.stringify(newBasketItems));
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    const updatedItems = basketItems.map((basketItem) =>
      basketItem.id === itemId ? { ...basketItem, quantity: newQuantity } : basketItem,
    );
    setBasketItems(updatedItems);
    sessionStorage.setItem('basketItems', JSON.stringify(updatedItems));
  };

  const removeItemFromBasket = (itemId: number) => {
    const updatedItems = basketItems.filter((basketItem) => basketItem.id !== itemId);
    setBasketItems(updatedItems);
    sessionStorage.setItem('basketItems', JSON.stringify(updatedItems));
  };

  const contextValue = useMemo(
    () => ({
      basketItems,
      addItemToBasket,
      updateQuantity,
      removeItemFromBasket,
      totalCost,
    }),
    [basketItems, addItemToBasket, updateQuantity, removeItemFromBasket],
  );

  return <BasketContext.Provider value={contextValue}>{children}</BasketContext.Provider>;
};
