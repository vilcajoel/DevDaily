import React, { useEffect } from 'react';
import './css/App.css';
import { BrowserRouter, Redirect, Route, useLocation } from 'react-router-dom'
import Login from './Login'
import Signin from './Signin'
import Main from './Main'
import { Inicio } from './Inicio';
import { AboutUs } from './AboutUs';

const ScrollToTop = () =>{
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <BrowserRouter>
      <ScrollToTop />
      <Route exact path="/inicio" component={Inicio} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/signin" component={Signin} />
      <Route path="/main" component={Main} />
      <Redirect to = "/inicio"/>
  </BrowserRouter>
)
export default App;
