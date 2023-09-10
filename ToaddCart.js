function DForH(){
    document.querySelector('.Forhome').hidden = false
}
function DForW() {
    document.querySelector(".Forwomen").hidden = false
}
function DForM() {
    document.querySelector(".Formen").hidden = false
}
function DForC() {
    document.querySelector(".Forchildren").hidden = false
}
function DforJ() {
    document.querySelector(".Forjewelry").hidden = false
}
function DforA() {
    document.querySelector(".ForAll").hidden = false
}

function Account() {
    document.querySelector(".Profile").hidden = false
}
function ForW() {
    document.querySelector(".Forwomen").hidden = true
}
function ForM() {
    document.querySelector(".Formen").hidden = true
}
function ForC() {
    document.querySelector(".Forchildren").hidden = true
}
function ForJ() {
    document.querySelector(".Forjewelry").hidden = true
}
function ForA() {
    document.querySelector(".ForAll").hidden = true
}
function ForH() {
    document.querySelector(".Forhome").hidden = true
}
function remP() {
    document.querySelector(".Profile").hidden = true
}
function account() {
    document.querySelector(".PRofile").hidden = false
}
function RemP() {
    document.querySelector(".PRofile").hidden = true
}
let toggle = "yes"
function D1() {
    if (toggle == "yes") {
        document.getElementById("accordion1").style.display = "block"
        toggle = "no"
    } else {
        document.getElementById("accordion1").style.display = "none"
        toggle = "yes"
    }
}
function D2() {
    if (toggle == "yes") {
        document.getElementById("accordion2").style.display = "block"
        toggle = "no"
    } else {
        document.getElementById("accordion2").style.display = "none"
        toggle = "yes"
    }
}
function D3() {
    if (toggle == "yes") {
        document.getElementById("accordion3").style.display = "block"
        toggle = "no"
    } else {
        document.getElementById("accordion3").style.display = "none"
        toggle = "yes"
    }
}
function D4() {
    if (toggle == "yes") {
        document.getElementById("accordion4").style.display = "block"
        toggle = "no"
    } else {
        document.getElementById("accordion4").style.display = "none"
        toggle = "yes"
    }
}

let add = []
let Cartcoll = []
let getIndex = []
let newCartarr =[]
let DisplayIndex;
let count = 0;
let AddCart =   document.querySelector(".Add")
let CartIndex = document.querySelector(".cartIndex")
let getItem = JSON.parse(localStorage.getItem("MoveItem"))
// newCartarr.push(getItem)
document.getElementById("imagg").src = getItem[getItem.length - 1].image
document.getElementById("Title").innerHTML = getItem[getItem.length - 1].title
document.getElementById("price").innerHTML = getItem[getItem.length - 1].price
let getIndexBack = JSON.parse(localStorage.getItem("MoveIndex"))
let getCart = JSON.parse(localStorage.getItem("Cart"))
// let CartLength = JSON.parse(localStorage.getItem("CartLength"))
let getfilter = JSON.parse(localStorage.getItem("Searchitem"))
let coll = JSON.parse(localStorage.getItem("Cartcoll"))
let Mycart = JSON.parse(localStorage.getItem("addcart"))
let searchEng = document.getElementById("searchEng")
let searcheng = document.getElementById("searcheng")

if(getIndexBack != null){
    
 getIndex = [...getIndexBack]
 console.log(getIndex)
}
// if(CartLength){
//     getIndex = CartLength
// }
if(coll != null){
    Cartcoll = coll
}
if(Mycart != null){
    add = Mycart
}
if (getItem != null) {
    newCartarr = getItem
}
function Add() {
    count++
  AddCart.innerHTML = count
  getIndex.push(getItem[getItem.length - 1])
  console.log(getIndex)
}
function sub() {
    
    
    if(count == 1){
      AddCart.disabled = true
      AddCart.innerHTML = count
        
    }else if(count >= 1 ){
        count--
      AddCart.innerHTML = count
      AddCart.disabled = false
      console.log(getIndex)
      getIndex.splice(getIndex.length- 1)
      console.log(getIndex)
    }
}
// if(getItem != null){
//     console.log(getItem)
//  getIndex.push(getItem)
//  console.log(getIndex)
// }

function Addtocart(){
    // CartIndex.innerHTML = getIndexBack.length
    
    CartIndex.innerHTML = getIndex.length 
    Cartcoll.push(getItem[getItem.length - 1])
    add.push(AddCart.innerHTML)
    localStorage.setItem("MoveIndex", JSON.stringify(getIndex))
    localStorage.setItem("Cartcoll", JSON.stringify(Cartcoll))
    localStorage.setItem("addcart", JSON.stringify(add))


    window.location.reload()
    
}
window.addEventListener('load', ()=>{
    CartIndex.innerHTML = getIndex.length 
})
getItem.map((value, index) => {
    document.querySelector('.popular').innerHTML +=
    `
    <a href="view-item.html" id= "incre" style= "background-color: white; margin-top: 10px; box-shadow: 1px 1px 4px lightblue; " onclick = "moveM(${index})" >
        <div class="loop2" ">
        <img width="100%" height="200px" id="increase" src="${value.image}" alt="">
        <div id="title" style="height:60px;">${value.title}</div>
        <div id="title" class="fs-4"> <strike>N</strike> ${value.price}</div>
        </div>
    <a/>
    `
})
getCart.map((value, index) => {
    document.querySelector('.like').innerHTML +=
    `
    <a href="view-item.html" id= "incre" style= "background-color: white; margin-top: 10px; box-shadow: 1px 1px 4px lightblue; " onclick = "move(${index})" >
        <div class="loop2 " >
        <img width="100%" height="200px" id="increase" src="${value.image}" alt="">
        <div id="title" style="height:60px;">${value.title}</div>
        <div id="title" class="fs-5"> <strike>N</strike> ${value.price}</div>
        </div>
    <a/>
    `
})
function Search() {
       
    console.log(searchEng.value);
    let data = getfilter.filter(e => {
        return e.title.includes(searchEng.value)

    })
    console.log(data)
    localStorage.setItem("searchword",JSON.stringify(data) )
}
function SearCh() {
       
    console.log(searcheng.value);
    let data = getfilter.filter(e => {
        return e.title.includes(searcheng.value)

    })
    console.log(data)
    localStorage.setItem("searchword",JSON.stringify(data) )
}
function move(params) {
    newCartarr.push(getCart[params])
    localStorage.setItem("MoveItem", JSON.stringify(newCartarr))
}