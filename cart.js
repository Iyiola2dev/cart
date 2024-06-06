const product = [
    {
        id: 0,
        image:'https://res.cloudinary.com/dtlejpoxq/image/upload/v1717635538/cart_cam_2_wdlzki.jpg',
        title:'Sony camera',
        price: 120,
    },
    {
        id: 1,
        image:'https://res.cloudinary.com/dtlejpoxq/image/upload/v1717635538/cart_cam_len_uouaau.jpg',
        title:'Cam Len',
        price: 50,
    },
    {
        id: 2,
        image:'https://res.cloudinary.com/dtlejpoxq/image/upload/v1717635539/cart_cam1_cvskzd.jpg',
        title:'Cam scanner',
        price: 80,
    },
    {
        id: 3,
        image:'https://res.cloudinary.com/dtlejpoxq/image/upload/v1717635538/cart_Dji-osmo_m3szag.jpg',
        title:'Cam',
        price: 100,
    }
];
const categories = [...new Set(product.map((item) =>{return item}))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) =>{
 let { image, title, price} = item;
    return(
        `<div class = 'box'>
            <div class = 'img-box'>
                <img class = 'images' src = ${image}></img>
                </div>
        <div class = 'bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2> ` +
        "<button onclick = 'addtocart("+(i++)+")'> Add to cart </button>"+
        `</div>
        </div>
        `

    )
}).join('');

let cart = [];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


 function displaycart(a){
    let j = 0, total=0
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length ==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty"
        document.getElementById("total").innerHTML = `$ ${0}.00`;
    }else{
        document.getElementById('cartItem').innerHTML =  cart.map((items) => {
            let{ image, title,price} = items;
           total= total + price;
           document.getElementById("total").textContent = `$ ${total}.00`;
            return(
                `<div class = 'cart-item'>
                <div class = 'row-img'>
                    <img class = 'rowimg' src="${image}"/>
                </div>
                <p style = 'font-size:12px;'>${title}</p>
                <h2 style = 'font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class = 'fa-solid fa-trash' onclick = 'delElement("+ (j++) + ")'></i></div>"

            )
        }).join('');
    }
 }