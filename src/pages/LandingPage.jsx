import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
    <Header />
    <div className="landing">
      <div className="overlay">
        <h1 className="title">🌿 GreenNest</h1>
        <p className="description">
          Welcome to GreenNest – your one-stop houseplant store! 🪴  
          Breathe life into your space with handpicked indoor beauties.  
          Eco-friendly. Budget-friendly. Heart-friendly. 💚
        </p>
        <button onClick={() => navigate('/products')}>Get Started</button>
      </div>
    </div>
    </>
  );
}

export default LandingPage;