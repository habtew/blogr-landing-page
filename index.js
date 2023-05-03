const humberger = document.querySelector('.humberger')
const nav = document.querySelector('.nav')

const product = document.querySelector('.product')
const productItem = document.querySelector('.nav-item-product')

const connect = document.querySelector('.connect')
const connectItem = document.querySelector('.nav-item-connect')

const company = document.querySelector('.company')
const companyItem = document.querySelector('.nav-item-company')

humberger.addEventListener('click', ()=>{
    nav.classList.toggle('none-nav')
})

product.addEventListener('click', ()=>{
    productItem.classList.toggle('none')
    companyItem.classList.add('none')
    connectItem.classList.add('none')
})

company.addEventListener('click', ()=>{
    companyItem.classList.toggle('none')
    productItem.classList.add('none')
    connectItem.classList.add('none')
    // console.log(productItem)
})


connect.addEventListener('click', ()=>{
    connectItem.classList.toggle('none')
    companyItem.classList.add('none')
    productItem.classList.add('none')
    // console.log(productItem)
})



const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleResize(e) {
  if (e.matches) {
    console.log("Window width is at least 768px");
  } else {
    console.log("Window width is less than 768px");
  }
}

mediaQuery.addEventListener('change',handleResize); // add listener
handleResize(mediaQuery); // call once at start to set initial state
