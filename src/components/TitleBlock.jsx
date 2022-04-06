import React from 'react';
import '../css/title-block.css';
import { ThemeContext, themes } from '../context';

function TitleBlock() {
  const {theme} = React.useContext(ThemeContext);
  console.log(theme);
  return (
    <div className='title-block' style={{backgroundColor: theme.background, color: theme.foreground}}>
      <div className='title-block__wrapper'>
        <h1 className='title-block__title' style={{color: theme.foreground}}>
          Home of <span className='title-block__decorate'>your</span> <span className='title-block__title-main visually-hidden'>NFT</span>
        </h1>
        <p className='title-block__text'>
          Art space and personaized home for showcasing your NFT's.
        </p>
        <button className='title-block__button' type='button' style={{backgroundColor: theme.foreground, color: theme.background}}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default TitleBlock;
