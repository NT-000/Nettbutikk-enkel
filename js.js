//Model

const model = {
    data: {
        shopstock: [
            {
                commodityName: 'Carrot',
                price: 18,
                commodityImage: "carrot.jpeg",
            },
            {
                commodityName: 'Orange',
                price: 9,
                commodityImage: "orange.jpeg",
            },
            {
                commodityName: 'Knife',
                price: 98,
                commodityImage: "knife.jpeg",
            },
            {
                commodityName: 'Peas',
                price: 32,
                commodityImage: "peas.jpeg",
            },
            {
                commodityName: 'Juice',
                price: 38,
                commodityImage: "juice.jpeg",
            },
        ],
        cart: [],
        totalPrice: 0,
    },

}

//View

updateView();
function updateView() {
    let html = '';
    html = /*HTML*/ `
    <h1>🗡️Arms and Groceries🥦</h1>
    <div class="storeInventory">
    <div>${showInventory()}</div>
</div>
<div class="shoppingCart">
    <h2>Shopping Cart🛒</h2>
    <div>${showCart()}</div>
    <div>${model.data.totalPrice} kr</div>
    <button onclick="pay()">Pay</button>
</div>
    `;
    document.getElementById('app').innerHTML = html;
}

function showInventory() {
    let shop = model.data.shopstock;
    let html = '';
    for (let index = 0; index < shop.length; index++) {
        html += /*HTML*/ `<strong>
        <div class="shop-item">
            <img src="${shop[index].commodityImage}" height="100px">
            <div>${shop[index].commodityName}:</div>
            <div>Price: ${shop[index].price} kr</div>
            <button onclick="addToCart(${index})">Add to cart</button>
        </div></strong>
 `;
    } return html;
}
function showCart() {
    let showCartHtml = '';
    let shoppingCart = model.data.cart;
    for (let index = 0; index < model.data.cart.length; index++) {
        showCartHtml += /*HTML*/ `<strong>
    <img src="${shoppingCart[index].commodityImage}" height="100px">
            <div>${shoppingCart[index].commodityName}</div> <br>
            <div>Price: ${shoppingCart[index].price}</div></strong>`;
    }
    return showCartHtml;
}

//Controller

function addToCart(itemIndex) {

    model.data.cart.push(model.data.shopstock[itemIndex]);
    model.data.totalPrice += model.data.shopstock[itemIndex].price;
    updateView();
}

function pay() {
    alert(`You just paid ${model.data.totalPrice} Kr, please don't come back again!`)
    model.data.cart = [];
    model.data.totalPrice = 0;
    updateView();
}
