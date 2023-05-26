const ShopItem = ({name, id, onChangeShop}) => {
  return (
    <li className="shop__item" onClick={() => onChangeShop(id)}>
      {name}
    </li>
  )
}

export default ShopItem