import { WIRED_HEADPHONES, WIRELESS_HEADPHONES } from '../../../utils/constants';

import CatalogItem from '../../CatalogItem/CatalogItem';
import CatalogSection from '../../CatalogSection/CatalogSection';

const CatalogPage = () => {
  return (
    <>
      <CatalogSection title="Наушники">
        {WIRED_HEADPHONES.concat(WIRED_HEADPHONES).map((item, index) => {
          return <CatalogItem {...item} key={index} />;
        })}
      </CatalogSection>
      <CatalogSection title="Беспроводные наушники">
        {WIRELESS_HEADPHONES.map((item, index) => {
          return <CatalogItem {...item} key={index} />;
        })}
      </CatalogSection>
    </>
  );
};

export default CatalogPage;
