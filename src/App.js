import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DrawingMode1 from './pages/DrawingMode1';
import DrawingMode2 from './pages/DrawingMode2';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <div>
      
      <Router>
      <Header/>
      <Routes>

      <Route exact path="/" element={<DrawingMode1/>}/>
      <Route exact path="/DrawingMode2" element={<DrawingMode2/>}/>
      </Routes> 
      </Router>
       <Footer/>
    </div>
    
  );
}

export default App;