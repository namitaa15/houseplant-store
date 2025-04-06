import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className="header">
      <Link to="/" className="logo">🌿 GreenNest</Link>

      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart <span className="count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;