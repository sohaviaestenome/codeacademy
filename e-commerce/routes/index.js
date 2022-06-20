const authRouter = require('./auth.routes');
const cartRouter = require('./cart.routes');
const orderRouter = require('./order.routes');
const productRouter = require('./product.routes');
const userRouter = require('./users.routes');

module.exports = (app, passport) => {
  authRouter(app, passport);
  cartRouter(app);
  orderRouter(app);
  productRouter(app);
  userRouter(app);
}