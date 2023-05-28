import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { HomePage, CartPage } from './pages';

import './App.css';

function App() {

  const [stores, setStores] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (id) => {
    if (cartItems.find(el => el._id === id)) return;
    let meal = undefined;
    const store = stores.find(store => meal = store.meals.find(meal => meal._id === id));
    setCartItems([...cartItems, (meal.quantity = 1, meal.store = store.title, meal)]);
  };

  const incrementItem = (id) => {
    setCartItems(cartItems.map(el =>
      el.id === id
        ? (el.quantity += 1, el)
        : el));
  };

  const decrementItem = (id) => {
    setCartItems(cartItems.map(el =>
      el.id === id
        ? (el.quantity > 0 ? (el.quantity -= 1, el) : el)
        : el));
  };

  const deleteCartItem = (id) => {
    setCartItems(cartItems.filter(el => el.id !== id))
  };

  const totalPrice = cartItems.reduce((sum, el) => sum += el.price * el.quantity, 0);

  const fetchStores = async () => {
    try {
      const response = await fetch('https://delivery-app-vujf.onrender.com/api/v1/stores', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setStores(result.data);
      }
    } catch (err) {
      alert(err);
    }
  };
  
  useEffect(() => {
    setTimeout(() => {
      fetchStores();
    }, 2000);
  }, []);

  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e, formData ) => {
    e.preventDefault();

      try {
        const response = await fetch('https://delivery-app-vujf.onrender.com/api/v1/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({order: cartItems, formData}),
        });

        await response.json();
        alert(JSON.stringify({order: cartItems, formData}));
        setCartItems([]);
        setFormData(initialFormData)

      } catch (err) {
        alert(err);
      } 
  };

  return (
    <BrowserRouter>
      <header className='header'>
        <Link to="/"><button>Shop</button></Link>
        <Link to="/cart"><button>Cart</button></Link>
      </header>

      <Routes>
        <Route path='*'
          element={
            <HomePage
              state={stores}
              addCartItem={addCartItem}
            />}
        />
        <Route path='/cart'
          element={
            <CartPage
              cartItems={cartItems}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              deleteCartItem={deleteCartItem}
              totalPrice={totalPrice}
              orderSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
            />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App
