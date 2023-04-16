import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Canvas from './components/Canvas';

function App() {
  return (
   <div>
        <div id="header"><Header/></div>

     <div id= "canvas"> 
    <Canvas/> 
    </div>
    
   
   
    <div>
    <Footer/>
    </div>
   </div>

  );
}
export default App;

