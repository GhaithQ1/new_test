// start Header
let head = document.createElement("header");
let h2 = document.createElement("h2");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let mylogo = document.createTextNode("Ghaith");
let text1 = document.createTextNode("Home");
let text2 = document.createTextNode("Abot");
let text3 = document.createTextNode("servases");
let text4 = document.createTextNode("contacte");
head.className = "header";
head.appendChild(h2);
head.appendChild(ul);
h2.appendChild(mylogo);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
li1.appendChild(text1);
li2.appendChild(text2);
li3.appendChild(text3);
li4.appendChild(text4);
// style head
head.style.width = "100%";
head.style.height = "50px";
head.style.backgroundColor = "white";
head.style.margin = "0";
head.style.display = "flex";
head.style.justifyContent = "space-between";
head.style.alignItems = "center";
head.style.boxSizing = "border-box";

// style h2
h2.style.color = "rgb(35, 169, 110)";
h2.style.padding = "0 0 0 10px";
// style ul
ul.style.display = "flex";
ul.style.justifyContent = "center";
ul.style.alignItems = "center";
ul.style.listStyle = "none";
ul.style.margin = "0 20px 0 0";
// style li
li1.style.padding = "5px 10px";
li1.style.margin = "0 10px";
li1.style.color = "black";
li1.style.borderRadius = "10px";

li2.style.padding = "5px 10px";
li2.style.margin = "0 10px";
li2.style.color = "black";
li2.style.borderRadius = "10px";

li3.style.padding = "5px 10px";
li3.style.margin = "0 10px";
li3.style.color = "black";
li3.style.borderRadius = "10px";

li4.style.padding = "5px 10px";
li4.style.margin = "0 10px";
li4.style.color = "black";
li4.style.borderRadius = "10px";
document.body.appendChild(head);
// start Header
// start landing

let main = document.createElement("div");

for (let i = 1; i <= 15; i++) {
  let siction = document.createElement("div");
  let myp = document.createElement("p");
  let myspan = document.createElement("span");
  let text = document.createTextNode("test");
  let span_text = document.createTextNode("" + i);
  main.className = "landing";
  main.appendChild(siction);
  siction.appendChild(myspan);
  siction.appendChild(myp);
  myspan.appendChild(span_text);
  myp.appendChild(text);
  document.body.appendChild(main);
  main.style.display = "flex";
  main.style.justifyContent = "center";
  main.style.flexWrap = "wrap";
  main.style.padding = "20px";
  main.style.gap = "20px";
  main.style.margin = "0";
  main.style.boxSizing = "border-box";
  main.style.minHeight = "calc(100vh - 140px)";
  main.style.backgroundColor = "#ddd";
  siction.style.backgroundColor = "white";
  siction.style.width = "calc((100% - 40px) / 3)";
  siction.style.textAlign = "center";
  siction.style.boxSizing = "border-box";
  siction.style.borderRadius = "10px";
  myspan.style.fontSize = "30px";
  myspan.style.fontWeight = "bold";
  myspan.style.color = "black";
  myspan.style.margin = "10px 0 0 0";
  myspan.style.display = "block";
}

// End landing
// start footer
let my_footer = document.createElement("footer");
let my_p = document.createElement("p");
let my_text = document.createTextNode("The End");
my_footer.appendChild(my_p);
my_p.appendChild(my_text);
my_footer.style.height = "74px";
my_footer.style.backgroundColor = "rgb(35, 169, 110)";
my_footer.style.color = "white";
my_footer.style.display = "flex";
my_footer.style.justifyContent = "center";
my_footer.style.alignItems = "center";
my_p.style = "font-size:30px;margin:0";
document.body.appendChild(my_footer);
// End footer
