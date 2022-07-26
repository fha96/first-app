import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './Main';
import SelectedBeast from './bootstrapComp/SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      showValue: false
    }
  }
  render(){
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
}

export default App;
