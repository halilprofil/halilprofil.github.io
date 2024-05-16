alert("Gözlerinizi açtığınızda etrafınızı kaplayan tropik bir ormanın içindesiniz. Yanınızda sadece birkaç eşya ve bir pusula bulunuyor. Karşınıza çıkan ilk yol ayrımında ne yapacaksınız?")


let yeniSatir="\n"

let tercih = prompt("bir tercih yapın(1,2,3 vb.)"+yeniSatir+"1.Ormana yönelmek"+yeniSatir+"2.Sahile doğru yürümek"+yeniSatir+"3.Dağlara tırmanmak.");

if(tercih==1){
    alert("Adım adım ormanın derinliklerine doğru ilerlediniz. Karşınıza bir nehir çıktı. Nehri geçmek için karşıya bir köprü buldunuz. Köprüyü kullanarak nehrin karşısına geçtiniz."+"Yol boyunca bir mağara gördünüz. Mağaraya girme seçeneğiniz vardı. Mağarayı keşfetmek istiyor musunuz? Evet veya hayır olarak cevaplayın.")
    let magara= prompt("EVET/HAYIR");
    let upperMagara = magara.toUpperCase();

    if(upperMagara=="EVET"){
        alert("Mağaranın karanlık girişinden içeri adım attınız. Giderek daralan geçitte ilerlediniz ve sonunda geniş bir mağara salonuna ulaştınız. Mağaranın içindeki sarkıt ve dikitlerin arasında ilerlerken, bir ışık huzmesi fark ettiniz. Işığın geldiği yöne doğru ilerlediniz ve sonunda bir gizli geçidi keşfettiniz. Geçitten geçtikten sonra karşınıza muhteşem bir manzara çıktı. Adanın diğer kıyısını görebiliyordunuz. Mağaranın keşfi, size adadan kurtulma umudu verdi.");
    }
    else(alert("Mağaranın girişini gördüğünüzde, içeri adım atmaktan çekindiniz. Mağaranın içindeki bilinmeyenlerden dolayı endişe duydunuz ve mağaradan uzak durmaya karar verdiniz. Yola devam etmek için mağaranın etrafından dolanmaya başladınız. Bu seçim sizi ormanın derinliklerinde daha fazla keşfe ve maceraya yönlendirdi."));
    
    if(upperMagara=="HAYIR"){
        alert("yeni maceralar için ormana yöneldiniz.Lakin hava gittikçe karamaya başlamıştı.Gözleriniz karanlığa alışmaya çalışırken, bir ayı saldırısıyla karşı karşıya olduğunuzu fark ettiniz. Ayı, hızla size doğru ilerlerken, bir anlık panikle harekete geçtiniz. Ancak ne yazık ki, ayının gücü ve hızı karşısında savunmasız kaldınız. Saldırıya maruz kaldığınızda, çaresiz bir şekilde mücadele ettiniz ancak sonunda ayının pençeleri altında hayatınızı kaybettiniz.")
    }
}



if(tercih==2){
    alert("Sahil boyunca ilerlerken, karşınıza çıkan bir keşif noktası bir kamp alanı oluyor. Kamp alanında bir grup maceracı kamp ateşi etrafında toplanmış, hikayeler anlatıyorlar. Bu maceralar arasına katılmak ister misiniz?")
    let sahil= prompt("EVET/HAYIR");
    let upperSahil = sahil.toUpperCase();

    if(upperSahil=="EVET"){
        alert("Kamp ateşi etrafında toplanan maceracıların arasına katıldınız. Her biri kendi macera hikayesini anlatıyor ve deneyimlerini paylaşıyor. Onlarla sohbet ederek yeni arkadaşlar edindiniz ve farklı maceraları dinleyerek ilham aldınız. Kamp ateşi etrafında geçirdiğiniz zaman, size yeni fikirler ve bilgi dolu anılar kazandırdı.");
    }
    else(alert("Kamp alanına yaklaştığınızda, kalabalık ve gürültülü ortamdan hoşlanmadığınızı fark ettiniz. Bu nedenle kamp ateşi etrafında toplanan maceracıların arasına katılmaktan vazgeçtiniz. Yalnızca kamp alanının çevresinde biraz vakit geçirerek, dinlenmeye ve doğanın sessizliğinin tadını çıkarmaya karar verdiniz."));

    if(upperSahil=="HAYIR"){
        alert("Sonunda, sessiz ve sakin düşünceleriniz size adadan kurtulma konusunda yeni bir strateji geliştirmenize yardımcı oldu. Yalnızca sessizliğin ve doğanın gücüne güvenerek, adadan kurtuluş için yeni bir yol buldunuz.");
    }
    
}


if(tercih==3){
    alert("Korkusuzca dağların zirvesine doğru tırmanan bir maceracı, önünde üç farklı yolculuk seçeneğiyle karşı karşıyadır. Etrafı saran dağların heybeti ve manzaraları, ona doğanın gücünü ve büyüsünü hatırlatırken, her bir seçeneğin hayatını sonsuza kadar değiştirebileceğinin farkındadır.")
    let dag= prompt("bir tercihte bulunun...(1,2,3 vb.)"+yeniSatir+"1.Kısa yol"+yeniSatir+"2.Orta yol"+yeniSatir+"3.Zor yol");

    if(dag==1){
        alert("Kısa yol boyunca ilerlerken, aniden yüksek sesli bir gürültü duyar ve gökyüzü kapkaranlık bir beyaza bürünür. Bir çığla karşı karşıyadır ve çığın altında kalır. Gözleri kapanırken, son hatırası dağların eteklerindeki sessizliktir.");
    }
    
    if(dag==2){
        alert("Her zorlu adımda, gücünü ve kararlılığını hisseder. Sonunda, yorgun ama sağlam bir şekilde dağların zirvesine ulaşır. Zirveden manzarayı seyrettiğinde, içi huzur ve gurur doludur. Bu seçim, ona başarı ve zaferin tadını yaşatır.");

    }

    if(dag==3){

        alert("Cesur maceracı, en zorlu ve en kısa yolu seçer. Tehlikelerin farkındadır ancak risk almayı göze alır."+
        "Ancak zorlu yol, onu beklenmedik bir felakete sürükler. Bir kayalıkta sıkışıp kalır ve yardım çağrılarına kulak verilmez. Son nefesini, dağların yamacında, doğanın kucaklayıcı sessizliği içinde verir.");
    }
    
    
}