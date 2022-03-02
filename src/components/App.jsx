import React from 'react';
import DecorateBlock from './DecorateBlock';
import Header from './Header';
import MainScreen from './MainScreen';
import TitleBlock from './TitleBlock';
import ContentBlock from './ContentBlock';

function App() {
  return (
    <>
      <Header/>
      <MainScreen>
        <TitleBlock/>
        <DecorateBlock/>
      </MainScreen>
      <ContentBlock/>
    </>
  );
}

export default App;
