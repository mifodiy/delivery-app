import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from '../header/Header';
import ProductList from '../productList/ProductList';
import ShopList from '../shopsList/ShopsList';
import './App.scss';
import ShopPage from "../pages/ShopPage";

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
      </Suspense>

    </div>
    </Router>
  );
}

export default App;
