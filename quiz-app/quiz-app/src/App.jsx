import { useState, useEffect } from 'react';
import './App.css';

const htmlData = {
  "html": [
    {
      "question": "HTML neyin kısaltmasıdır?",
      "options": ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinks Text Markup Language"],
      "answer": "Hyper Text Markup Language"
    },
    {
      "question": "Bir HTML sayfasının başlık etiketi hangisidir?",
      "options": ["<head>", "<title>", "<header>", "<meta>"],
      "answer": "<title>"
    },
    {
      "question": "<a> etiketi ne için kullanılır?",
      "options": ["Bağlantı oluşturmak", "Liste oluşturmak", "Resim eklemek", "Paragraf oluşturmak"],
      "answer": "Bağlantı oluşturmak"
    },
    {
      "question": "Bir HTML dosyasının başlangıç etiketi hangisidir?",
      "options": ["<html>", "<body>", "<div>", "<head>"],
      "answer": "<html>"
    },
    {
      "question": "HTML'de resim eklemek için hangi etiket kullanılır?",
      "options": ["<image>", "<img>", "<pic>", "<src>"],
      "answer": "<img>"
    },
    {
      "question": "HTML5'te yerel depolama (local storage) için hangi API kullanılır?",
      "options": ["sessionStorage", "localStorage", "webStorage", "cookieStorage"],
      "answer": "localStorage"
    },
    {
      "question": "<br> etiketi ne işe yarar?",
      "options": ["Sayfa sonu ekler", "Satır sonu ekler", "Paragraf oluşturur", "Boşluk ekler"],
      "answer": "Satır sonu ekler"
    },
    {
      "question": "HTML'de tablo oluşturmak için kullanılan ana etiket nedir?",
      "options": ["<tr>", "<table>", "<td>", "<th>"],
      "answer": "<table>"
    },
    {
      "question": "Bir HTML formunu nereye gönderileceğini belirlemek için hangi özellik kullanılır?",
      "options": ["method", "action", "target", "enctype"],
      "answer": "action"
    },
    {
      "question": "HTML'de yorum satırı nasıl eklenir?",
      "options": ["<!-- Yorum -->", "<comment>Yorum</comment>", "<!--Yorum-->", "// Yorum"],
      "answer": "<!-- Yorum -->"
    }
  ]
}

const cssData = {
  "css": [
    {
      "question": "CSS neyin kısaltmasıdır?",
      "options": ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      "answer": "Cascading Style Sheets"
    },
    {
      "question": "CSS'te arka plan rengi değiştirmek için hangi özellik kullanılır?",
      "options": ["background-color", "color", "background-image", "bg-color"],
      "answer": "background-color"
    },
    {
      "question": "CSS ile metin rengini ayarlamak için hangi özellik kullanılır?",
      "options": ["color", "font-color", "text-color", "background-color"],
      "answer": "color"
    },
    {
      "question": "CSS'te bir öğeyi sola hizalamak için hangi özellik kullanılır?",
      "options": ["float", "align", "left", "text-align"],
      "answer": "float"
    },
    {
      "question": "CSS'te sınıf seçicisi nasıl tanımlanır?",
      "options": [".sınıf", "#sınıf", "sınıf", "class.sınıf"],
      "answer": ".sınıf"
    },
    {
      "question": "CSS'te id seçicisi nasıl tanımlanır?",
      "options": [".id", "#id", "id", "id#"],
      "answer": "#id"
    },
    {
      "question": "CSS'te padding neyi ifade eder?",
      "options": ["İç boşluk", "Dış boşluk", "Kenar boşluğu", "Çerçeve"],
      "answer": "İç boşluk"
    },
    {
      "question": "CSS'te display: none; özelliği ne yapar?",
      "options": ["Öğeyi gizler", "Öğeyi görünür kılar", "Öğenin stilini kaldırır", "Öğenin rengini değiştirir"],
      "answer": "Öğeyi gizler"
    },
    {
      "question": "Bir öğenin görünümünü transparan yapmak için hangi CSS özelliği kullanılır?",
      "options": ["opacity", "visibility", "transparent", "display"],
      "answer": "opacity"
    },
    {
      "question": "CSS'te flexbox yerleşim sisteminde ana ekseni belirlemek için hangi özellik kullanılır?",
      "options": ["justify-content", "align-items", "flex-direction", "align-content"],
      "answer": "flex-direction"
    }
  ]
}

const jsData = {
  "javascript": [
    {
      "question": "JavaScript'i HTML dosyasına nasıl ekleyebilirsiniz?",
      "options": ["<script>", "<javascript>", "<js>", "<code>"],
      "answer": "<script>"
    },
    {
      "question": "JavaScript'te bir değişken nasıl tanımlanır?",
      "options": ["var", "let", "const", "Tümü"],
      "answer": "Tümü"
    },
    {
      "question": "JavaScript'te bir fonksiyon nasıl tanımlanır?",
      "options": ["function myFunction()", "def myFunction()", "create function myFunction()", "function:myFunction()"],
      "answer": "function myFunction()"
    },
    {
      "question": "JavaScript'te bir dizinin (array) uzunluğunu nasıl öğrenirsiniz?",
      "options": ["array.length", "array.size", "array.count", "array.length()"],
      "answer": "array.length"
    },
    {
      "question": "JavaScript'te bir ifadenin doğru olup olmadığını kontrol etmek için hangi anahtar kelime kullanılır?",
      "options": ["if", "else", "while", "for"],
      "answer": "if"
    },
    {
      "question": "JavaScript'te bir döngü oluşturmak için hangi yapı kullanılabilir?",
      "options": ["for", "while", "do-while", "Tümü"],
      "answer": "Tümü"
    },
    {
      "question": "JavaScript'te bir objeye yeni bir özellik nasıl eklenir?",
      "options": ["obj.property = value", "obj['property'] = value", "Tümü", "Eklenemez"],
      "answer": "Tümü"
    },
    {
      "question": "JavaScript'te alert() fonksiyonu ne yapar?",
      "options": ["Bir uyarı mesajı gösterir", "Bir hata mesajı gösterir", "Bir onay kutusu gösterir", "Bir input kutusu gösterir"],
      "answer": "Bir uyarı mesajı gösterir"
    },
    {
      "question": "JavaScript'te '===' operatörü neyi kontrol eder?",
      "options": ["Eşitlik ve tip", "Sadece eşitlik", "Sadece tip", "Eşitsizlik"],
      "answer": "Eşitlik ve tip"
    },
    {
      "question": "JavaScript'te bir dizideki son öğeyi çıkarmak için hangi metod kullanılır?",
      "options": ["pop()", "shift()", "push()", "unshift()"],
      "answer": "pop()"
    }
  ]
}

const optionsChic = ['A', 'B', 'C', 'D'];

function App() {
  const [count, setCount] = useState(0);
  const [showData, setShowData] = useState(null);
  const [buttonColors, setButtonColors] = useState(['', '', '', '']);
  const [check, setCheck] = useState(0);
  const [required, setRequired] = useState(false);



  useEffect(() => {
    localStorage.setItem('count', count);
    localStorage.setItem('check', check);
    localStorage.setItem('showData', JSON.stringify(showData));
  }, [count, check, showData]);

  

  const handleShowHtmlData = () => {
    setCount(0);
    setShowData(htmlData.html);
    setButtonColors(['', '', '', '']);
  };

  const handleShowCssData = () => {
    setCount(0);
    setShowData(cssData.css);
    setButtonColors(['', '', '', '']);
  };

  const handleShowJsData = () => {
    setCount(0);
    setShowData(jsData.javascript);
    setButtonColors(['', '', '', '']);
  };

  const submitAnswer = () => {
    setRequired(true);
    
    if (buttonColors.includes('green')) {
      setCount(count + 1);
      setRequired(false);
    }
    console.log(showData[count]);
    setButtonColors(['', '', '', '']);
  };

  function checkAnswer(optionIndex) {
    if (!showData || !showData[count]) return;

    const correctAnswer = showData[count].answer;
    const newButtonColors = ['', '', '', ''];

    if (showData[count].options[optionIndex] === correctAnswer) {
      newButtonColors[optionIndex] = 'green';
      setCheck(prevCheck => prevCheck + 1);
    } else {
      newButtonColors[optionIndex] = 'red';
      const correctIndex = showData[count].options.indexOf(correctAnswer);
      newButtonColors[correctIndex] = 'green';
    }

    setButtonColors(newButtonColors);
  }

  useEffect(() => {
    console.log(check);
  }, [check]);

  function playAgain(){
    setShowData(null);
    setCount(0);
  }

  function Quiz() {
    if (!showData || !showData[count]) return null;

    return (
      <>
        <div className={count === 10 ? 'none' : 'quiz-container'}>
          <div className='quiz-questions'>
            <span>Question {count + 1} of {showData.length}</span>
            <p>{showData[count].question}</p>
          </div>
          <div className='quiz-buttons'>
            {showData[count].options.map((option, index) => (
              <button
                key={index}
                className={buttonColors[index]}
                onClick={() => checkAnswer(index)}
                disabled={buttonColors[index] === 'green'}
              >
                <p>{optionsChic[index]} </p> <h5>{option}</h5> 
                <span className={buttonColors[index] === 'green' ? '' : 'none'}>
                  <img src='../src/assets/true.svg' />
                </span>
                <span className={buttonColors[index] === 'red' ? '' : 'none'}>
                  <img src='../src/assets/false.svg' />
                </span>
              </button>
            ))}
            <button className='submit-btn' onClick={submitAnswer}>Submit Answer</button>
            <p className={required ? 'red-validate' : 'none'}> 
              <img src='../src/assets/Vector (2).svg' /> Please select an answer
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">

        <div className="header">
          <div>
            <img src="../src/assets/purple.svg"/>
            <p>Accessibility</p>
          </div>
          <img src="../src/assets/darkmode.svg"/>
        </div>
        
        <div className={!showData ? 'start' : 'none'}>

        <div className='context'>
          <p>Welcome to the </p>
          <h1>Frontend Quiz!</h1>
          <span>Pick a subject to get started.</span>
        </div>

        <div className='options'>
          <button onClick={handleShowHtmlData}><img src="../src/assets/html.svg"/>HTML</button>
          <button onClick={handleShowCssData}><img src="../src/assets/css.svg"/>CSS</button>
          <button onClick={handleShowJsData}><img src="../src/assets/js.svg"/>Javascript</button>
          <button disabled><img src="../src/assets/purple.svg"/>Accessibility</button>

        </div>


        </div>

        

        <div className={showData && count < 10 ? 'quiz' : 'none'}>
          {showData && <Quiz />}
        </div>

        <div className={count === 10 ? 'completed' : 'none'}>
          <div className='text'>
            <p>Quiz completed</p>
            <span>You scored...</span>
          </div>

          <div className="score">
           <div>
            <p className='score-head'><img src="../src/assets/purple.svg"/> Accessibility</p>
            <p className='score-number'>{check}</p>
            <p className='total-questions'>out of {showData ? showData.length : 0}</p>
            
           </div>

           <button onClick={playAgain}>Play Again</button>

          </div>
        
        </div>
      </div>
    </>
  );
}

export default App;

