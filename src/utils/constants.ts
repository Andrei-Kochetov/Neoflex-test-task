import { ICatalogItem, ISocialItem } from './interfaces';

export const SOCIALS: ISocialItem[] = [
  {
    icon: 'vk',
    link: 'https://vk.com/',
  },
  {
    icon: 'telegram',
    link: 'https://web.telegram.org/',
  },
  {
    icon: 'whatsapp',
    link: 'https://www.whatsapp.com/?lang=ru_RU',
  },
];

export const WIRED_HEADPHONES: ICatalogItem[] = [
  {
    title: 'Apple BYZ S852I',
    price: 3527,
    discountPrice: 2927,
    rate: 4.7,
    img: `${process.env.PUBLIC_URL}/images/appleS852I.png`,
    id: 1,
  },
  {
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    img: `${process.env.PUBLIC_URL}/images/earpods1.png`,
    id: 2,
  },
  {
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    img: `${process.env.PUBLIC_URL}/images/earpods2.png`,
    id: 3,
  },
  {
    title: 'Apple BYZ S852I',
    price: 3527,
    discountPrice: 2927,
    rate: 4.7,
    img: `${process.env.PUBLIC_URL}/images/appleS852I.png`,
    id: 4,
  },
  {
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    img: `${process.env.PUBLIC_URL}/images/earpods1.png`,
    id: 5,
  },
  {
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    img: `${process.env.PUBLIC_URL}/images/earpods2.png`,
    id: 6,
  },
];

export const WIRELESS_HEADPHONES: ICatalogItem[] = [
  {
    title: 'Apple AirPods',
    price: 9527,
    rate: 4.7,
    img: `${process.env.PUBLIC_URL}/images/airpods.png`,
    id: 7,
  },
  {
    title: 'GERLAX GH-04',
    price: 6527,
    rate: 4.7,
    img: `${process.env.PUBLIC_URL}/images/gerlaxGH-04.png`,
    id: 8,
  },
  {
    title: 'BOROFONE BO4',
    price: 7527,
    rate: 4.7,
    img: `${process.env.PUBLIC_URL}/images/borofoneB04.png`,
    id: 9,
  },
];
