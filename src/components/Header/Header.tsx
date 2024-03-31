import './Header.scss';

import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { useBasketContext } from '../../hooks/useBasketContext';

const Header = () => {
  const { basketItems } = useBasketContext();
  return (
    <div className="header container">
      <Link to="/">
        <Icon name="logo" />
      </Link>
      <div className="header__icons-wrapper">
        <Link to="/favorites">
          <Icon name="favorites" />
        </Link>
        <Link to="/basket">
          <Icon name="basket" />
          <span className="header__basket-count">{basketItems.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
