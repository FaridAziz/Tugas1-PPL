import { 
  incrementQty, 
  decrementQty,
  recalculateSubtotal,
  absoluteQty,
  total
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const okButton = document.querySelector('#confirmButton');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');
const codeInput = document.querySelector('#code');

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${total(qtyInput.value,price.value,codeInput.value)}`;
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  qtyInput.value = absoluteQty(qtyInput.value);
  subtotal.textContent = `Rp. ${total(qtyInput.value,price.value,codeInput.value)}`;
});

okButton.addEventListener('click', () => {
  subtotal.textContent = `Rp. ${total(qtyInput.value,price.value,codeInput.value)}`;
});

price.addEventListener('keyup', () => {
  subtotal.textContent = `Rp. ${total(price.value, qtyInput.value, codeInput.value)}`
});

qtyInput.addEventListener('keyup', () => {
  subtotal.textContent = `Rp. ${total(price.value, qtyInput.value, codeInput.value)}`
});