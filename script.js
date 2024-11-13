document.querySelectorAll('.option input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
        updateTotal();
    });
});

function updateTotal() {
    const selectedOption = document.querySelector('.option input[type="radio"]:checked');
    let total = 0;
    if (selectedOption) {
        const price = selectedOption.parentElement.querySelector('.price').innerText.replace('$', '').replace(' USD', '');
        total = parseFloat(price);
    }
    document.querySelector('.total').innerText = `Total: $${total.toFixed(2)} USD`;
}
