
var item = localStorage.getItem("map");
var list = localStorage.getItem("myList");
const myList = JSON.parse(list);
var i = Number(item);
var sidebar = document.querySelector(".sidebar");
var map = document.querySelector(".map");
function makeMap() {
    var item = myList[i];
    var img = document.createElement('img');
    var content = document.createElement('div');
    content.className="content";
    var title = document.createElement('h2');
    var address = document.createElement('div');
    address.className="address";
    var ad = document.createElement('p');
    const p = document.createElement('p');
    p.innerHTML = `${item.info}`;
    img.src = `${item.image}`;
    img.style.width = "100%";
    img.id="item-image";
    img.alt = item.name;
    title.innerHTML = `${item.name}`;
    var add = document.createElement('img');
    add.src="JS_Img/map.webp";
    add.style.width = "16px";
    add.style.height= "20px";
    var site = document.createElement('a');
    var svg = document.createElement('img');
    svg.src="JS_Img/web.png";
    site.innerHTML = item.website;
    site.href = item.website
    svg.style.width = "20px";
    svg.style.height= "20px";
    site.style.overflow = "auto";
    svg.addEventListener("click", function(){
        openInNewTab(item.website);
    });
    var space = document.createElement('br');
    ad.innerHTML = item.address;
    sidebar.append(img);
    sidebar.append(content);
    content.append(title);
    content.append(address);
    address.append(add);
    address.append(ad);
    address.append(space);
    address.append(svg);
    address.append(site);
    content.append(p);
    map.innerHTML=`<iframe src="${item.map}"></iframe>`;
    function openInNewTab(url) {
        const open = window.open(url, '_blank');
        open.focus();
    }
}
makeMap();