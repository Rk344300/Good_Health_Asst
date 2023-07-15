
import './App.css';
import { Body, Carosuels, Header, Navbar, SkinHair, Wellness } from './components';



function App() {
  return (
    <div className="App">
       <Navbar />
       <Header/>
       <Body/>
       <Wellness />
       <SkinHair />
      <Carosuels/>
    </div>
  );
}

export default App;
