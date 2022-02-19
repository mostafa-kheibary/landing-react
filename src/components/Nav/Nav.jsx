import './Nav.css';
import { useState } from 'react';
import Button from '../Button/Button';
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const handletoggle = () => {
    setToggle(!toggle);
  };
  const Menu = () => {
    return (
      <ul className='nav'>
        <li className='nav__item'>Marketplace</li>
        <li className='nav__item'>Packs</li>
        <li className='nav__item'>Metaverse</li>
        <li className='nav__item'>Yesp Token</li>
      </ul>
    );
  };

  return (
    <>
      <nav className='nav-container'>
        <Menu />
        <Button arrow={true}>Connect</Button>
      </nav>
      <nav className='mobile-nav'>
        <button
          onClick={handletoggle}
          className='fa-solid fa-bars mobile-nav-icon'
        ></button>
        <div className={`mobile-nav-wrapper ${toggle === true && 'show'}`}>
          <Menu />
          <Button arrow={true}>Connect</Button>
        </div>
      </nav>
    </>
  );
};
export default Nav;
