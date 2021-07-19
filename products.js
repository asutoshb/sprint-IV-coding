


let list = [

    {
        image:"https://rukminim1.flixcart.com/image/332/398/jvgzl3k0/jewellery-set/8/6/9/cb73381-d2-sukkhi-original-imaf7yphyhcuc7sf.jpeg?q=50",
        price: 200000,
        brand:"Tanishq"
    },

    {
        image:"https://images-na.ssl-images-amazon.com/images/I/81%2BaEuZFKTL._UL1500_.jpg",
        price: 250000,
        brand:"Khimji"
    },

    {
        image:"https://images-na.ssl-images-amazon.com/images/I/81%2BaEuZFKTL._UL1500_.jpg",
        price: 100000,
        brand:"kalyan"
    },

      {
        image:"https://images-na.ssl-images-amazon.com/images/I/81%2BaEuZFKTL._UL1500_.jpg",
        price: 150000,
        brand:"Arundhati"
    },

    {
        image:"https://images-na.ssl-images-amazon.com/images/I/81%2BaEuZFKTL._UL1500_.jpg",
        price: 300000,
        brand:"Tanishq"
    },

    {
        image:"https://images-na.ssl-images-amazon.com/images/I/81%2BaEuZFKTL._UL1500_.jpg",
        price: 550000,
        brand:"Khimji"
    },

    {
        image:"https://images-na.ssl-images-amazon.com/images/I/81%2BaEuZFKTL._UL1500_.jpg",
        price: 400000,
        brand:"kalyan"
    },

      {
        image:"https://images-na.ssl-images-amazon.com/images/I/81%2BaEuZFKTL._UL1500_.jpg",
        price: 800000,
        brand:"Arundhati"
    },

    {
        image:"https://images-na.ssl-images-amazon.com/images/I/81%2BaEuZFKTL._UL1500_.jpg",
        price: 1000000,
        brand:"Arundhati"
    },

];


localStorage.setItem('products', JSON.stringify(list))


let product = document.getElementById('product');

function showProduct(d)
{
    let prod = d;

    product.innerHTML = null;

    prod.forEach(function(el){

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

        let btn = document.createElement('button');

        btn.innerHTML = "Add to cart";
        btn.addEventListener('click', function(){
            addToCart(el);
        })

        div.append(image, p_brand, p_price, btn);

        product.append(div);

    })




}


showProduct(JSON.parse(localStorage.getItem('products')))


function price_sort()
{
    let pr = JSON.parse(localStorage.getItem('products'));

    pr.sort(function(a, b) {
        return a.price - b.price;
    })

    showProduct(pr);

}

function price_sort1()
{
    let pr = JSON.parse(localStorage.getItem('products'));

    pr.sort(function(a, b) {
        return b.price - a.price;
    })

    showProduct(pr);

}





let t = document.getElementById('t');

t.addEventListener('change', function(){
    if(t.checked)
    {
        let pr = JSON.parse(localStorage.getItem('products'));

    let pr1 = [];
    pr.forEach(function(el){
        if(el.brand == 'Tanishq')
        {
            pr1.push(el);
        }
    })

    showProduct(pr1);
    }
    else
    {
        showProduct(JSON.parse(localStorage.getItem('products')))
    }
})


let k = document.getElementById('k');

k.addEventListener('change', function(){
    if(k.checked)
    {
        let pr = JSON.parse(localStorage.getItem('products'));

    let pr1 = [];
    pr.forEach(function(el){
        if(el.brand == 'Khimji')
        {
            pr1.push(el);
        }
    })

    showProduct(pr1);
    }
    else
    {
        showProduct(JSON.parse(localStorage.getItem('products')))
    }
})


let a = document.getElementById('a');

a.addEventListener('change', function(){
    if(a.checked)
    {
        let pr = JSON.parse(localStorage.getItem('products'));

    let pr1 = [];
    pr.forEach(function(el){
        if(el.brand == 'Arundhati')
        {
            pr1.push(el);
        }
    })

    showProduct(pr1);
    }
    else
    {
        showProduct(JSON.parse(localStorage.getItem('products')))
    }
})


let ka = document.getElementById('ka');

ka.addEventListener('change', function(){
    if(ka.checked)
    {
        let pr = JSON.parse(localStorage.getItem('products'));

    let pr1 = [];
    pr.forEach(function(el){
        if(el.brand == 'kalyan')
        {
            pr1.push(el);
        }
    })

    showProduct(pr1);
    }
    else
    {
        showProduct(JSON.parse(localStorage.getItem('products')))
    }
})






function price()
{

    let r1 = document.getElementById('r1').value;
let r2 = document.getElementById('r2').value;

     let pr2 = JSON.parse(localStorage.getItem('products'));

     let pr3 = [];
    pr2.forEach(function(el){
        if(Number(el.price)>Number(r1) && Number(el.price)<Number(r2))
        {
            pr3.push(el);
        }
    })

     showProduct(pr3);
}


function addToCart(el){

    let arr = localStorage.getItem('addedItems');
    if(arr == null)
    {
        arr = [];
    }
    else
    {
        arr = JSON.parse(localStorage.getItem('addedItems'));
    }
    arr.push(el);
    localStorage.setItem('addedItems', JSON.stringify(arr));
    
   
}

function go()
{
    window.open("cart.html")
}











