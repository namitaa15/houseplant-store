import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './CartPage.css';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2>Your Cart 🛒</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty 😢</p>
        ) : (
          <>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ₹{totalPrice}</p>

            <div className="cart-list">
              {cartItems.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Price: ₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>

                    <button onClick={() => dispatch(increaseQty(item.id))}>➕</button>
                    <button onClick={() => dispatch(decreaseQty(item.id))}>➖</button>
                    <button onClick={() => dispatch(removeItem(item.id))}>❌ Delete</button>
                  </div>
                </div>
              ))}
            </div>

            <button className="checkout">Checkout 🛍️ (Coming Soon)</button>
            <Link to="/products">
              <button className="continue">Continue Shopping</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;