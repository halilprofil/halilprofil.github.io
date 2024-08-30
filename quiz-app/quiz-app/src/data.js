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