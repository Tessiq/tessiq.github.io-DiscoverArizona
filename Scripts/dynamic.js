let output = document.querySelector(".output");
var url = "JSON/All.json";
let myList = [];
let localData = localStorage.getItem("myList");
myList = JSON.parse(localStorage.getItem("myList"));
jsloader();
const Monuments = document.getElementById("one");
Monuments.addEventListener("click", FunctionMonuments);
const Monumentsn = document.getElementById("onen");
Monumentsn.addEventListener("click", FunctionMonuments);
function FunctionMonuments(){
    url = "JSON/Monuments.json";
    jsloader();
}
const Shopping = document.getElementById("two");
Shopping.addEventListener("click", FunctionShopping);
const Shoppingn = document.getElementById("twon");
Shoppingn.addEventListener("click", FunctionShopping);
function FunctionShopping(){
    url = "JSON/Shopping.json";
    jsloader();
}
const Cities = document.getElementById("three");
Cities.addEventListener("click", FunctionCities);
const Citiesn = document.getElementById("threen");
Citiesn.addEventListener("click", FunctionCities);
function FunctionCities(){
    url = "JSON/Tourism Cities.json"
    jsloader();
}
const Community = document.getElementById("four");
Community.addEventListener("click", FunctionCommunity);
const Communityn = document.getElementById("fourn");
Communityn.addEventListener("click", FunctionCommunity);
function FunctionCommunity(){
    url = "JSON/Community.json";
    jsloader();
}
const Sports = document.getElementById("five");
Sports.addEventListener("click", FunctionSports);
const Sportsn = document.getElementById("fiven");
Sportsn.addEventListener("click", FunctionSports);
function FunctionSports(){
    url = "JSON/Sports.json";
    jsloader();
}
const Colleges = document.getElementById("six");
Colleges.addEventListener("click", FunctionColleges);
const Collegesn = document.getElementById("sixn");
Collegesn.addEventListener("click", FunctionColleges);
function FunctionColleges(){
    url = "JSON/Colleges.json";
    jsloader();
}
const Restaurants = document.getElementById("seven");
Restaurants.addEventListener("click", FunctionRestaurants);
const Restaurantsn = document.getElementById("sevenn");
Restaurantsn.addEventListener("click", FunctionRestaurants);
function FunctionRestaurants(){
    url = "JSON/Resturants.json";
    jsloader();
}
function jsloader() {
    fetch(url)
        .then((rep) => rep.json())
        .then((data) => {
            myList = data;
            maker();
            savetoStorage();
            dynamic();
        });
}
function maker() {
    if (document.body.contains(output)) {
        output.innerHTML = " ";
        myList.forEach((el, index) => {
            makeList(el, index);
        });
    }
    else {
        dynamic();
    }
}
function makeList(item, index) {
    const box = document.createElement('div');
    box.className = "box";
    const div = document.createElement('div');
    div.className = "text";
    const img = document.createElement("img");
    const br = document.createElement('br');
    img.src = `${item.image}`;
    img.style.width = "300px";
    img.style.height = "200px"
    img.className = "image";
    img.alt = item.name;
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    h2.innerHTML = item.name;
    p.innerHTML = `${item.info}`;
    output.append(box);
    box.append(img);
    box.append(div);
    div.append(h2);
    div.append(p);
    savetoStorage();
    if(screen.width < 768){
        div.style.fontSize = "12px";
        img.style.width = "40%";
    
    }
}
function savetoStorage() {
    localStorage.setItem("myList", JSON.stringify(myList));
}
function dynamic() {
    var images = document.getElementsByClassName("image");
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function () {
            if (images[i] === images[i]) {
                openInNewTab('LocationMap.html');
                localStorage.setItem("map", i);
            }
        });
    }
}
function openInNewTab(url) {
    const open = window.open(url, '_blank');
    open.focus();
}
