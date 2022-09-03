//id selector
// console.log(document.getElementById("headline"));
// console.dir(document.getElementById("headline"));
//query selector
// console.log(document.querySelector("#headline"));
// const navitemlist = document.querySelector(".list-item"); //give only first one from many list with same class
// console.log(navitemlist);
// const navitemlist1 = document.querySelectorAll(".list-item");
// console.log(navitemlist1);
//text content and inner text
// const heading = document.getElementById("ul1-h1");
// console.log("Original text is ", heading.textContent);
// heading.textContent = "It's Not A WebSite";
// console.log("After changing text ", heading.textContent);
// const webs = document.getElementById("ul1-h1");
// // console.log(webs.textContent);//showing hidden content also
// console.log(webs.innerText); //don't showing hidden content
// console.log(webs.innerHTML); //it showing all code of this id written in html code
//change the styles of the elements
// const heading = document.getElementById("a");
// heading.style.backgroundColor = "black";
// console.log(heading.getAttribute("type"));
// console.log(heading.getAttribute("href"));
// heading.setAttribute("href", "https://google.com");
// console.log(heading.getAttribute("href"));
// console.log(listItem[0]);
// const list = document.querySelectorAll(".list-item"); //NodeList
// console.log(list);
// const listItem = document.getElementsByClassName("list-item"); //HTML Collection
// console.log(listItem);
// console.log("List length is ", listItem.length);
// //can't use for...Each loop with HTML collection
// for (let i = 0; i < listItem.length; i++) {
//   console.log(listItem[i]);
//   const a = listItem[i];
//   a.style.backgroundColor = "red";
// }
//events
// const clickme = document.getElementById("btn");
// console.log(clickme);
// clickme.addEventListener("click", () => {
//   console.log("you clicked me");
// });
//this keyword
// const clickme = document.getElementById("btn");
// console.log(clickme);
// clickme.addEventListener("click", () => {
//   console.log("you clicked me");
//   console.log("value of this");
//   console.log(clickme.textContent);
//   console.log(this); //window object
// });
// clickme.addEventListener("click", function () {
//   console.log("you clicked me");
//   console.log("value of this");
//   console.log(this); //but in anonymous function value of this is button itself.
// });
// const root = document.getRootNode();
// console.log(root);
// const child = root.childNodes;
// console.log(child);
// for (let i = 0; i < child.length; i++) {
//   console.log(child[i]);
// }
// const cofc = document.getElementsByTagName("head");
// console.log(cofc);
const addtodo = document.getElementById("addtodol");
// console.log(addtodo.innerText);
const addbtn = document.getElementById("addsubmit");
const ul = document.getElementById("newul");
console.log(ul);
addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (addtodo.value === "") return;
  //   ul.style.display = "block";
  const listitem = document.createElement("li");
  listitem.className = "listitem";
  listitem.innerText = addtodo.value;
  listitem.innerHTML = `<p>${addtodo.value}</p><button class="ul-btn">
      <b>Remove</b>
    </button>`;
  ul.appendChild(listitem);
  input.value = "";
  //   console.log(`${addtodo.value}`);
});

const input = document.querySelector("#addtodol");

input.addEventListener("keypress", (e) => {
  if (!addtodo.value) return;

  if (e.key === "Enter") {
    const listitem = document.createElement("li");
    listitem.className = "listitem";
    listitem.innerText = addtodo.value;
    listitem.addEventListener("click", (e) => {
      listitem.style.display = "none";
    });
    listitem.innerHTML = `<p>${addtodo.value}</p><button class="ul-btn">
        <b>Remove</b>
      </button>`;
    ul.appendChild(listitem);
    input.value = "";
  }
});
