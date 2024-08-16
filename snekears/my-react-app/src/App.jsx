import { useState } from 'react'
import './App.css'

let generatedid = 0;

function App() {
  const [count, setCount] = useState(0)
  const [addedProduct , setAddedProduct] = useState([]);
  const [cartHidden,setCartHidden] = useState(true);
  const [sliderCount, setSliderCount] = useState(0);
  const [modalHidden,setmodalHidden] = useState(true);


 

  function İncreaseBtn(){

    function increaseCount(){
      setCount(count +1 );
    }

    return(
      <button onClick={increaseCount}>+</button>
    )
  }


  function DecraseBtn(){
    function decraseCount(){
      setCount(count -1 );
    }

    return(
      <button onClick={decraseCount}>-</button>
    )

  }

  function AddProductBtn(){

    function addProduct() {
     
    function generatedİd(){
      ++generatedid;
      return generatedid;
    }

    generatedİd();

      const productObj = {
        name: 'Fall Limited Edition Sneakers',
        price: 125,
        count: count,
        id: generatedid
        
      };
      setAddedProduct(prevProducts => [...prevProducts, productObj]);
      console.log(addedProduct);
    }
    
    return (
      <button className='add-product' onClick={addProduct}>
        <img src="../src/assets/Shape (2).svg" alt="Add to cart" />
        Add to cart
      </button>
    );
  }

  function CartItem({ name, price, count,addedProduct, id }) {
   
    function deleteİtem(){
      let products = addedProduct.filter(x=> x.id !== id );
      setAddedProduct(products);

    }

    return (
      <div className="cart-item">

        <img src="../src/assets/img(main).png" alt="Product" />

        <div className="mid">
          <span className='grey'>{name}</span>
          <div className='mid-content'>
            <span className='grey'>{price} x {count}</span>
            <span className='dark-color'>$ {price * count}</span>
          </div>

        </div>
        <button onClick={()=>deleteİtem()}><img src="../src/assets/Mask 2.svg"/></button>
      </div>
    );
  }
  
  function RenderCart({ addedProduct }) {

    return (
      <div className="cart-list">
        {addedProduct.map((x) => (
          <CartItem addedProduct={addedProduct} key={x.id} id={x.id}  name={x.name} price={x.price} count={x.count} />
        ))}
      </div>
    );
  }


  function SliderProduct(){

    const images =[
      '../src/assets/1.svg',
      '../src/assets/2.svg',
      '../src/assets/3.svg',
      '../src/assets/4.svg',
      
    ]

    function handleNextİmage(){
      setSliderCount(sliderCount +1);
      if(images.length -1 <= sliderCount){
        setSliderCount(0);
      }

    }

    function handlePreİmage(){
      setSliderCount(sliderCount -1);
      if(sliderCount <= 0){
        setSliderCount(0);
      }

    }


    return(<>
    <dialog className={modalHidden ? 'hidden' : 'modal' } open>

      <img src= {images[sliderCount]}/>

      <div className="img-list">
          <img  src="../src/assets/img(main).png"/>
          <img  src="../src/assets/img(2).png"/>
          <img  src="../src/assets/img(3).png"/>
          <img  src="../src/assets/img(4).png"/>
        </div>

    <button className='modal-close' onClick={()=>setmodalHidden(true)}>x</button>
    <button className='next-image' onClick={handleNextİmage}> ^ </button>
    <button className='pre-image' onClick={handlePreİmage}> ^ </button>

    </dialog>
    </>)


  }

  return (
    <>
   <div className="container">

    <SliderProduct></SliderProduct>
    <div className="header">
      <img src="../src/assets/sneakers.svg"/>
      <ul className='header-link'>
        <li><a href="#">Collections</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
        <div className="header-btn">
        <button onClick={()=>setCartHidden(!cartHidden)}>
          <div className={addedProduct.length === 0 ? 'hidden' : 'cart-count'}>{addedProduct.length !==0 ? addedProduct.length : ''}</div>
          <img src="../src/assets/Group 14.svg"/></button>
        <button><img src="../src/assets/Oval (1).svg"/></button>
        </div>
    </div>

    <div className="content">

      <div className={cartHidden ? 'cart hidden' : 'cart'}>
        <h3 className='title'>Cart</h3>
        

        <div><RenderCart addedProduct={addedProduct}></RenderCart>
            <button onClick={()=>setAddedProduct([])} className= {addedProduct.length === 0 ? 'hidden' : 'confirm'}>Checkout</button>
        </div>

        <div className={addedProduct.length ===0 ? 'cart-content' :'hidden'}>
           
           <p className='grey any'>Your cart is empty.</p>

           

        </div>

        
      </div>

      <div className="content-img">

        <div className="big-img">
          <img src="../src/assets/big-img.png"/>
        </div>

        <div className="img-list">
         <button onClick={()=>setmodalHidden(false)}><img className='control' src="../src/assets/img(1).png"/></button>
         <button onClick={()=>setmodalHidden(false)}><img src="../src/assets/img(2).png"/></button>
         <button onClick={()=>setmodalHidden(false)}><img src="../src/assets/img(3).png"/></button>
         <button onClick={()=>setmodalHidden(false)}><img src="../src/assets/img(4).png"/></button>
        </div>

      </div>

      <div className="content-text">
        <span className='orange'>Sneaker Company</span>
        <h1 className='dark-color'>Fall Limited Edition Sneakers</h1>
        <p className='grey'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='price-control'>
        <h3 className='dark-color'>$125.00</h3>
        <span className='sale orange'>50%</span>
        </div>
        <span className='old-price grey'>$250.00</span>
        <div className="count-control">
          <div className='btn-list'>
          <İncreaseBtn></İncreaseBtn>
          <p>{count}</p>
          <DecraseBtn></DecraseBtn>
          </div>
          <AddProductBtn></AddProductBtn>
        </div>
        
      </div>

    </div>

   </div>
    </>

   
  )
}

export default App



