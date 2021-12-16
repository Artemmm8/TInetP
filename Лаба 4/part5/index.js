function setup() {
    const productListTable = document.getElementById('productListTable');
    const productDescriptionFrame = document.getElementById('productDescriptionFrame');

    fetch('./assets/goods.txt')
        .then((response) => response.text())
        .then((text) => {
            const products = text.split('\n');

            products.forEach((product) => {
                const [productCode, productName, productPrice, productFileName] = product.split('#');

                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <tr>
                        <td>${productCode}</td>
                        <td>${productName}</td>
                        <td>${productPrice}</td>
                    </tr>
                `;

                newRow.onclick = () => {
                    productDescriptionFrame.src = `./descriptions/${productFileName}`;
                };

                productListTable.appendChild(newRow);
            });
        });
}

setup();
