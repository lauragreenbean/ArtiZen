import React from 'react';
import Triangle from './components/triangle';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
   <div>
    <Header/>
    <p>This is a Triangle</p>
    <Triangle/>
    <Footer/>
   </div>
  );
}

export default App;
