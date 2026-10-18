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


function changeQuantity(cart, id, qty) {
  if (qty <= 0) {
    throw new RangeError('Qty must be greater than zero')
  }

  const inCart = cart.find(product => product.id === id)
  if (!inCart) return cart
  const available = inCart.stock
  if (qty > available) {
    throw new RangeError('Not enough stock')
  }

  return cart.map(product => {
    if (product.id === id) {
      return { ...product, quantity: qty }
    } return product
  })
}

function removeFromCart(cart, id) {
  return cart.filter(product => (product.id !== id)
  );
}

function calculateCartSubtotal(cart) {
  const subTotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
  return subTotal;
}

function calculateOrderTotal(cart, promo) {
  const subtotal = calculateCartSubtotal(cart);
  const discount = (promo === 'SAVE10') && (subtotal >= 20000) ? subtotal * 0.1 : 0;
  const delivery = subtotal < 50000 ? 30000 : 0;
  const total = subtotal - discount + delivery;

  const orderTotal = {
    subtotal,
    discount,
    delivery,
    total
  }
  return orderTotal;
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

