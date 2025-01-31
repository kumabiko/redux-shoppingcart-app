import { useDispatch, useSelector } from "react-redux"
import { cartItems } from "../cartItems"
import CartItem from "./CartItems"

export const CartContainer = () => {
  const dispatch = useDispatch()
  const { total, amount } = useSelector(store => store.cart)
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入ってません・・・(´;ω;｀)</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map(item => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計 <span>{total}円</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          全削除
        </button>
      </footer>
    </section>
  )
}
