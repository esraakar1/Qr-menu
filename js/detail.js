// javascripteki url parametrelerini URLSearchParams classıyla daha kolay bir 
// şekilde yönetebiliriz bu clas kendine urlin parametre olarak girilmesini ister 
// devamında get metoduyla ilgili parametre alır 

import { renderDetailPage, renderNotFoundedPage} from "./ui.js";

const  params = new URLSearchParams(window.location.search);

// yukarıdaki class tan örnek alınarak url deki parametreye ulaşıldı 

const id = parseInt(params.get("id"));

// ürün detayının aktarılacağı html elemanı 
const outlet = document.getElementById('outlet');


// sayfa yüklendiğinde çalışacak fonskiyon 

document.addEventListener("DOMContentLoaded", async () => {
    // db.json dosyasına istek at 
  const res = await fetch("../db.json");
//   verileri js nesnesine cevir 
  const data = await res.json();

//   id ye göre ilgili elemanı bul 
  const product = data.menu.find((item) => item.id === id);
  if(!product){
// ürün bulunamadı içeriğini render et
    
  renderNotFoundedPage(outlet);
  
  } else {console.log(product);

    renderDetailPage(product, outlet);
}
  
});


