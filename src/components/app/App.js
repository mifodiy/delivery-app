
import Header from '../header/Header';
import ProductList from '../productList/ProductList';
import ShopList from '../shopsList/ShopsList';
import './App.scss';

function App() {
  console.log('render APP')
  return (
    <div className="app">
      <Header />
      <div className='app__wrapper'>
        <ShopList />
        <ProductList />
      </div>

    </div>
  );
}

export default App;
