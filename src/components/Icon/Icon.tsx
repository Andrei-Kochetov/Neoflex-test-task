import './Icon.scss';

import { IIcon } from '../../utils/interfaces';

function Icon({ name, className = '' }: IIcon) {
  return (
    <svg className={`icon icon-${name} ${className}`}>
      <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#${name}`} />
    </svg>
  );
}

export default Icon;
