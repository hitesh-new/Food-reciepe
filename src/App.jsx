import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import { useState } from 'react';
import { createContext } from 'react';
export const cartContext = createContext();

function App() {
  const [cart,setCart] = useState([])

  return (
    <>
      <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
        <Header cart={cart}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </BrowserRouter>
      </cartContext.Provider>
    </>
  );
}

export default App;
