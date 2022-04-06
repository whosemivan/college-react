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
import { useForm } from 'react-hook-form';
import { ThemeContext, themes } from '../context';

function App() {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  });

  const [theme, setTheme] = React.useState(themes.light);

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>

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
              <form onSubmit={handleSubmit(onSubmit)} style={{backgroundColor: theme.background, color: theme.foreground, display: 'flex', justifyContent: 'center', height: 100}}>
                <input {...register('firstName', { required: true })} type="text" />
                <input type="submit" />
              </form>
              <div>
                {errors?.firstName && <p>Form is important</p>}
              </div>
            </>
          } />
          <Route exect path="/contacts" element={<Contacts />} />
          <Route exect path="/login" element={<LogIn />} />
          <Route exect path="/signup" element={<SignUp />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
