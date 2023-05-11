const humberger = document.querySelector('.humberger')
const nav = document.querySelector('.nav')

const product = document.querySelector('.product')
const productItem = document.querySelector('.nav-item-product')

const connect = document.querySelector('.connect')
const connectItem = document.querySelector('.nav-item-connect')

const company = document.querySelector('.company')
const companyItem = document.querySelector('.nav-item-company')

const designIcon = document.querySelector('.design-icon')
const aboutIcon  = document.querySelector('.about-icon')



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
})



connect.addEventListener('click', ()=>{  
  connectItem.classList.toggle('none')
    companyItem.classList.add('none')
    productItem.classList.add('none')
})



const mediaQuery = window.matchMedia("(min-width: 900px)");

function handleResize(e) {
  if (e.matches) {
    designIcon.src = './images/illustration-editor-desktop.svg'
    aboutIcon.src = './images/illustration-laptop-desktop.svg'
  } else {
    designIcon.src = './images/illustration-editor-mobile.svg'
    aboutIcon.src = './images/illustration-laptop-mobile.svg'
  }
}

mediaQuery.addEventListener('change',handleResize); // add listener
handleResize(mediaQuery);