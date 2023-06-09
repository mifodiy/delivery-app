import { useSelector } from 'react-redux'

import CartItem from '../cartItem/CartItem'
import './cartList.scss'

const CartList = () => {
  const {items} = useSelector(state => state.cart)

  const elements = items.length>0 ? items.map(({id, ...props}) => {
    return <CartItem key={id} id={id} {...props}/>
  }) : <h3>Cart is Empty</h3>
  return (
    <div className="cart-list">
      <ul className="cart-list__items">
        {elements}
      </ul>
    </div>
  )
}

export default CartList