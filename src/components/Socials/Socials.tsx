import './Socials.scss';

import { SOCIALS } from '../../utils/constants';
import Icon from '../Icon/Icon';

const Socials = () => {
  return (
    <ul className="socials">
      {SOCIALS.map(({ icon, link }) => (
        <li className="socials-item" key={icon}>
          <a href={link} target="__blank">
            <Icon name={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
