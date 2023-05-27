import mongoose from 'mongoose';

const itemOrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  store: {
    type: String,
    required: true
  },
});

const orderSchema = new mongoose.Schema({
  order: {
    type: [itemOrderSchema],
    required: true
  },
  clientInfo: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: false
    },
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
