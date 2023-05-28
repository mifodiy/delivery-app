import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from '../header/Header';
import './App.scss';
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";

function App() {
  console.log('render APP')
  return (
    <Router>
      <div className="app">
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<ShopPage/>}/>
        </Routes>
        <Routes>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </Suspense>

    </div>
    </Router>
  );
}

export default App;
