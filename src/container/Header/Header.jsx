import { Nav, Search } from '../../components';
import logo from '../../assets/logo.svg';
import './Header.css';
const Header = () => {
  return (
    <header>
      <div className='header__brand'>
        <img src={logo} alt='logo' className='header__brand_logo' />
        <Search />
      </div>
      <div className='header__menu'>
        <Nav />
      </div>
    </header>
  );
};
export default Header;
