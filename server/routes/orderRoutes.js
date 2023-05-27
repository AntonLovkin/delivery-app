import express from 'express';
import * as dotenv from 'dotenv';

import Order from '../mongodb/models/order.js';

dotenv.config();

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching orders failed, please try again' });
  }
});

router.route('/').post(async (req, res) => {
  try {
    const data = req.body

    const newOrder = await Order.create(data);

    res.status(200).json({ success: true, data: newOrder });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a order, please try again' });
  }
});

export default router;