const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart.controller');

const CartControllerInstance = new CartController();

module.exports = (app, passport) => {

  app.use('/carts', router);

  router.get('/mine', async (req, res, next) => {
    try {
      const { id } = req.user;
      
      const response = await CartControllerInstance.loadCart(id);

      res.status(200).send(response);

    } catch(err) {
      next(err);
    }
  });

  router.put('/mine', async (req, res, next) => {
    try {
      const { id } = req.user;
    
      const response = await CartControllerInstance.get({ id });
      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });

  router.post('/mine', async (req, res, next) => {
    try {
      const { id } = req.user;
    
      const response = await CartControllerInstance.create({ userId: id });

      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });

  router.post('/mine/items', async (req, res, next) => {
    try {
      const { id } = req.user;
      const data = req.body;
    
      const response = await CartControllerInstance.addItem(id, data);

      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });

  router.put('/mine/items/:cartItemId', async (req, res, next) => {
    try {
      const { cartItemId } = req.params;
      const data = req.body;
    
      const response = await CartControllerInstance.updateItem(cartItemId, data);

      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });

  router.delete('/mine/items/:cartItemId', async (req, res, next) => {
    try {
      const { cartItemId } = req.params;
    
      const response = await CartControllerInstance.removeItem(cartItemId);

      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });

  router.post('/mine/checkout', async (req, res, next) => {
    try {
      const { id } = req.user;

      const { cartId, paymentInfo } = req.body; 

      const response = await CartControllerInstance.checkout(cartId, id, paymentInfo);

      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });
}