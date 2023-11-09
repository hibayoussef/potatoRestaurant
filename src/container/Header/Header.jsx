import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Potato fun in a new way" />
      <h1 className='app__header-h1'>The key to eating delicious potatoes</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Taste the most delicious potato dishes that were made in a new way and shape,
        with different dishes and new flavors, and with 24-hour service. We receive your requests and meet you.
      </p>
      <button type="button" className='custom__button'>Explore More</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='welcom' />
    </div>
  </div>
);

export default Header;
