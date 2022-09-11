import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
const getMaxPrice = (price: PriceBracket) => {
  switch(price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
  }
}
/// Add your getOrders() function below:
const getOrders = (price: PriceBracket, orders: Order[][]) => {
  let filteredOrders: Order[][] = [];
  orders[0].filter((order: Order) => order.price <= getMaxPrice(price));
  orders.forEach((restaurant: Order[]) => {
    const result = restaurant.filter((order: Order) => order.price <= getMaxPrice(price));

    filteredOrders.push(result);
  } )
  return filteredOrders;
}
/// Add your printOrders() function below:
const printOrders = (restaurants: Restaurant[], orders: Order [][] ) => {
  restaurants.forEach ((restaurant: Restaurant, index: number) => {
    if (orders[index].length > 0 ) {
      console.log(restaurant.name)
     orders[index].forEach((order) => {
       console.log(`${order.name} : ${order.price}$`);
     })
    }
  })
}
/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);
// printOrders(restaurants, elligibleOrders);
