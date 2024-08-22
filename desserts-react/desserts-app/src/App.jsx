import { useState } from 'react'
import './App.css'

const data =  [
  {
  "id": 1,
  "image": {
  "thumbnail": "https://dummyjson.czaylabs.com.tr/images/image-waffle-thumbnail.jpg",
  "mobile": "https://dummyjson.czaylabs.com.tr/images/image-waffle-mobile.jpg",
  "tablet": "https://dummyjson.czaylabs.com.tr/images/image-waffle-tablet.jpg",
  "desktop": "https://dummyjson.czaylabs.com.tr/images/image-waffle-desktop.jpg"
  },
  "name": "Waffle with Berries",
  "category": "Waffle",
  "price": 6.5
  },
  {
  "id": 2,
  "image": {
  "thumbnail": "https://dummyjson.czaylabs.com.tr/images/image-creme-brulee-thumbnail.jpg",
  "mobile": "https://dummyjson.czaylabs.com.tr/images/image-creme-brulee-mobile.jpg",
  "tablet": "https://dummyjson.czaylabs.com.tr/images/image-creme-brulee-tablet.jpg",
  "desktop": "https://dummyjson.czaylabs.com.tr/images/image-creme-brulee-desktop.jpg"
  },
  "name": "Vanilla Bean Crème Brûlée",
  "category": "Crème Brûlée",
  "price": 7
  },
  {
  "id": 3,
  "image": {
  "thumbnail": "https://dummyjson.czaylabs.com.tr/images/image-macaron-thumbnail.jpg",
  "mobile": "https://dummyjson.czaylabs.com.tr/images/image-macaron-mobile.jpg",
  "tablet": "https://dummyjson.czaylabs.com.tr/images/image-macaron-tablet.jpg",
  "desktop": "https://dummyjson.czaylabs.com.tr/images/image-macaron-desktop.jpg"
  },
  "name": "Macaron Mix of Five",
  "category": "Macaron",
  "price": 8
  },
  {
  "id": 4,
  "image": {
  "thumbnail": "https://dummyjson.czaylabs.com.tr/images/image-tiramisu-thumbnail.jpg",
  "mobile": "https://dummyjson.czaylabs.com.tr/images/image-tiramisu-mobile.jpg",
  "tablet": "https://dummyjson.czaylabs.com.tr/images/image-tiramisu-tablet.jpg",
  "desktop": "https://dummyjson.czaylabs.com.tr/images/image-tiramisu-desktop.jpg"
  },
  "name": "Classic Tiramisu",
  "category": "Tiramisu",
  "price": 5.5
  },
  {
  "id": 5,
  "image": {
  "thumbnail": "https://dummyjson.czaylabs.com.tr/images/image-baklava-thumbnail.jpg",
  "mobile": "https://dummyjson.czaylabs.com.tr/images/image-baklava-mobile.jpg",
  "tablet": "https://dummyjson.czaylabs.com.tr/images/image-baklava-tablet.jpg",
  "desktop": "https://dummyjson.czaylabs.com.tr/images/image-baklava-desktop.jpg"
  },
  "name": "Pistachio Baklava",
  "category": "Baklava",
  "price": 4
  },
  {
  "id": 6,
  "image": {
  "thumbnail": "https://dummyjson.czaylabs.com.tr/images/image-meringue-thumbnail.jpg",
  "mobile": "https://dummyjson.czaylabs.com.tr/images/image-meringue-mobile.jpg",
  "tablet": "https://dummyjson.czaylabs.com.tr/images/image-meringue-tablet.jpg",
  "desktop": "https://dummyjson.czaylabs.com.tr/images/image-meringue-desktop.jpg"
  },
  "name": "Lemon Meringue Pie",
  "category": "Pie",
  "price": 5
  },
  {
  "id": 7,
  "image": {
  "thumbnail": "https://dummyjson.czaylabs.com.tr/images/image-cake-thumbnail.jpg",
  "mobile": "https://dummyjson.czaylabs.com.tr/images/image-cake-mobile.jpg",
  "tablet": "https://dummyjson.czaylabs.com.tr/images/image-cake-tablet.jpg",
  "desktop": "https://dummyjson.czaylabs.com.tr/images/image-cake-desktop.jpg"
  },
  "name": "Red Velvet Cake",
  "category": "Cake",
  "price": 4.5
  },
  {
  "id": 8,
  "image": {
  "thumbnail": "https://dummyjson.czaylabs.com.tr/images/image-brownie-thumbnail.jpg",
  "mobile": "https://dummyjson.czaylabs.com.tr/images/image-brownie-mobile.jpg",
  "tablet": "https://dummyjson.czaylabs.com.tr/images/image-brownie-tablet.jpg",
  "desktop": "https://dummyjson.czaylabs.com.tr/images/image-brownie-desktop.jpg"
  },
  "name": "Salted Caramel Brownie",
  "category": "Brownie",
  "price": 4.5
  },
  {
  "id": 9,
  "image": {
  "thumbnail": "https://dummyjson.czaylabs.com.tr/images/image-panna-cotta-thumbnail.jpg",
  "mobile": "https://dummyjson.czaylabs.com.tr/images/image-panna-cotta-mobile.jpg",
  "tablet": "https://dummyjson.czaylabs.com.tr/images/image-panna-cotta-tablet.jpg",
  "desktop": "https://dummyjson.czaylabs.com.tr/images/image-panna-cotta-desktop.jpg"
  },
  "name": "Vanilla Panna Cotta",
  "category": "Panna Cotta",
  "price": 6.5
  }
  ]


  

  

  function App() {
    const [count, setCount] = useState(0);
    const [basketProducts, setBasketProducts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalOrder, setTotalOrder] = useState(0);
    const [showModal, setShowModal] = useState(false);

    function handleConfirmBtn(e){
      e.preventDefault();
      setShowModal(!showModal);
      console.log(showModal);

    }

    function handleStartOrderBtn(e){
      e.preventDefault();
      setShowModal(!showModal);
      setBasketProducts([]);
      setTotalCount(0);
      setTotalOrder(0);

    }

  
    function addCartBtn(e, item) {
      console.log(item.name);
  
      setBasketProducts((prevProducts) => {
        let updatedProducts;
        let product = prevProducts.find((x) => x.name === item.name);
  
        if (product) {
          updatedProducts = prevProducts.map((x) =>
            x.name === item.name ? { ...x, count: x.count + 1 } : x
          );
        } else {
          updatedProducts = [...prevProducts, { ...item, count: 1 }];
        }
  
        // Total count and total order are calculated based on the updated basket
        const newTotalCount = updatedProducts.reduce(
          (total, product) => total + product.count,
          0
        );
  
        setTotalCount(newTotalCount);
  
        const newTotalOrder = updatedProducts.reduce(
          (total, product) => total + product.count * product.price,
          0
        );
  
        setTotalOrder(newTotalOrder);
  
        return updatedProducts;
      });
    }
  
    function handleDeleteBtn(e, item) {
      e.preventDefault();
  
      setBasketProducts((prevProducts) => {
        const updatedProducts = prevProducts.filter(
          (x) => x.name !== item.name
        );
  
        const newTotalCount = updatedProducts.reduce(
          (total, product) => total + product.count,
          0
        );
  
        setTotalCount(newTotalCount);
  
        const newTotalOrder = updatedProducts.reduce(
          (total, product) => total + product.count * product.price,
          0
        );
  
        setTotalOrder(newTotalOrder);
  
        return updatedProducts;
      });
    }

   function ModalItem({item}){
    return(
      
          <div className="cart-item">
            <p className="desserts-name">{item.name}</p>
            
            <div className="cart-content">
            <img className='img-control' src={item.image} alt="" />
              <p className="price">{item.count}x</p>
              <p className="price-1">@ ${item.price}</p>
              <div className="delete-btn" onClick={(e) => handleDeleteBtn(e, item)}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  ${item.price * item.count}
                </a>
              </div>
            </div>
          </div>
        );
      
      
    
   }
  
    function CartItem({ item }) {
      return (
        <div className="cart-item">
          <p className="desserts-category">{item.name}</p>
          <div className="cart-content">
            <p className="price">{item.count}x</p>
            <p className="price-1">@ {item.price}</p>
            <p className="price-3">${item.price * item.count}</p>
            <div className="delete-btn">
              <a onClick={(e) => handleDeleteBtn(e, item)} href="#">
                <img
                  src="../src/assets/img/Button - Remove Item.svg"
                  alt="remove item"
                />
              </a>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="container">
        <div>
          <h1>Desserts</h1>
          <div id="cardsContainer">
            {data.map((x) => (
              <CardItem
                key={x.id}
                count={count}
                image={x.image.desktop}
                price={x.price}
                category={x.category}
                name={x.name}
                addCartBtn={addCartBtn}
              />
            ))}
          </div>
        </div>
  
        <div className= "cart-container">
          <h2 id="cartCount">YOUR CART({totalCount})</h2>
          <div id="cart">
            {basketProducts &&
              basketProducts.map((x, i) => (
                <CartItem key={i} item={x} handleDeleteBtn={handleDeleteBtn}/>
              ))}
  
            <img className={totalCount <= 0 ? 'block'  : 'none' }
              src="../src/assets/img/Empty Placeholder.png"
              alt="Empty Cart"
            />
          </div>
          <div className={totalCount <= 0 ? 'cart-bottom none'  : 'cart-bottom block' } >
            <div className="total-div">
              <p>total order : {totalOrder} $</p>
              <p id="totalOrder"></p>
            </div>
            <div className="carbon-div">
              <img
                src="../src/assets/img/carbon_tree.svg"
                alt="carbon-neutral"
              />
              <p>This is a carbon-neutral delivery</p>
            </div>
            <a href="#" onClick={(e)=>handleConfirmBtn(e)} className="confirm">
              Confirm Order
            </a>
          </div>
  
          <dialog id="modal" className={showModal ? 'block' : 'none'}>
            <div className="modal-head">
              <img
                src="../src/assets/img/carbon_checkmark-outline.svg"
                alt="checkmark"
              />
              <h2>Order Confirmed</h2>
              <span>We hope you enjoy your food!</span>
            </div>
            <div id="modalItem">  {basketProducts &&
              basketProducts.map((x, i) => (
                <ModalItem key={i} item={x}/>
              ))}</div>
            <div className="total-div">
              <p>Order Total</p>
              <p className="modal-total">${totalOrder}</p>
            </div>
            <a onClick={(e)=>handleStartOrderBtn(e)}  href="#" className="confirm" id="newOrderBtn">
              Start New Order
            </a>
          </dialog>
        </div>
      </div>
    );
  }
  
  function CardItem({ image, price, category, name, addCartBtn, count }) {
    const item = { image, price, category, name, count };
    return (
      <div className="card-item">
        <div className="card-img">
          <img src={image} alt="pankek foto" />
          <button onClick={(e) => addCartBtn(e, item)} type="button">
            <img
              src="../src/assets/img/carbon_shopping-cart-plus.svg"
              alt="alışveriş sepeti"
            />{" "}
            Add to Cart
          </button>
        </div>
        <div className="card-content">
          <h5>{category}</h5>
          <p>{name}</p>
          <span>${price}</span>
        </div>
      </div>
    );
  }
  
  export default App;
  
