import { useEffect } from "react"
import { useDispatch, useSelector,shallowEqual } from 'react-redux'

import { changeActiveShop, fetchShops } from "./shopsSlice"
import ShopItem from "../shopItem/ShopItem"


import './shopsList.scss'

const ShopList = () => {
  const dispatch = useDispatch();
  const {shops} = useSelector(state => state.shops)


  useEffect(() => {
    console.log('useEffect')
    dispatch(fetchShops())
  },[])

  const onChangeShop = (id) => {
    dispatch(changeActiveShop(id));
  }

  const elements = shops.map(item => {
    return <ShopItem key={item.id} name={item.name} id={item.id} onChangeShop={onChangeShop}/>
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