let desserts = [];
let addDeserts = [];
let control = [];
let sames = [];
let count = 1 ;
let totalCount = 0;
let totalPrice = 0;
let intTotal = 0;

let modalClick = document.querySelector('.confirm')

// img: desserts.data[0].image.thumbnail
// category: desserts.data[0].image.category
// name: desserts.data[0].image.name
// price:  desserts.data[0].image.price


function renderDesserts(){
   cardsContainer.innerHTML = desserts.map(
    x => `
    <div class="card-item">
        <div class="card-img">
            <img class="desserts-img" src="${x.image.desktop}">
            <button type="button" data-id="${x.id}" class="addDesert"><img src="./assets/img/carbon_shopping-cart-plus.svg" alt="alışveriş sepeti"> Add to Cart</button>
        </div>

        <div class="card-content">
        <h5>${x.category}</h5>
        <p>${x.name}</p>
        <span>$ ${x.price}</span>
        </div>

    </div>`).join('');

    document.querySelectorAll('.addDesert')
    .forEach(x => x.addEventListener('click', handleAddCart));
}

function handleAddCart(){

    document.querySelector('.cart-bottom').setAttribute('style','display:block');
    let dessert = desserts.find(x => Number(x.id)  === Number(this.dataset.id));
    if(addDeserts.includes(dessert)){
        count++;
        dessert.count = count;
        control.push(dessert);
        if(dessert.count > 1){
            sames = control.filter(x=> x.name === dessert.name);
            count = sames.length;
            dessert.count = count;
           ;
        }

    }else{
        count = 1 ;
        dessert.count = count;
        control.push(dessert);
        addDeserts.push(dessert);
    }

    createHtmlCart();

  
}


function createHtmlCart(){

    cartCount.innerHTML = `YOUR CART(${control.length})`
     cart.innerHTML = addDeserts.map(x=> `<div class="cart-item">
     <p class="desserts-name">${x.name}</p>
     <div class="cart-content">
         <p class="price">${x.count}x</p>
         <p class="price-1">@ ${x.price}</p>
         <p class="price-2">$ ${x.price*x.count}</p>
         <div class="delete-btn" data-delete="${x.id}"><a href="#"><img src="./assets/img/Button - Remove Item.svg"></a></div>
     </div>
 </div>`).join('');

 intTotal=0;
totalPrice = addDeserts.map(x=> (x.price)*(x.count));
 for(let i=0; i<totalPrice.length;i++){
    intTotal +=  Number(totalPrice[i]);

 }
 totalOrder.innerHTML = '$'+''+intTotal ;



console.log(totalPrice);





 document.querySelectorAll('.delete-btn')
     .forEach(x => x.addEventListener('click', deleteCartİtem));
     
    
}

function deleteCartİtem(e){
    e.preventDefault();
     addDeserts = addDeserts.filter(x => Number(x.id) !== Number(this.dataset.delete));
     control = control.filter(x => Number(x.id) !== Number(this.dataset.delete));
    //  console.log(addDeserts);
    createHtmlCart();


}

function init(){
    fetch('https://dummyjson.czaylabs.com.tr/api/products')
      .then(res => res.json())
      .then(res => {
        desserts = res.data;
        renderDesserts();
        
      });
     
      

      
}

init();

function modalCreateHtml(e){
    e.preventDefault();
    modalİtem.innerHTML = addDeserts.map(x=> `<div class="cart-item">
    <p class="desserts-name">${x.name}</p>
    <div class="cart-content">
        <p class="price">${x.count}x</p>
        <p class="price-1">@ ${x.price}</p>
        <div class="delete-btn" data-delete="${x.id}"><a href="#" style="text-decoration: none; color: black;">$ ${x.price*x.count}</a></div>
    </div>
</div>`).join('');

document.querySelector('.modal-total').innerHTML = `$ ${intTotal}`;
modal.showModal();



}


function newOrderBtnClick(e){
    e.preventDefault();
    modal.close();
    addDeserts=[];
    control=[];
    intTotal=0;
    createHtmlCart();
}

newOrderBtn.addEventListener('click',newOrderBtnClick);

modalClick.addEventListener('click',modalCreateHtml);
