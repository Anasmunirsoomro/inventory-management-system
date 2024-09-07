interface Product {
    name: string;
    quantity: number;
    price: number;
}

const products: Product[] = [
    { name: 'CAN OF BEANS', quantity: 10, price: 15.00 },
    { name: 'PACKET OF LAYS', quantity: 20, price: 25.00 },
    { name: 'CHOCOLATES', quantity: 30, price: 35.00 }
];

function populateTable(products: Product[]): void {
    const tableBody = document.querySelector('#productTable tbody') as HTMLTableSectionElement;

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
    const addButton = document.querySelector('#addProductButton') as HTMLButtonElement;

    addButton.addEventListener('click', () => {
        const nameInput = document.querySelector('#productName') as HTMLInputElement;
        const quantityInput = document.querySelector('#productQuantity') as HTMLInputElement;
        const priceInput = document.querySelector('#productPrice') as HTMLInputElement;

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
