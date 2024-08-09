import { useEffect } from 'react';
import './App.css';

function App() {
  
  useEffect(() => {
    // DOM elemanlarına erişim burada yapılabilir
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let rock = document.getElementById('rock');
    let triangle = document.getElementById('triangle');
    
    let topDiv = document.querySelector('.top');
    let bottomDiv = document.querySelector('.bottom');
    let againBtn = document.querySelector('.desktop-button');
    let resetBtn = document.querySelector('.reset-button');
    let result = document.getElementById('result');
    let puan = 0;
    let changePuan = document.getElementById('puan');
    
    let hareketler = [rock, paper, scissors];
    let rastgeleSayi = Math.round(Math.random() * 2);
    let bilgisayarHamlesi = hareketler[rastgeleSayi];
    
    changePuan.innerText = `${puan}`;
    
    console.log(changePuan);
    console.log(bilgisayarHamlesi.outerHTML);
    
    againBtn.setAttribute('style', 'display:none;');
    
    function reset() {
        bottomDiv.setAttribute('style', 'display:flex; justify-content:center');
        scissors.setAttribute('style', 'display:block;');
        rock.setAttribute('style', 'display:block;');
        triangle.setAttribute('style', 'display:block;');
        bilgisayarHamlesi.setAttribute('style', 'display:block;');
        topDiv.innerHTML = (` <img id="paper" src="../src/img/paper.png" alt="paper"> <img id="scissors" src="../src/img/scissors.png" alt="scissors"> `);
        topDiv.children[0].addEventListener('click', game);
        topDiv.children[1].addEventListener('click', game1);
    
        changePuan.innerText = `${puan}`;
        bilgisayarHamlesi = hareketler[Math.round(Math.random() * 2)];
    }
    
    resetBtn.addEventListener('click', reset);
    
    console.log(againBtn.outerHTML);
    
    function game() {
        bottomDiv.setAttribute('style', 'display:none;');
        scissors.setAttribute('style', 'display:none;');
        rock.setAttribute('style', 'display:none;');
        triangle.setAttribute('style', 'display:none;');
        bilgisayarHamlesi.setAttribute('style', 'display:block');
    
        if (bilgisayarHamlesi === rock) {
            result.innerText = 'YOU WIN';
            againBtn.setAttribute('style', 'display:block;');
            topDiv.innerHTML = (` <img id="paper" src="../src/img/paper.png" alt="paper"> ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
            topDiv.children[1].children[1].addEventListener('click', reset);
            puan++;
            console.log(puan);
        }
    
        if (bilgisayarHamlesi === scissors) {
            result.innerText = 'YOU LOSE';
            againBtn.setAttribute('style', 'display:block;');
            topDiv.innerHTML = (` <img id="paper" src="../src/img/paper.png" alt="paper">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
            topDiv.children[1].children[1].addEventListener('click', reset);
            puan--;
            console.log(puan);
        }
    
        if (bilgisayarHamlesi === paper) {
            result.innerText = `IT'S A DRAW`;
            againBtn.setAttribute('style', 'display:block;');
            topDiv.innerHTML = (` <img id="paper" src="../src/img/paper.png" alt="paper">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
            topDiv.children[1].children[1].addEventListener('click', reset);
        }
    }
    
    paper.addEventListener('click', game);
    
    function game1() {
        bottomDiv.setAttribute('style', 'display:none');
        scissors.setAttribute('style', 'display:none;');
        rock.setAttribute('style', 'display:none;');
        triangle.setAttribute('style', 'display:none;');
        bilgisayarHamlesi.setAttribute('style', 'display:block');
    
        if (bilgisayarHamlesi === paper) {
            result.innerText = 'YOU WIN';
            againBtn.setAttribute('style', 'display:block;');
            topDiv.innerHTML = (` <img id="scissors" src="../src/img/scissors.png" alt="scissors">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
            topDiv.children[1].children[1].addEventListener('click', reset);
            puan++;
            console.log(puan);
        }
    
        if (bilgisayarHamlesi === rock) {
            result.innerText = 'YOU LOSE';
            againBtn.setAttribute('style', 'display:block;');
            topDiv.innerHTML = (` <img id="scissors" src="../src/img/scissors.png" alt="scissors">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
            topDiv.children[1].children[1].addEventListener('click', reset);
            puan--;
            console.log(puan);
        }
    
        if (bilgisayarHamlesi === scissors) {
            result.innerText = `IT'S A DRAW`;
            againBtn.setAttribute('style', 'display:block;');
            topDiv.innerHTML = (`<img id="scissors" src="../src/img/scissors.png" alt="scissors"> ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
            topDiv.children[1].children[1].addEventListener('click', reset);
        }
    }
    
    scissors.addEventListener('click', game1);
    
    function game2() {
        bottomDiv.setAttribute('style', 'display:none');
        scissors.setAttribute('style', 'display:none;');
        rock.setAttribute('style', 'display:none;');
        triangle.setAttribute('style', 'display:none;');
        bilgisayarHamlesi.setAttribute('style', 'display:block');
    
        if (bilgisayarHamlesi === scissors) {
            result.innerText = 'YOU WIN';
            againBtn.setAttribute('style', 'display:block;');
            topDiv.innerHTML = (`  <img id="rock" src="../src/img/rock.png" alt="rock">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
            topDiv.children[1].children[1].addEventListener('click', reset);
            puan++;
        }
    
        if (bilgisayarHamlesi === paper) {
            result.innerText = 'YOU LOSE';
            againBtn.setAttribute('style', 'display:block;');
            topDiv.innerHTML = (`  <img id="rock" src="../src/img/rock.png" alt="rock">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
            topDiv.children[1].children[1].addEventListener('click', reset);
            puan--;
        }
    
        if (bilgisayarHamlesi === rock) {
            result.innerText = `IT'S A DRAW`;
            againBtn.setAttribute('style', 'display:block;');
            topDiv.innerHTML = (` <img id="rock" src="../src/img/rock.png" alt="rock"> ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
            topDiv.children[1].children[1].addEventListener('click', reset);
        }
    }
    
    rock.addEventListener('click', game2);
    
  }, []); // Bu boş bağımlılık dizisi, useEffect'in sadece bileşen mount olduktan sonra çalışmasını sağlar.

  return (
    <>
    <div className="container">
      <div className="header">
        <img src="../src/img/ROCKPAPERSCISSORS..svg" alt="logo" />
        <div>
          <span>SCORE</span>
          <h3 id="puan">12</h3>
        </div>
      </div>

      <div className="content">
        <div className="top">
          <img id="paper" src="../src/img/paper.png" alt="paper" />
          <div className="desktop-button">
            <p id="result"></p>
            <button className="reset-button">PLAY AGAIN</button>
          </div>
          <img id="scissors" src="../src/img/scissors.png" alt="scissors" />
        </div>

        <div className="bottom">
          <img id="rock" src="../src/img/rock.png" alt="rock" />
        </div>

        <img id="triangle" src="../src/img/triple.png" alt="triangle" />

        <p></p>
      </div>

      <div className="button">
        <a className="btn" href="../src/rules.html">RULES</a>
      </div>
    </div>
    </>
  )
}

export default App;
