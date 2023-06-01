import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import ProductItem from "../productItem/ProductItem"
import Spinner from "../spinner/Spinner"

import './productList.scss'

const ProductList = () => {
  const { activeShop, shops, shopsLoadingStatus } = useSelector(state => state.shops);
  const menu = shops.length > 1 ? shops.filter(item => item.id === activeShop)[0].menu : []

  useEffect(() => {
    renderProductList(menu)
    // eslint-disable-next-line
  }, [activeShop])

  if (shopsLoadingStatus === "loading") {
    return <Spinner />;
  } else if (shopsLoadingStatus === "error") {
    return <h5 className="error">Ошибка загрузки</h5>
  }

  const renderProductList = (menu) => {
    return menu.map(({ id, ...props }) => {
      return <ProductItem key={id} id={id} {...props} />
    })
  }

  const elements = renderProductList(menu)
  return (
    <ul className="product-list">
      {elements}
    </ul>
  )
}

export default ProductList