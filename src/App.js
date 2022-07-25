import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './Main';
import NewCard from './bootstrapComp/card'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
