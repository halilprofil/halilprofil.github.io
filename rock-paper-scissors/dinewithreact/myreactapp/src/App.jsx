import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
  <div className="container">

<div className="header">
    <img src="../src/img/dine.svg" alt="dinelogo" />

    <div>
        <h1>Exquisite dining since 1989</h1>
        <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
        <a href="#">BOOK A TABLE</a>
    </div>
</div>

<div className="hero">
    <img className="gray" src="../src/img/gray.png" alt="gray" />
    <img className="nature" src="../src/img/nature.png" alt="nature" />

    <div className="text">
        <img src="../src/img/line.png" alt="" />
        <h2>Enjoyable place for all the family</h2>
        <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
    </div>
</div>

<div className="section">

    <div className="text">
        <img src="../src/img/line.png" alt="" />
        <h2>The most locally sourced food</h2>
        <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
    </div>

    <img className="art" src="../src/img/art.png" alt="art" />
    <img className="gray" src="../src/img/reversegray.png" alt="gray" />
    <img className="lines" src="../src/img/lines.png" alt="lines" />
</div>

<div className="cards">
    <div className="text">
        <img src="../src/img/line.png" alt="" />
        <h2>A few highlights from our menu</h2>
        <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
    </div>

    <div className="card-container">

        <div className="card">
            <img className="card-image" src="../src/img/card1.png" alt="" />
            <img className="oneline" src="../src/img/oneline.png" alt="" />

            <div>
                <h3>Seared Salmon Fillet</h3>
                <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
            </div>
        </div>

        <div className="card">
            <img className="card-image" src="../src/img/card2.png" alt="" />
            <img className="oneline" src="../src/img/oneline.png" alt="" />

            <div>
                <h3>Rosemary Filet Mignon</h3>
                <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
            </div>
        </div>

        <div className="card">
            <img className="card-image" src="../src/img/card3.png" alt="" />
            <img className="oneline" src="../src/img/oneline.png" alt="" />

            <div>
                <h3>Summer Fruit Chocolate Mousse</h3>
                <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
            </div>
        </div>

    </div>
</div>

<div className="content">

    <div className="image">
        <img className="leftgray" src="../src/img/leftgray.png" alt="" />
        <img className="lines" src="../src/img/lines.png" alt="" />
    </div>

    <div className="content-card">

        <img className="dinner" src="../src/img/contentcard.png" alt="" />

        <div>
            <h2>Family Gathering</h2>
            <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
            <a className="button" href="#">BOOK A TABLE</a>

            <ul>
                <li><a href="#">FAMILY GATHERING</a></li>
                <li><a href="#">SPECIAL EVENTS</a></li>
                <li><a href="#">SOCIAL EVENTS</a></li>
            </ul>
        </div>
    </div>
</div>

<div className="footer-content">
    <div>
        <h2>Ready to make a reservation?</h2>
        <a href="#">BOOK A TABLE</a>
    </div>
</div>

<div className="footer">

    <div>
        <img className="logo" src="../src/img/dine.svg" alt="" />

        <ul>
            <li>Marthwaite, Sedbergh</li>
            <li>Cumbria</li>
            <li>+00 44 123 4567</li>
        </ul>

        <ul>
            <li>OPEN TIMES</li>
            <li>MON - FRI: 09:00 AM - 10:00 PM</li>
            <li>SAT - SUN: 09:00 AM - 11:30 PM</li>
        </ul>

    </div>

</div>
</div>



    </>
  )
}

export default App
