import React from 'react';
import DecorateBlock from './DecorateBlock';
import Header from './Header';
import MainScreen from './MainScreen';
import TitleBlock from './TitleBlock';
import ContentBlock from './ContentBlock';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './Contacts';
import NotFound from './NotFound';
import SignUp from './SignUp';
import LogIn from './LogIn';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exect path="/" element={
            <>
              <MainScreen>
                <TitleBlock />
                <DecorateBlock />
              </MainScreen>
              <ContentBlock />
            </>
          } />
          <Route exect path="/contacts" element={<Contacts />}/>
          <Route exect path="/login" element={<LogIn />}/>
          <Route exect path="/signup" element={<SignUp />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
