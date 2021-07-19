let cart = document.getElementById('cart');
let total = document.getElementById('total');
let amount = document.getElementById('amount');

var c = 0;
var p = 0;

function show()
{
     let arr = localStorage.getItem('addedItems');
    if(arr == null)
    {
        arr = [];
    }
    else
    {
        arr = JSON.parse(localStorage.getItem('addedItems'));
    }


    arr.forEach(function(el){

        c++;
        p += Number(el.price);


        total.value = c;
        amount.value = p;

         let div = document.createElement('div');
        //div.setAttribute('id', 'j');
        div.addEventListener('mouseover', function(){
            image.src = "https://images-na.ssl-images-amazon.com/images/I/91erYiU5aqL._UL1500_.jpg";
        })

         div.addEventListener('mouseout', function(){
            image.src = el.image;
        })

        let image = document.createElement('img');

        let p_brand = document.createElement('p');
        p_brand.innerHTML = el.brand;

        let p_price = document.createElement('p');
        p_price.innerHTML = el.price;

        image.src = el.image;

        

        div.append(image, p_brand, p_price);

        cart.append(div);

    })

}

show();


let code = document.getElementById('code');

function disc() {
    if(code.value == 'masai30')
    {
        
        amount.value = 0.7*p;
    }

    let dis = document.getElementById('dis');
    dis.innerHTML = `You saved Rs ${p-amount.value} on this order`


}


function check() {
    window.open("checkout.html")
}