document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.del-item').forEach((item) => {
		item.addEventListener('click', setRemoveBtn);
	});
	document.querySelectorAll('.quantity').forEach((q) => {
		q.addEventListener('change', changeQuantity);
	});
});

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
		total += quantity * price;
	});
	document.querySelector('.total-price').innerText = `$${total}`;
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
	console.log(productName, productPrice);
}
