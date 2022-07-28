import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import React from 'react';
import SelectedBeast from './bootstrapComp/SelectedBeast';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      allBeast: data,
      beastSelect:{},
      displayModal:false
    }

  }
  showModal=(beast)=>{
    this.setState({
      displayModal:true,
      beastSelect:beast
    })

  }
handleClose=()=>{
  this.setState({
    displayModal:false
  })
}

render(){
  return (
    <div className="App">
      <Header />
      <Main data={this.state.allBeast} showModal={this.showModal}/>
      <SelectedBeast show={this.state.displayModal}  handleClose={this.handleClose} beastS={this.state.beastSelect} />
      <Footer />
    </div>
  );
}
}

export default App;
