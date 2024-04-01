import { createContext, useState, useEffect, useMemo, useCallback } from 'react';

import { IBasketContext, IBasketItem, IBasketProvider } from '../utils/interfaces';

export const BasketContext = createContext<IBasketContext>({
  basketItems: [],
  addItemToBasket: () => {},
  updateQuantity: () => {},
  removeItemFromBasket: () => {},
});

export const BasketProvider = ({ children }: IBasketProvider) => {
  const [basketItems, setBasketItems] = useState<IBasketItem[]>([]);

  useEffect(() => {
    const storageItems = JSON.parse(sessionStorage.getItem('basketItems') || '[]');
    if (storageItems.length) setBasketItems(storageItems);
  }, []);

  const addItemToBasket = useCallback((item: IBasketItem) => {
    setBasketItems((prevBasketItems) => {
      const isItemInBasket = prevBasketItems.some((basketItem) => basketItem.id === item.id);

      if (isItemInBasket) return prevBasketItems;

      const newBasketItems = [...prevBasketItems, { ...item, quantity: 1 }];

      sessionStorage.setItem('basketItems', JSON.stringify(newBasketItems));

      return newBasketItems;
    });
  }, []);

  const updateQuantity = useCallback((itemId: number, newQuantity: number) => {
    setBasketItems((prevBasketItems) => {
      const updatedBasketItems = prevBasketItems.map((basketItem) =>
        basketItem.id === itemId ? { ...basketItem, quantity: newQuantity } : basketItem,
      );

      sessionStorage.setItem('basketItems', JSON.stringify(updatedBasketItems));

      return updatedBasketItems;
    });
  }, []);

  const removeItemFromBasket = useCallback((itemId: number) => {
    setBasketItems((prevBasketItems) => {
      const updatedItems = prevBasketItems.filter((basketItem) => basketItem.id !== itemId);

      sessionStorage.setItem('basketItems', JSON.stringify(updatedItems));

      return updatedItems;
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      basketItems,
      addItemToBasket,
      updateQuantity,
      removeItemFromBasket,
    }),
    [basketItems, addItemToBasket, updateQuantity, removeItemFromBasket],
  );

  return <BasketContext.Provider value={contextValue}>{children}</BasketContext.Provider>;
};
