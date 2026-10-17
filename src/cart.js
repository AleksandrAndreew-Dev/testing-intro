function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, item, quantity) {
  if (quantity <= 0) {
    throw new RangeError('Please, provide quantity greater than zero')
  }

  const inCart = cart.find(p => p.id === item.id);
  const currQt = inCart ? inCart.quantity : 0;

  if (currQt + quantity > item.stock) {
    throw new RangeError('Not enough stock')
  }

  if (!inCart) {
    return [...cart, { ...item, quantity: currQt + quantity }]
  }
  return cart.map(product => {
    if (product.id === item.id) {
      return { ...product, quantity: currQt + quantity }
    }
    return product
  })

}


function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

