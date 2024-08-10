const product = [
    {
        id: 0,
        image: 'image/aa-1.jpeg',
        title: 'Tomata sauce',
        price: 120,
    },
    {
        id: 1,
        image: 'image/bb-2.jpeg',
        title: 'Tata salt',
        price: 150,
    },
    {
        id: 2,
        image: 'image/cc-3.jpeg',
        title: 'Smart Balance protine',
        price: 330,
    },
    {
        id: 3,
        image: 'image/tt-4.jpeg',
        title: 'Oats',
        price: 250,
    },
    {
        id: 4,
        image: 'image/download.jfif',
        title: 'Butter',
        price: 330,
    },
    {
        id: 5,
        image: 'image/1.jfif',
        title: 'Maggi',
        price: 28,
    },
    {
        id: 6,
        image: 'image/2.jfif',
        title: 'Lays',
        price: 30,
    },
    {
        id: 7,
        image: 'image/3.jfif',
        title: 'Kisses',
        price: 140,
    },

   {
        id: 8,
        image: 'image/4.jfif',
        title: 'Ladies fingers',
        price: 25,
    },
    {
        id: 9,
        image: 'image/5.jfif',
        title: 'Cabbage',
        price: 50,
    },
    {
        id: 10,
        image: 'image/6.jfif',
        title: 'Cucumber',
        price: 30,
    },
    {
        id: 11,
        image: 'image/7.jfif',
        title: 'Bounce biscuit',
        price: 10,
    },
    {
        id: 12,
        image: 'image/8.jfif',
        title: 'Blue Lays',
        price: 30,
    },
    {
        id: 13,
        image: 'image/9.jfif',
        title: 'Chocolate cones',
        price: 230,
    },
    {
        id: 14,
        image: 'image/10.jpeg',
        title: 'White Bread',
        price: 40,
    },
    {
        id: 15,
        image: 'image/11.jpeg',
        title: 'Oreo biscuit',
        price: 60,
    },
    {
        id: 16,
        image: 'image/12.jfif',
        title: 'Red lable Tea',
        price: 120,
    },
    {
        id: 17,
        image: 'image/13.jfif',
        title: 'Coca cola',
        price: 40,
    },
    {
        id: 18,
        image: 'image/14.jfif',
        title: 'Red bull',
        price: 90,
    },
    {
        id: 19,
        image: 'image/15.jfif',
        title: 'Monster soft drink',
        price: 80,
    },
    {
        id: 20,
        image: 'image/16.jfif',
        title: 'Pringles',
        price: 90,
    },
        

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}