import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [addedProduct, setAddedProduct] = useState([]);
  const [cartHidden, setCartHidden] = useState(true);
  const [sliderCount, setSliderCount] = useState(0);
  const [modalHidden, setmodalHidden] = useState(true);
  const [generatedId, setGeneratedId] = useState(0);

  // Ürün miktarını artırma
  function IncreaseBtn() {
    function increaseCount() {
      setCount((prevCount) => prevCount + 1);
    }

    return <button onClick={increaseCount}>+</button>;
  }

  // Ürün miktarını azaltma (negatif olmamalı)
  function DecreaseBtn() {
    function decreaseCount() {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }

    return <button onClick={decreaseCount}>-</button>;
  }

  // Sepete ürün ekleme
  function AddProductBtn() {
    function addProduct() {
      if (count === 0) {
        alert('Lütfen en az bir ürün ekleyin.');
        return;
      }

      const newId = generatedId; // Mevcut ID'yi sakla
      const productObj = {
        name: 'Fall Limited Edition Sneakers',
        price: 125,
        count: count,
        id: newId,  // Kaydedilen ID'yi kullan
      };

      setAddedProduct((prevProducts) => [...prevProducts, productObj]);

      // ID'yi artırıyoruz
      setGeneratedId((prevId) => prevId + 1);

      // Ürün eklendikten sonra sayıyı sıfırlayalım
      setCount(0);
    }

    return (
      <button className="add-product" onClick={addProduct}>
        <img src="../src/assets/Shape (2).svg" alt="Add to cart" />
        Add to cart
      </button>
    );
  }

  function CartItem({ name, price, count, addedProduct, id }) {
    function deleteItem() {
      let products = addedProduct.filter((x) => x.id !== id);
      setAddedProduct(products);
    }

    return (
      <div className="cart-item">
        <img src="../src/assets/img(main).png" alt="Product" />
        <div className="mid">
          <span className="grey">{name}</span>
          <div className="mid-content">
            <span className="grey">
              {price} x {count}
            </span>
            <span className="dark-color">${price * count}</span>
          </div>
        </div>
        <button onClick={deleteItem}>
          <img src="../src/assets/Mask 2.svg" alt="Delete" />
        </button>
      </div>
    );
  }

  function RenderCart({ addedProduct }) {
    return (
      <div className="cart-list">
        {addedProduct.map((x) => (
          <CartItem
            addedProduct={addedProduct}
            key={x.id}
            id={x.id}
            name={x.name}
            price={x.price}
            count={x.count}
          />
        ))}
      </div>
    );
  }

  function SliderProduct() {
    const images = [
      '../src/assets/1.svg',
      '../src/assets/2.svg',
      '../src/assets/3.svg',
      '../src/assets/4.svg',
    ];

    function handleNextImage() {
      setSliderCount((prevCount) => (images.length - 1 <= prevCount ? 0 : prevCount + 1));
    }

    function handlePrevImage() {
      setSliderCount((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1));
    }

    return (
      <>
        <dialog className={modalHidden ? 'hidden' : 'modal'} open>
          <img src={images[sliderCount]} alt="Slider" />

          <div className="img-list">
            <img src="../src/assets/img(main).png" />
            <img src="../src/assets/img(2).png" />
            <img src="../src/assets/img(3).png" />
            <img src="../src/assets/img(4).png" />
          </div>

          <button className="modal-close" onClick={() => setmodalHidden(true)}>
            x
          </button>
          <button className="next-image" onClick={handleNextImage}>
            ^
          </button>
          <button className="pre-image" onClick={handlePrevImage}>
            ^
          </button>
        </dialog>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <SliderProduct />
        <div className="header">
          <img src="../src/assets/sneakers.svg" alt="Logo" />
          <ul className="header-link">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="header-btn">
            <button onClick={() => setCartHidden(!cartHidden)}>
              <div className={addedProduct.length === 0 ? 'hidden' : 'cart-count'}>
                {addedProduct.length !== 0 ? addedProduct.length : ''}
              </div>
              <img src="../src/assets/Group 14.svg" alt="Cart" />
            </button>
            <button>
              <img src="../src/assets/Oval (1).svg" alt="Profile" />
            </button>
          </div>
        </div>

        <div className="content">
          <div className={cartHidden ? 'cart hidden' : 'cart'}>
            <h3 className="title">Cart</h3>

            <div>
              <RenderCart addedProduct={addedProduct}></RenderCart>
              <button
                onClick={() => setAddedProduct([])}
                className={addedProduct.length === 0 ? 'hidden' : 'confirm'}
              >
                Checkout
              </button>
            </div>

            <div className={addedProduct.length === 0 ? 'cart-content' : 'hidden'}>
              <p className="grey any">Your cart is empty.</p>
            </div>
          </div>

          <div className="content-img">
            <div className="big-img">
              <img src="../src/assets/big-img.png" alt="Big product" />
            </div>

            <div className="img-list">
              <button onClick={() => setmodalHidden(false)}>
                <img className="control" src="../src/assets/img(1).png" alt="Thumbnail" />
              </button>
              <button onClick={() => setmodalHidden(false)}>
                <img src="../src/assets/img(2).png" alt="Thumbnail" />
              </button>
              <button onClick={() => setmodalHidden(false)}>
                <img src="../src/assets/img(3).png" alt="Thumbnail" />
              </button>
              <button onClick={() => setmodalHidden(false)}>
                <img src="../src/assets/img(4).png" alt="Thumbnail" />
              </button>
            </div>
          </div>

          <div className="content-text">
            <span className="orange">Sneaker Company</span>
            <h1 className="dark-color">Fall Limited Edition Sneakers</h1>
            <p className="grey">
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable
              rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="price-control">
              <h3 className="dark-color">$125.00</h3>
              <span className="sale orange">50%</span>
            </div>
            <span className="old-price grey">$250.00</span>
            <div className="count-control">
              <div className="btn-list">
                <IncreaseBtn />
                <p>{count}</p>
                <DecreaseBtn />
              </div>
              <AddProductBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
