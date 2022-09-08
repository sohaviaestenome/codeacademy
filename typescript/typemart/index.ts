import products from './product';

let productName: string = 'fanny pack';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = 'rua da moita';

const product = products.filter(product => product.name === productName)[0];

if (Boolean(product.preOrder) === true) {
  console.log('We will send you a message when your product is on its way.');
}

if (Number(product.price) >= 25) {
  shipping = 0;
}else {
  shipping = 5;
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);