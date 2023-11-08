import React, { useState } from 'react';
import './Navbar.css';
import images from '../../constants/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.chefLogo} />
      </div>

      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#gallery'>Gallery</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
        <li className='p__opensans'><a href='#chef'>Chef Rafaels</a></li>
      </ul>


      <div className='app__navbar-smallScreen'>
        <GiHamburgerMenu color='#fff' className='x' size={27}
          onClick={() => setToggleMenu(true)} />
        {
          toggleMenu && (
            <div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu color='#fff' size={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen-links'>
                <li className='p__opensans'><a href='#home'>Home</a></li>
                <li className='p__opensans'><a href='#about'>About</a></li>
                <li className='p__opensans'><a href='#gallery'>Gallery</a></li>
                <li className='p__opensans'><a href='#contact'>Contact</a></li>
                <li className='p__opensans'><a href='#chef'>Chef Rafaels</a></li>
              </ul>
            </div>
          )}
      </div>
    </nav>

  )
}

export default Navbar;
