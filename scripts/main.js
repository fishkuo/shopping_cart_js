document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.del-item').forEach((item) => {
		item.addEventListener('click', setRemoveBtn);
	});
	document.querySelectorAll('.quantity').forEach((q) => {
		q.addEventListener('change', changeQuantity);
	});
	document.querySelector('.empty-cart').addEventListener('click', clearCart);
});

function clearCart() {
	document.querySelector('.item-list').innerHTML = '';
	calCart();
}
function setRemoveBtn(e) {
	e.currentTarget.parentElement.parentElement.remove();
	calCart();
}

function calCart() {
	const cartItems = document.querySelectorAll('.cart .cart-item');
	let total = 0;
	cartItems.forEach((item) => {
		const quantity = item.querySelector('.quantity').value;
		const price = item.querySelector('.price').innerText.replace('$', '');
		item.querySelector('.subtotal').innerText = `$${quantity * price}`;

		total += quantity * price;
	});

	document.querySelector('.total-price').innerText = `$${Math.round(total * 100) / 100}`;
}

function changeQuantity(e) {
	const input = e.target;
	let quantity = e.target.value;
	if (quantity <= 0) {
		quantity = 1;
		e.target.value = 1;
	}
	const cartItem = input.parentElement.parentElement;
	const price = cartItem.querySelector('.price').innerText.replace('$', '');
	cartItem.querySelector('.subtotal').innerText = `$${quantity * price}`;
	calCart();
}

document.querySelectorAll('.add-cat-btn').forEach((item) => {
	item.addEventListener('click', addCat);
});

function addCat(e) {
	const product = e.currentTarget.parentElement.parentElement;
	const productName = product.querySelector('div h5').innerText;
	const productPrice = product.querySelector('div p').innerText.replace('$', '');

	const items = document.querySelectorAll('.cart-item');
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const title = items[i].querySelector('.title').innerText;
		if (title == productName) {
			item.querySelector('.quantity').value = Number(item.querySelector('.quantity').value) + 1;
			changeQuantity();
			// calCart();
			return;
		}
	}
	// console.log(productName, productPrice);
	const row = document.createElement('tr');
	row.classList.add('cart-item');
	row.innerHTML = `			
  <td class="title">${productName}</td>
  <td><input type="number" value="1" class="quantity" /></td>
  <td class="price">${productPrice}</td>
  <td class="subtotal">${productPrice}</td>
  <td>
    <button class="del-item btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
  </td>`;

	const itemList = document.querySelector('tbody');
	itemList.appendChild(row);
	row.querySelectorAll('.del-item').forEach((btn) => {
		btn.addEventListener('click', setRemoveBtn);
	});
	row.querySelectorAll('.cart .cart-item').forEach((btn) => {
		btn.addEventListener('change', changeQuantity);
	});
}
