import React from 'react';
import HeaderContainer from './misc/header_container';
import Footer from './misc/footer';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    {children}
    <Footer/>
  </div>
);

export default App;
