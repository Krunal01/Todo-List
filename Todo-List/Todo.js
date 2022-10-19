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
