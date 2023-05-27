import express from 'express';
import * as dotenv from 'dotenv';

import Store from '../mongodb/models/store.js';

dotenv.config();

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const stores = await Store.find({});
    res.status(200).json({ success: true, data: stores });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching stores failed, please try again' });
  }
});

export default router;