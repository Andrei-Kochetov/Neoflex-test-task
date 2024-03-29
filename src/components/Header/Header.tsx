import './Header.scss';

import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

const Header = () => {
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
        </Link>
      </div>
    </div>
  );
};

export default Header;
