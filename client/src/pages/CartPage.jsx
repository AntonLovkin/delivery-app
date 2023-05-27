import { useNavigate } from 'react-router-dom';

import {FormField} from '../components'

function CartPage({
  cartItems,
  incrementItem,
  decrementItem,
  deleteCartItem,
  totalPrice,
  orderSubmit,
  formData,
  setFormData
}) {

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    orderSubmit(e, formData)
    navigate('/')
  };
      
  return (
    <div className='cart'>
      <div>
        <ul className='cart_list'>
          {cartItems.map(el => (
            <li className='cart_item' key={el._id}>
              <h5>{el.name}</h5>
              <h5>From: {el.store}</h5>
              <span>{el.price}$</span>
              <button onClick={() => { incrementItem(el.id) }}>+</button>
              <span>{el.quantity}</span>
              <button onClick={() => { decrementItem(el.id) }}>-</button>
              <button onClick={() => { deleteCartItem(el.id) }}>remove</button>
            </li>
          ))}
        </ul>
        {!!totalPrice && <span className='totalPrice'>Total price: {totalPrice}$</span>}
      </div>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <FormField
          labelName="Name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          handleChange={handleChange}
          required={true}
        />
        <FormField
          labelName="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          handleChange={handleChange}
          required={true}
        />
        <FormField
          labelName="Phone"
          type="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          handleChange={handleChange}
          required={true}
        />
        <FormField
          labelName="Address"
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          handleChange={handleChange}
          required={false}
        />
        <button type='submit' disabled={cartItems?.length > 0 ? false : true}>Submit</button>
      </form>
    </div>
  );
}

export default CartPage