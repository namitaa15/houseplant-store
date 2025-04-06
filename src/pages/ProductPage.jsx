import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useState } from 'react';
import './ProductPage.css';

const plantList = [
  { id: 1, name: "Snake Plant", price: 299, category: "Air Purifying", image: "/snake.jpg" },
  { id: 2, name: "Peace Lily", price: 349, category: "Flowering", image: "/lily.jpg" },
  { id: 3, name: "Aloe Vera", price: 199, category: "Medicinal", image: "/aloe.jpg" },
  { id: 4, name: "Spider Plant", price: 179, category: "Air Purifying", image: "/spider.jpg" },
  { id: 5, name: "Money Plant", price: 249, category: "Indoor", image: "/money.jpg" },
  { id: 6, name: "Areca Palm", price: 399, category: "Indoor", image: "/areca.jpg" },
];

function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setDisabledButtons([...disabledButtons, plant.id]);
  };

  const groupedPlants = plantList.reduce((acc, plant) => {
    if (!acc[plant.category]) acc[plant.category] = [];
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <>
    <Header />
    <div className="product-page">
      {Object.keys(groupedPlants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="plant-list">
            {groupedPlants[category].map((plant) => (
              <div className="card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>
                <button
                  disabled={disabledButtons.includes(plant.id)}
                  onClick={() => handleAdd(plant)}
                >
                  {disabledButtons.includes(plant.id) ? "Added ✅" : "Add to Cart 🛒"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default ProductPage;
