import CartForm from "../cartForm/CartForm"
import CartList from "../cartList/CartList"


const CartPage = () => {
  return (
    <div className="cart__wrapper" style={{display: 'flex'}}>
      <CartList />
      <CartForm />
    </div>

  )
}

export default CartPage