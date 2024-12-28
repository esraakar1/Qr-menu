// menü elemanlarının listeneceği arayüüz htmlden cagır 
const menuList = document.getElementById("menu-list");


// menu elemanlarını render edecek fonksiyon 
export const renderCards = (data) => {
    const cardsHtml = data.map((item) => `  <a href="/details.html?id=${item.id}" class="d-flex flex-column 
    flex-md-row text-dark text-decoration-none gap-3 mx-4 my-4" id="card">
           
    <img src="${item.img}" class="rounded img-fluid shadow" alt="resim">
    <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">$${item.price}</p>
        </div>
        <p>${item.desc}</p>
    </div>
</a>` )
.join("");

// oluşturulan htmli #menulist divi içerisine aktar 
menuList.innerHTML = cardsHtml;
};


export const renderDetailPage = (product, outlet) => {
    outlet.innerHTML = ` <div class="d-flex justify-content-between fs-6">
        <!-- home icon  -->
        <a href="/">
            <img width="35px" src="./images/home.png" alt="">
        </a>
        <!-- sayfa adı -->
         <p>anasayfa / ${product.category} / ${product.title} </p>
      </div>
      <h1 class="text-center my-4">${product.title} </h1>
      <img src="${product.img} " style="max-height: 400px;" class="rounded object-fit-cover shadow" alt="resim">
      <h4 class="mt-4"><span>ürün kategorisi:</span> <span class="text-success">breakfast</span> </h4>
      <h4 class="mt-4">ürün fiyatı <span class="text-success">$${product.price} </span></h4>
      <p class="lead"> ${product.desc} </p> `
};

// ürün bulunamadığında hata sayfasını render eden fonks 

export const renderNotFoundedPage = (outlet) => {
    outlet.innerHTML = `
    <div style='height:90vh' class='d-flex justify-content-center align-items-center'  >
    <div class='d-flex flex-column align-items-center gap-3'>
    <h1 class='fw-bold'>Aradığınız Ürün Mevcut Değil</h1>
    <a href='/'>Anasayfaya Dönün</a>
    </div>
    </div>
    `
};
