import useBasketContext from '../../../hooks/useBasketContext';
import { WIRED_HEADPHONES, WIRELESS_HEADPHONES } from '../../../utils/constants';
import { IBasketItemsIdObject } from '../../../utils/interfaces';

import CatalogItem from '../../CatalogItem/CatalogItem';
import CatalogSection from '../../CatalogSection/CatalogSection';

const CatalogPage = () => {
  const { addItemToBasket, basketItems } = useBasketContext();

  const basketItemsIdObject: IBasketItemsIdObject = basketItems.reduce(
    (acc: IBasketItemsIdObject, item) => {
      acc[item.id] = true;
      return acc;
    },
    {},
  );

  return (
    <>
      <CatalogSection title="Наушники">
        {WIRED_HEADPHONES.map((item) => {
          return (
            <CatalogItem
              {...item}
              addItemToBasket={addItemToBasket}
              isItemInBasket={basketItemsIdObject[item.id]}
              key={item.id}
            />
          );
        })}
      </CatalogSection>
      <CatalogSection title="Беспроводные наушники">
        {WIRELESS_HEADPHONES.map((item) => {
          return (
            <CatalogItem
              {...item}
              addItemToBasket={addItemToBasket}
              isItemInBasket={basketItemsIdObject[item.id]}
              key={item.id}
            />
          );
        })}
      </CatalogSection>
    </>
  );
};

export default CatalogPage;
