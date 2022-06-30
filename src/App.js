import logo from './logo.svg';
import './App.scss';

import {useEffect} from "react";

import HeaderNav from './Components/HeaderNav';
import { hoverShop } from './Services/interaction.js';


function App() {

  useEffect(() =>{
    hoverShop();
  }, [])

  return (
    <div className="App">
      <HeaderNav />
    </div>
  );

}

export default App;
