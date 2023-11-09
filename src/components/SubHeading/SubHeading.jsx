import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div className='p__cormorant'>
    <p>
      {title}
    </p>

    <img src={images.spoon} alt='spoon' className='spoon__img' />
  </div>
);

export default SubHeading;
