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

let getIndex = []
let newCartarr =[]
let DisplayIndex;
let count = 0;
let AddCart =   document.querySelector(".Add")
let CartIndex = document.querySelector(".cartIndex")
let getItem = JSON.parse(localStorage.getItem("MoveItem"))
let getIndexBack = JSON.parse(localStorage.getItem("MoveIndex"))
let getCart = JSON.parse(localStorage.getItem("Cart"))

let SearchArray = [
    { image: "smat-ap.webp", title: "Computers and Accessories", price: "170000" },
    { image: "mobile.webp", title: "Mobile Accessories", price: "15000" },
    { image: "mobile-acce.webp", title: "Mobile Accessories", price: "15000" },
    { image: "game.webp", title: "Video games", price: "35000" },
    { image: "vid.webp", title: "Video games", price: "35000" },
    { image: "grocery.jpg", title: "Groceries", price: "30000" },
    { image: "grocery&.jfif", title: "Groceries", price: "30000" },
    { image: "health.webp", title: "Health and beauty", price: "22000" },
    { image: "health&.webp", title: "Health and beauty", price: "22000" },
    { image: "smart-phone.webp", title: "Smartphones", price: "95000" },
    { image: "thermo.jpg", title: "Haier Thermocool 100 litres Chest freezer", price: "180000" },
    { image: "power-solutions.webp", title: "Generators & Power Solution", price: '68000' },
    { image: "phonecoll.webp", title: "Phone and Tablet", price: "97000" },
    { image: "flower-bag.webp", title: "Portable backpack for ladies", price: "3489.30" },
    { image: "kid-fashion.webp", title: "High Quality Kids Fashion Snickers", price: "3789.90" },
    { image: "Nexus1.jpg", title: "Nexus NX-100 litre Nexus Fridge - silver", price: "172000" },
    { image: "aircon.jpg", title: "Nexus 1hp Split Air Conditioner", price: "48000" },
    { image: "back-pack-durable.webp", title: "Extra durable backpack", price: "2489.40" },
    { image: "computers.webp", title: "Computers and Accessories", price: "230000" },
    { image: "male-top3.webp", title: "Quality Designer T -Shirt", price: "1389.60" },
    { image: "infinix.jpg", title: "Infinix Hot 11S - Green Waves", price: "95000" },
    { image: "mini-purse.webp", title: "Off-White Gold Chain Mini Bag", price: "2689.20" },
    { image: "wrist.jpg", title: "Men's Wrist Watches", price: "2289.30" },
    { image: "pocket.webp", title: "Airtel 4G Pocket wiFi", price: "7500" },
    { image: "sam-phone.jpg", title: "Samsung Galaxy A13", price: "95000" },
    { image: "oil.webp", title: "Devon vegetable Oil", price: "7560" },
    { image: "beauty-hc.webp", title: "Make Up set", price: "2289.30" },
    { image: "pasta.webp", title: "Golden Penny Spaghetti", price: "8725" },
    { image: "home-kitchen.webp", title: "Home & kitchen Utensils", price: "28900" },
    { image: "7up.webp", title: "7Up Free 40cl x 12", price: "1100" },
    { image: "snicker2.webp", title: "Men's Fashion Snickers", price: "5490.00" },
    { image: "back-pack.webp", title: "Ladies Mini Cross Bag", price: "2989.80" },
    { image: "bag-3.webp", title: "Black Gold Chain Mini  Bag", price: "2989.80" },
    { image: "bag-4.webp", title: "Patent Leather Bucket Bags", price: "4489.20" },
    { image: "bag-6.webp", title: "Designer Shoulder Clutch Bags", price: "2989.80" },
    { image: "bag.webp", title: "Cubed Designer Ladies Bags", price: "5490.00" },
    { image: "bag-7.webp", title: "Ladies Tedy Mini BackPack", price: "3289.50" },
    { image: "hand-bag.webp", title: "Sparkling Ladies Bag", price: "1989.90" },
    { image: "bag-5.webp", title: "Designer Shoulder Clutch Bags", price: "2989.80" },
    { image: "fancy-snicker.webp", title: "Ladies Fancy Snickers", price: "2689.20" },
    { image: "nwe-s.webp", title: "Ladies Fancy Snickers", price: "2689.20" },
    { image: "mensh.jpg", title: "Men's Quality Snickers", price: "5899.20" },
    { image: "shoe1.jpg", title: "Kids Fashion Snickers", price: "3699.90" },
    { image: "shoe2.jpg", title: "Men's Quality Snickers", price: "5899.20" },
    { image: "sh.png", title: "Kids Fashion Snickers", price: "3699.90" },
    { image: "kid-snickers.webp", title: "Kids Fashion Snickers", price: "3699.90" },
    { image: "snickers.webp", title: "Men's Casual Fashion Snickers ", price: "5490.00" },
    { image: "snicker2.webp", title: "Men's Fashion Snickers ", price: "3999.60" },
    { image: "kid-fashion.webp", title: "Kids Fashion Snickers", price: "3789.90" },
    { image: "ladies-snicker.webp", title: "Ladies Fancy Snickers", price: "5289.30" },
    { image: "fashionable-snicker.webp", title: "Smart Fashionable Snicker -Pink", price: "5289.30" },
    { image: "crystal.webp", title: "Ladies Crystal Fashion Slippers", price: "2989.80" },
    { image: "crystal2.webp", title: "Ladies Crystal Fashion Slippers", price: "2989.80" },
    { image: "luminous.webp", title: "Ladies Luminous Fashion Snickers", price: "5289.80" },
    { image: "sexydress.webp", title: "Ladies Sexy Party Dress -Black", price: "3998.70" },
    { image: "bodyhug.webp", title: "Ladies Elegant Shining Gown - Claret Red", price: "5490.00" },
    { image: "beauty-hc.webp", title: "Make Up Set ", price: "2289.30" },
    { image: "earring.webp", title: "Pearl Gold Earring", price: "689.40" },
    { image: "gold-p.webp", title: "Pearl and Rhinestone Gold Earrings", price: "697.50" },
    { image: "pearls.webp", title: "Pearl Ear bones Gold Earrings.", price: "679.50" },
    { image: "lady-trouser.webp", title: "Ladies Elastic Slim Trouser", price: "4489.20" },
    { image: "lady-baggie.webp", title: "Ladies Stitched Fancy Jeans", price: "4489.20" },
    { image: "male-top4.webp", title: "Men's Latest T-Shirts -Teel", price: "3989.70" },
    { image: "male-top5.webp", title: "Men's Trend T-Shirt -Yellow ", price: "3989.70" },
    { image: "male-top6.webp", title: "Men's Latest Designer T-Shirts ", price: "3989.70" },
    { image: "male-top7.webp", title: "Men's Latest Designer T-Shirts", price: "3989.70" },
    { image: "male-top2.webp", title: "Quality Trendy Designer T-shirts", price: "3989.70" },
    { image: "latest-top.webp", title: "Latest Designer T-Shirts -Black", price: "3989.70" },
    { image: "latest2.webp", title: "Latest Designer T-Shirts -Black", price: "3989.70" },
    { image: "latest-3.webp", title: "Latest Designer T-Shirts ", price: "3989.70" },
    { image: "plain1.jpg", title: "Men's plain Designer Hoodie - white ", price: "2989.80" },
    { image: "plain2.webp", title: "Men's plain Designer Hoodie - Black", price: "2989.80" },
    { image: "hoodie1.jpg", title: "Men's Designer Printed Hoodie", price: "3999.60" },
    { image: "hoodie2.jpg", title: "Men's Designer Printed Hoodie", price: "3999.60" },
    { image: "short1.webp", title: "Men's Designer Short", price: "3489.30" },
    { image: "short2.webp", title: "Men's Designer Short", price: "3489.30" },
    { image: "short3.webp", title: "Men's Designer Short", price: "3489.30" },
    { image: "trouser1.webp", title: "Men's Elastic Slim Jeans - Blue", price: "5490.00" },
    { image: "trouser2.webp", title: "Men's Quality Fitted Blue Jeans", price: "4689.90" },
    { image: "pant.webp", title: "Men's Casual Breathable Pants Trousers", price: "3489.30" },
    { image: "trouser4.webp", title: "Men's Quality Black Jeans", price: "4999.50" },
    { image: "lap1.jpg", title: "Portable Laptops", price: "180989.30" },
    { image: "lap2.jpg", title: "Portable Laptops", price: "180989.30" },
    { image: "lap3.jpg", title: "Portable Laptops", price: "180989.30" },
    { image: "lap4.jpg", title: "Portable Laptops", price: "180989.30" },
    { image: "lap5.jpg", title: "Portable Laptops", price: "180989.30" },
    { image: "phone&.jpg", title: "Men's Designer Short", price: "3489.30" },
    { image: "phone2&.jpg", title: "Men's Elastic Slim Jeans - Blue", price: "5490.00" },
    { image: "phone2.jpg", title: "Men's Quality Fitted Blue Jeans", price: "4689.90" },
    { image: "phone3.jpg", title: "Men's Quality Black Jeans", price: "4999.50" },
    { image: "s22.webp", title: "Men's Quality Black Jeans", price: "4999.50" },
    { image: "ultra.webp", title: "Men's Quality Black Jeans", price: "4999.50" },
    { image: "a1.jpg", title: "Alcoholic Portable Wine", price: "3490.00" },
    { image: "a2.jpg",  title: "Alcoholic Portable Wine", price: "3490.00" },
    { image: "a3.jpg", title: "Non-Alcoholic Tonic Wine", price: "2890.50" },
    { image: "a4.jpg",  title: "Alcoholic Portable Wine", price: "3490.00"  },
    { image: "a5.jpg",title: "Non-Alcoholic Tonic Wine", price: "2890.50" },
    { image: "a6.jpg",  title: "Alcoholic Portable Wine", price: "3490.00" },
    { image: "a7.webp", title: "Non-Alcoholic Tonic Wine", price: "2890.50" }
]
let topdeal = document.getElementById("topdeal")
let searchEng = document.getElementById("searchEng")
let searcheng = document.getElementById("searcheng")
localStorage.setItem("Searchitem", JSON.stringify(SearchArray))
let getfilter = JSON.parse(localStorage.getItem('Searchitem'))
let getsearch = JSON.parse(localStorage.getItem('searchword'))
for (let index = 0; index < getsearch.length; index++) {
        const element = getsearch[index];
          topdeal.innerHTML +=
        `
            <a href="#" id= "incre" style= "background-color: white; margin-top: 10px; box-shadow: 1px 1px 4px lightblue;  " onclick = "moveT(${index})" >
                <div class="loop2" ">
                <img width="100%" height="200px" id="increase" src="${element.image}" alt="">
                <div id="title" style="height:60px">${element.title}</div>
                <div id="title" class="fs-4 fw-bold"> <strike>N</strike> ${element.price}</div>
                </div>
            </a>
        `
    }
console.log(getfilter);

function Search(event) {
    event.preventDefault()
    topdeal.innerHTML = " ";
    console.log(searchEng.value);
    let data = getfilter.filter(e => {
        return e.title.includes(searchEng.value)

    })
    console.log(data)
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        topdeal.innerHTML +=
        `
            <a href="#" id= "incre" style= "background-color: white; margin-top: 10px; box-shadow: 1px 1px 4px lightblue;  " onclick = "moveT(${index})" >
                <div class="loop2" ">
                <img width="100%" height="200px" id="increase" src="${element.image}" alt="">
                <div id="title" style="height:60px">${element.title}</div>
                <div id="title" class="fs-4 fw-bold"> <strike>N</strike> ${element.price}</div>
                </div>
            </a>
        `
    }


}
function SearCh(event) {
    event.preventDefault()
    topdeal.innerHTML = " ";
    console.log(searcheng.value);
    let data = getfilter.filter(e => {
        return e.title.includes(searcheng.value)

    })
    console.log(data)
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        topdeal.innerHTML +=
        `
            <a href="#" id= "incre" style= "background-color: white; margin-top: 10px; box-shadow: 1px 1px 4px lightblue;  " onclick = "moveT(${index})" >
                <div class="loop2" ">
                <img width="100%" height="200px" id="increase" src="${element.image}" alt="">
                <div id="title" style="height:60px">${element.title}</div>
                <div id="title" class="fs-4 fw-bold"> <strike>N</strike> ${element.price}</div>
                </div>
            </a>
        `
    }


}


if(getIndexBack != null){
    
 getIndex = [...getIndexBack]
 console.log(getIndex)
}


window.addEventListener('load', ()=>{
    CartIndex.innerHTML = getIndex.length
    console.log(getIndex)
    // CartIndex.innerHTML = getIndex.length
    
})
   
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
        document.getElementById("Display").innerHTML = ""

        getIndex.splice(index, 1)
        display()
        console.log(getIndex[index])
        localStorage.setItem('CartLength', JSON.stringify(getIndex))
        CartIndex.innerHTML = getIndex.length

    }
   
    
