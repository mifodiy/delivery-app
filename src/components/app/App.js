import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from '../header/Header';
import './App.scss';
const ShopPage = lazy(() => import("../pages/ShopPage"));
const CartPage =lazy(() => import("../pages/CartPage"));


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<ShopPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </Suspense>

    </div>
    </Router>
  );
}

export default App;
