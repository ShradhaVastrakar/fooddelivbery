const express = require("express");
const { Restaurant } = require("../Models/restaurant.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const RestaurantRouter = express.Router();

RestaurantRouter.get("/restaurants", async (req,res) => {
    const rest = await Restaurant.find()
    res.send(rest);
})

// post a new restaurant
RestaurantRouter.post('/restaurants', async (req, res) => {
    try {
      const { name, address, menu } = req.body;
      const restaurant = new Restaurant({ name, address, menu });
      await restaurant.save();
      res.status(201).json({ message: 'Restaurant created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create restaurant' });
    }
  });



  // Get a specific restaurant by ID
  RestaurantRouter.get('/restaurants/:id', async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id);
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve restaurant' });
    }
  });

  // Get the menu of a specific restaurant by ID
  RestaurantRouter.get('/restaurants/:id/menu', async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id);
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
      res.json(restaurant.menu);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve restaurant menu' });
    }
  });


  // Add a new item to a restaurant's menu
  RestaurantRouter.post('/restaurants/:id/menu', async (req, res) => {
    try {
      const { name, description, price, image } = req.body;
      const restaurant = await Restaurant.findById(req.params.id);
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
      restaurant.menu.push({ name, description, price, image });
      await restaurant.save();
      res.status(201).json({ message: 'Menu item added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add menu item' });
    }
  });

  // Delete a menu item from a restaurant
  RestaurantRouter.delete('/restaurants/:id/menu/:itemId', async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id);
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
      restaurant.menu = restaurant.menu.filter(item => item._id.toString() !== req.params.itemId);
      await restaurant.save();
      res.status(202).json({ message: 'Menu item deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete menu item' });
    }
  });
  



  module.exports = {
    RestaurantRouter
  }

