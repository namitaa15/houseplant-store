import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage'; // ✅ Make sure you created this too

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* ✅ Needed for Cart */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

