const express = require("express");
const {User} = require("../Models/user.model")
const {Restaurant} = require("../Models/restaurant.model")
const { Order } = require("../Models/order.model");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const OrderRouter = express.Router();

OrderRouter.get("/orders", async (req,res) => {
    const rest = await Order.find()
    res.send(rest);
})

// Place an order

OrderRouter.post('/orders',  async (req, res) => {
  try {
    const { user, restaurant, items, totalPrice, deliveryAddress } = req.body;

    const order = new Order({
      user,
      restaurant,
      items,
      totalPrice,
      deliveryAddress,
      status: "placed",
    });

    await order.save();

    const populatedOrder = await Order.findById(order._id)
      .populate("user", "-password")
      .populate("restaurant")
      .exec();

    res.status(201).json(populatedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

  
// Get a specific order by ID
OrderRouter.get('/orders/:id', async (req, res) => {
    try {
      const order = await Order.findById(req.params.id)
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve order' });
    }
  });
  
  //update status of delivery
  OrderRouter.patch('/orders/:id', async (req, res) => {
    try {
      const { status } = req.body;
      const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update order status' });
    }
  });

module.exports={
    OrderRouter
}