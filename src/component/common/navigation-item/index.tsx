import { Link } from 'react-router-dom';

interface Props {
  href: string;
  text: string;
}

const NavigationItem = ({ href, text }: Props) => {
  return (
    <li>
      <Link to={href}>{text}</Link>
    </li>
  );
};

export default NavigationItem;
