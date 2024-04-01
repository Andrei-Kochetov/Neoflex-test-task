import { ReactNode } from 'react';

export interface IIcon {
  name: string;
  className?: string;
  size?: number;
}

export interface ISocialItem {
  icon: string;
  link: string;
}

export interface ICatalogItem {
  title: string;
  price: number;
  discountPrice?: number;
  rate: number;
  img: string;
  id: number;
}

export interface ICatalogSection {
  title: string;
  children: ReactNode;
}

export interface IBasketItem extends Omit<ICatalogItem, 'rate'> {
  quantity: number;
}

export interface IBasketProvider {
  children: ReactNode;
}

export interface IBasketContext {
  basketItems: IBasketItem[];
  addItemToBasket: (item: IBasketItem) => void;
  updateQuantity: (itemId: number, newQuantity: number) => void;
  removeItemFromBasket: (itemId: number) => void;
}

export interface IBasketItemProps
  extends IBasketItem,
    Pick<IBasketContext, 'updateQuantity' | 'removeItemFromBasket'> {}

export interface ICatalogItemProps extends ICatalogItem, Pick<IBasketContext, 'addItemToBasket'> {
  isItemInBasket: boolean;
}

export interface IBasketItemsIdObject {
  [itemId: number]: boolean;
}
