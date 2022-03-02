import React from 'react';
import '../css/main-screen.css';

function MainScreen(props) {
  return (
    <section className='main-screen'>
        {props.children}
    </section>
  );
}

export default MainScreen;
