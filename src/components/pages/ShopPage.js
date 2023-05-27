import ShopList from "../shopsList/ShopsList"
import ProductList from "../productList/ProductList"

const ShopPage = () => {
  return (
    <div className='shop__wrapper'>
      <ShopList />
      <ProductList />
    </div>
  )
}

export default ShopPage