import React from 'react';
import '../css/title-block.css';

function TitleBlock() {
  return (
    <div className='title-block'>
      <div className='title-block__wrapper'>
        <h1 className='title-block__title'>
          Home of <span className='title-block__decorate'>your</span> <span className='title-block__title-main visually-hidden'>NFT</span>
        </h1>
        <p className='title-block__text'>
          Art space and personaized home for showcasing your NFT's.
        </p>
        <button className='title-block__button' type='button'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default TitleBlock;
