import mongoose from 'mongoose';

const subStoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

const storeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  meals: {
    type: [subStoreSchema],
    required: true
  }
});

const Store = mongoose.model('Store', storeSchema);

export default Store;
