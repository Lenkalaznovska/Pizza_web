let orderList = [];

function addToOrder(pizza) {
    orderList.push(pizza);
    alert(pizza + " byla přidána do objednávky.");
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (orderList.length === 0) {
        alert("Nejdříve přidejte nějakou pizzu do objednávky!");
        return;
    }

    let orderSummary = `<h3>Potvrzení objednávky</h3>
                        <p>Jméno: ${name}</p>
                        <p>Telefon: ${phone}</p>
                        <p>Adresa: ${address}</p>
                        <p>Objednané pizzy: ${orderList.join(', ')}</p>
                        <p>Celková cena: ${calculateTotal()} Kč</p>`;
    
    document.getElementById('orderSummary').innerHTML = orderSummary;
    document.getElementById('orderForm').reset();
    orderList = [];
});

function calculateTotal() {
    const prices = {
        'Margherita': 100,
        'Pepperoni': 120,
        'Havajská': 130
    };
    return orderList.reduce((total, pizza) => total + prices[pizza], 0);
}
