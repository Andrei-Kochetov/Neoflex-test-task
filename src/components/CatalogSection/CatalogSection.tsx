import './CatalogSection.scss';

import { ICatalogSection } from '../../utils/interfaces';

const CatalogSection = ({ title, children }: ICatalogSection) => {
  return (
    <section className="catalog-section">
      <h2 className="catalog-section__title">{title}</h2>
      <div className="catalog-section__items-wrapper">{children}</div>
    </section>
  );
};

export default CatalogSection;
