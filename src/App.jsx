import React from 'react';
import { useEffect, useState } from 'react'
import './App.scss'
import { NavBar, Item, ItemCount, ItemListContainer } from './components'
import { Detail} from './pages/Detail';
import { Home} from './pages/Home';


function App() {
  const handleCart = (qty) => {
    console.log("La cantidad es", qty);
  };

  return (
    <div>
      <NavBar/>
      { <Home />}
    </div>
  )
}

export default App
