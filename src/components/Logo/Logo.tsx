import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

const Logo = () => {
  return (
    <Link to="/">
      <Icon name="logo" />
    </Link>
  );
};

export default Logo;
