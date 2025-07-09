let div = document.getElementById("header");
let img1 = document.createElement("img");
let div2 = document.getElementById("navigation");
let img2 = document.createElement("img");
let ul = document.getElementById("nav");


ul.style.listStylePosition = "inside";
ul.style.listStyleType = "circle";


img1.src = "dom.jpg";
img1.alt = "DOM Image";
img1.style.width = "250px";
img1.style.display = "block";
img1.style.marginTop = "0";
img1.style.marginRight = "0";
img1.style.marginBottom = "auto";
img1.style.marginLeft = "auto";


div.appendChild(img1);


img2.src = "dom.jpg";
img2.alt = "DOM Image";
img2.style.width = "250px";
img2.style.display = "block";
img2.style.marginTop = "100px";
img2.style.marginLeft = "0";
img2.style.marginRight = "auto";


ul.appendChild(img2);
div2.appendChild(ul);
