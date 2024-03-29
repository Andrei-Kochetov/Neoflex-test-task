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
}
export interface ICatalogSection {
  title: string;
  children: ReactNode;
}
