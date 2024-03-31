import './Footer.scss';

import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon';
import Socials from '../Socials/Socials';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <div className="footer container">
      <Logo />
      <div className="footer__links-wrapper">
        <Link to="/favorites" className="footer__link">
          Избранное
        </Link>
        <Link to="/basket" className="footer__link">
          Корзина
        </Link>
        <Link to="/contacts" className="footer__link">
          Контакты
        </Link>
      </div>
      <div className="footer__terms-language-wrapper">
        <Link to="/terms-of-service" className="footer__link">
          Условия сервиса
        </Link>
        <div className="footer__language-wrapper">
          <Icon name="language" />
          <p>Рус</p>
          <p>Eng</p>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Footer;
