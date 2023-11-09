import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__header_info'>
      <SubHeading title="Potato fun in a new way" />
      <h1 className='app__header-h1'>The key to eating delicious potatoes</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium enim perferendis ipsum distinctio nemo consectetur corrupti perspiciatis ex minus, consequuntur exercitationem excepturi delectus odio quo, blanditiis corporis possimus aut.</p>
      <button type="button" className='custom__button'>Explore More</button>
    </div>

    <div className='app__header_img'>
      <img src={images.welcome} alt='welcom' />
    </div>
  </div>
);

export default Header;
