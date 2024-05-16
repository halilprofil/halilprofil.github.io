let hareketler = ["taş","kağıt","makas"];

let rastgeleSayi =Math.round(Math.random()*2);;

let bilgisayarHamlesi = hareketler[rastgeleSayi];

console.log(bilgisayarHamlesi);

let kullaniciHamlesi =  prompt("Taş,Kağıt,Makas'dan birini seçiniz.");

let hamle = kullaniciHamlesi.toLowerCase();

console.log(hamle);

if(hamle==bilgisayarHamlesi){
    alert(bilgisayarHamlesi+" berabere...");
}

if(hamle=="taş" && bilgisayarHamlesi=="kağıt"){
    alert(bilgisayarHamlesi+" kaybettin...");
}

if(hamle=="taş" && bilgisayarHamlesi=="makas"){
    alert(bilgisayarHamlesi+" kazandın...");
}


if(hamle=="makas" && bilgisayarHamlesi=="kağıt"){
    alert(bilgisayarHamlesi+" kazandın...");
}

if(hamle=="makas" && bilgisayarHamlesi=="taş"){
    alert(bilgisayarHamlesi+" kaybettin...");
}

if(hamle=="kağıt" && bilgisayarHamlesi=="taş"){
    alert(bilgisayarHamlesi+" kazandın...");
}

if(hamle=="kağıt" && bilgisayarHamlesi=="makas"){
    alert(bilgisayarHamlesi+" kaybettin...");
}

if (!hareketler.includes(hamle)) {
    alert("Lütfen geçerli bir tercih yapınız...");
}