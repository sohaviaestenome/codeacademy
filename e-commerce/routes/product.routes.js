const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');
const ProductControllerInstance = new ProductController();

module.exports = (app) => {

  app.use('/products', router);

  router.get('/', async (req, res, next) => {
    try {

      const queryParams = req.query;

      const response = await ProductControllerInstance.list(queryParams);
      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });

  router.get('/:productId', async (req, res, next) => {
    try {
      const { productId } = req.params;

      const response = await ProductControllerInstance.get(productId);

      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });
}