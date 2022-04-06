import React from 'react';
import '../css/decorate-block.css';
import { ThemeContext } from '../context';

function DecorateBlock() {
  const {theme} = React.useContext(ThemeContext);
  return (
    <div className='decorate-block' style={{backgroundColor: theme.background}}>
      <div className='decorate-block__info'>N</div>
      <div className='decorate-block__info'>F</div>
      <div className='decorate-block__info'>T</div>
    </div>
  );
}

export default DecorateBlock;
