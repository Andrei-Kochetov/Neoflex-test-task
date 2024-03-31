import { useContext } from 'react';
import { BasketContext } from '../contexts/BasketProvider';

export const useBasketContext = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error(
      'BasketContext is used in a component that is not equipped with a BasketProvider',
    );
  }
  return context;
};
