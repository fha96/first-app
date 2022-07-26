import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './Main';
import SelectedBeast from './bootstrapComp/SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function App(){

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
