import React from 'react';
import Triangle from './components/triangle';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/js/bootstrap.js';
import  PopUp from './components/PopUp';
function App() {
  return (
   <div>
    <Header/>
    <PopUp/>
    <p>This is a Triangle</p>
    <Triangle/>
    <Footer/>
   </div>
  );
}

export default App;
