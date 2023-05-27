import OrderSchema from "../mongodb/models/order.js";

export const getOrders = async (req, res) => {
    try {
        const orders = await OrderSchema.find();
        res.send(200).json(orders)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
};

export const createOrder = async (req, res) => {
    const body = req.body;

    const newOrder = new OrderSchema(post);

    try {
        await newOrder.save();

        res.status(201).json(newOrder);
        
    } catch (error) {
        res.status(409).json({message:error.message})
    }
};