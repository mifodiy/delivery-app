import CartList from "../cartList/CartList"
import Counter from "../counter/Counter"

const CartPage = () => {
  return (
    <>
    <CartList/>

<Counter amount={0}/>
    </>
    
  )
}

export default CartPage