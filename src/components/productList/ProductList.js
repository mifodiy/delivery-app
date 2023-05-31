import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import ProductItem from "../productItem/ProductItem"

import './productList.scss'

const ProductList = () => {
  const {activeShop, shops, shopsLoadingStatus} = useSelector(state => state.shops, shallowEqual);
  const menu = shops.length > 1 ? shops.filter(item => item.id === activeShop)[0].menu : []
  
  useEffect(() => {
    renderProductList(menu)
  },[activeShop])

  const renderProductList = (menu) => {
    return menu.map(({id, ...props}) => {
      return <ProductItem key={id} id={id} {...props}/>
    })
  }

  const elements = shopsLoadingStatus==='loading'? <h5>Loading...</h5> : renderProductList(menu)
  return (
    <ul className="product-list">
      {elements}
    </ul>
  )
}

export default ProductList