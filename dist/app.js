"use strict";
const products = [
    { name: 'CAN OF BEANS', quantity: 10, price: 15.00 },
    { name: 'PACKET OF LAYS', quantity: 20, price: 25.00 },
    { name: 'CHOCOLATES', quantity: 30, price: 35.00 }
];
function populateTable(products) {
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = '';
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    populateTable(products);
    const addButton = document.querySelector('#addProductButton');
    addButton.addEventListener('click', () => {
        const nameInput = document.querySelector('#productName');
        const quantityInput = document.querySelector('#productQuantity');
        const priceInput = document.querySelector('#productPrice');
        const name = nameInput.value.trim();
        const quantity = parseInt(quantityInput.value);
        const price = parseFloat(priceInput.value);
        if (!name || quantity <= 0 || isNaN(price) || price < 0) {
            alert('Please enter valid product details.');
            return;
        }
        products.push({ name, quantity, price });
        populateTable(products);
        nameInput.value = '';
        quantityInput.value = '';
        priceInput.value = '';
    });
});
