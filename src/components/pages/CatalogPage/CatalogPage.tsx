import { WIRED_HEADPHONES, WIRELESS_HEADPHONES } from '../../../utils/constants';

import CatalogItem from '../../CatalogItem/CatalogItem';
import CatalogSection from '../../CatalogSection/CatalogSection';

const CatalogPage = () => {
  return (
    <>
      <CatalogSection title="Наушники">
        {WIRED_HEADPHONES.map((item) => {
          return <CatalogItem {...item} key={item.id} />;
        })}
      </CatalogSection>
      <CatalogSection title="Беспроводные наушники">
        {WIRELESS_HEADPHONES.map((item) => {
          return <CatalogItem {...item} key={item.id} />;
        })}
      </CatalogSection>
    </>
  );
};

export default CatalogPage;
