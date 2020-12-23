document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.del-item').forEach((item) => {
		item.addEventListener('click', (e) => {
			console.log(e.currentTarget.parentElement);
			e.currentTarget.parentElement.parentElement.remove();
		});
	});
});
