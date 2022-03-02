import React from 'react';
import DecorateBlock from './DecorateBlock';
import Header from './Header';
import MainScreen from './MainScreen';
import TitleBlock from './TitleBlock';

function App() {
  return (
    <>
      <Header/>
      <MainScreen>
        <TitleBlock/>
        <DecorateBlock/>
      </MainScreen>
    </>
  );
}

export default App;
