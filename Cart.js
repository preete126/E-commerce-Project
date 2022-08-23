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
// let toupdate = []
let getIndex = []
let newCartarr =[]
let DisplayIndex;
let count = 0;
let AddCart =   document.querySelector(".Add")
let CartIndex = document.querySelector(".cartIndex")
let getItem = JSON.parse(localStorage.getItem("MoveItem"))
let getIndexBack = JSON.parse(localStorage.getItem("MoveIndex"))
let getCart = JSON.parse(localStorage.getItem("Cart"))
// let CartLength = JSON.parse(localStorage.getItem("CartLength"))
let searchEng = document.getElementById("searchEng")
let searcheng = document.getElementById("searcheng")
let getfilter = JSON.parse(localStorage.getItem('Searchitem'))
let coll = JSON.parse(localStorage.getItem("Cartcoll"))
let Mycart = JSON.parse(localStorage.getItem("addcart"))
console.log(getfilter)

// console.log(CartLength)
if(getIndexBack ){
    
 getIndex = [...getIndexBack]
 CartIndex.innerHTML = getIndex.length
 console.log(getIndex)
}
// if (CartLength) {
//     getIndex = CartLength
// }


window.addEventListener('load', ()=>{
    CartIndex.innerHTML = getIndex.length
    console.log(getIndex)
    // CartIndex.innerHTML = getIndex.length
    
})
 function getDa() {
    for (let index = 0; index < Mycart.length; index++) {
        return Mycart;
    }
    
 }
 let getD = getDa()
  console.log(getD)
   
  console.log(coll);
    function updatepric() {
    let sum = 0;
    for (let index = 0; index < coll.length; index++) {
        const element = coll[index];
        console.log(index);
        let mainprice =  Number(element.price) * Number(getD[index])
        // console.log(element.price);
      sum += mainprice
        
    }
    // coll.forEach(element => {
    //     console.log(index);
    //     // console.log(element.price);
    //   sum += Number(element.price)
    // });

    // console.log(sum);
    document.getElementById("subtotal").innerHTML = sum ;
    document.getElementById("ordertotal").innerHTML = sum ;
            let more = document.getElementById("subtotal").innerHTML
    
            localStorage.setItem("amount", JSON.stringify(more))

    }
    

    
    function display() {
       coll.map((value, index) => {
            document.getElementById("Display").innerHTML += 
            `
            <div class="d-flex Resize gap-4" >
                <div>
                    <img width = "180px" height="170px" class="images" src="${value.image}" alt="">
                </div>
                <div class="mt-2">
                    <div class = "fs-5 fw-bold font" style="height:60px;">${value.title}</div>
                    <span style=" color: #dd877e; " class= "fw-bold fs-4 pe-4"> <strike>N</strike>${value.price}</span>
                    <span class="fs-5 fw-bold">QTY: </span><input type="number" id="red${index}" value = "${getD[index]}" style="width:40px;" >
                    <div class="mt-3">
                    <span class="fs-5 fw-bold pe-2">Total: <span class = "fs-5 fw-bold" style="color:#dd877e;"><strike >N</strike> <span id="map${index}">${Number(getD[index]) * Number(value.price)}</span></span></span>
                        <button class="btn btn-light ps-3 pe-3 rounded-pill text-white" style="background-color: lightgreen;" onclick="Delete(${index})" >🗑 Remove</button>
    
                    </div>
                </div>
    
            </div>
            `
             

        })
        console.log(getD)
       
       
    }
    display()
    getItem.map((value, index) => {
        document.querySelector('.popular').innerHTML +=
        `
        <a href="ToaddCart.html" id= "incre" style= "background-color: white; margin-top: 10px; box-shadow: 1px 1px 4px lightblue; " onclick = "moveM(${index})" >
            <div class="loop2" ">
            <img width="100%" height="200px" id="increase" src="${value.image}" alt="">
            <div id="title" style="height:60px; font-weight:bold; font-size:14px; ">${value.title}</div>
            <div id="title" class="fs-4 "> <strike>N</strike> ${value.price}</div>
            </div>
        <a/>
        `
    })
    function Delete(index) {
        let reduce = Number(document.getElementById(`red${index}`).value)
        // document.getElementById("Display").innerHTML = ""
        // display()
        getIndex.splice(getIndex.length - 1)
        console.log(getIndex)
        localStorage.setItem('MoveIndex', JSON.stringify(getIndex))
        CartIndex.innerHTML = getIndex.length
        if (reduce > 1) {
            
            reduce = reduce - 1
            document.getElementById(`red${index}`).value = reduce
            getD[index] = reduce
            localStorage.setItem("addcart", JSON.stringify(getD))
        } else {
            document.getElementById("Display").innerHTML = "",
            coll.splice(index, 1)
            display()
            // reduce = reduce - 1
            // document.getElementById(`red${index}`).value = reduce
            getD.splice(index, 1) 
            localStorage.setItem("addcart", JSON.stringify(getD))
            localStorage.setItem("Cartcoll", JSON.stringify(coll))

        }
        window.location.reload()
    }
    function Search() {
       
        console.log(searchEng.value);
        let data = getfilter.filter(e => {
            return e.title.includes(searchEng.value)

        })
        console.log(data)
        localStorage.setItem("searchword",JSON.stringify(data) )
    }
    function SearCh(ev) {
    //    ev.preventDefault()
        console.log(searcheng.value);
        let data = getfilter.filter(e => {
            return e.title.includes(searcheng.value)

        })
        console.log(data)
        localStorage.setItem("searchword",JSON.stringify(data) )
    }
   