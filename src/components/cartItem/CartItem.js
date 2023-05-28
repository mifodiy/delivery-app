import { useSelector, useDispatch } from "react-redux";
import Counter from "../counter/Counter";
import {decCount, incCount, removeItem} from '../cartList/cartSlice'

const CartItem = ({title, url, price, count, id}) => {
  const dispatch = useDispatch();

  console.log(id);

  const onIncriment = () => {
    dispatch(incCount(id));
  }

  const onDecrement = () => {
    dispatch(decCount(id));
  }

  const onRemove = () => {
    dispatch(removeItem(id));
  }
  
  
  return (
    <li className="cart-list__item">
      <img className="cart-list__img" src={url} alt={title}/>
      <div className="cart-list__box">
        <h3 className="cart-list__title">{title}</h3>
        <span className="cart-list__price">Price: {price}$</span>
        <Counter amount={count} inc={onIncriment} dec={onDecrement}/>
      </div>
      <button className='btn-close cart-list__btn' onClick={onRemove}/>
    </li>
  )
}

export default CartItem;