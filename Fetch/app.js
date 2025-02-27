var getContainer=document.getElementById('container')
var getBTN=document.getElementsByClassName('btn')
var getScr=document.querySelector('.screen')
fetch('https://fakestoreapi.com/products')
.then(data=>data.json())
.then(data=>{
    data.map((cv,ci)=>{
        getContainer.innerHTML+=`<div class="card col-10 col-sm-6 col-md-3 m-5 p-2">
          <img src="${cv['image']}" class="card-img-top" alt="">
          <div class="card-body d-flex flex-column justify-content-evenly">
            <h5 class="card-title">${cv['category']}</h5>
            <p class="card-text">ID: ${cv['id']}</p>
            <p class="card-text">Title: ${cv['title']}</p>
            <p class="card-text">Price: ${cv['price']}$</p>
            <p class="card-text">Description: ${cv['description']}</p>
            <button class="btn btn-primary" onclick="addToCart(this)" value=${ci}>Add to cart</button>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>`
    })
})
.catch(()=>{
    getContainer.innerHTML='<img src="oops.jpg" alt="">'
})
function addToCart(a){
  a.innerText='Remove from Cart'
  getScr.appendChild(Array.from(getBTN)[a.value].parentNode.parentNode)
}