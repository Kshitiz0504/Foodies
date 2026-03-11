import React from 'react';
import Mainpage from './Components/Mainpage/Mainpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipe from './Components/Recipe/Recipe'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage />}/>
        <Route path='/:mealid' element={<Recipe/>}/>
      </Routes>
      </BrowserRouter>
      
    
   </div>
  )
}

export default App;
