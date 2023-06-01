import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { changeActiveShop, fetchShops } from "./shopsSlice"
import ShopItem from "../shopItem/ShopItem"
import Spinner from "../spinner/Spinner"


import './shopsList.scss'

const ShopList = () => {
  const { shopsLoadingStatus} = useSelector(state => state.shops);
  const dispatch = useDispatch();
  const { shops } = useSelector(state => state.shops)
  const { processShop } = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(fetchShops())
    // eslint-disable-next-line
  }, [])

  const onChangeShop = (id) => {
    if (!processShop) {
      dispatch(changeActiveShop(id));
    }
  }

  if (shopsLoadingStatus === "loading") {
    return <Spinner />;
  } else if (shopsLoadingStatus === "error") {
    return <h5 className="error">Ошибка загрузки</h5>
  }

  const elements = shops.map(item => {
    return <ShopItem key={item.id} name={item.name} id={item.id} onChangeShop={onChangeShop} />
  })

  return (
    <div className="shop">
      <h2 className="shop__title">Shops</h2>
      <ul className="shop__list">
        {elements}
      </ul>
    </div>

  )
}

export default ShopList