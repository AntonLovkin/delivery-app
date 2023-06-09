import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import orderRoutes from './routes/orderRoutes.js';
import storeRoutes from './routes/storeRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/stores', storeRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from Anton',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();