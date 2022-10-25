const addtodo = document.getElementById("addtodol");
const addbtn = document.getElementById("addsubmit");
const ul = document.getElementById("newul");
const btnsub = document.getElementById("btnsub");
const sectionTodo = document.getElementById("section-todo");
// console.log(ul);
// console.log(addtodo.innerText);
addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (addtodo.value === "") return;
  //   ul.style.display = "block";
  console.log(addtodo.value);
  const listitem = document.createElement("li");
  listitem.className = "listitem";
  listitem.innerText = addtodo.value;
  listitem.addEventListener("click", (e) => {
    listitem.style.display = "none";
    // console.log(addtodo.value);
  });
  listitem.innerHTML = `<p>${addtodo.value}</p><button class="ul-btn">  <b>Remove</b></button>`;
  ul.appendChild(listitem);
  input.value = "";
  listitem.addEventListener("click", () => {
    console.log(`Change is there ${listitem.innerText} from today's plan`);
    // ul.style.display = "none";
  });
  // console.log(`${addtodo.value}`);
});

const input = document.querySelector("#addtodol");

console.log("Users's today plan is : ");
input.addEventListener("keypress", (e) => {
  if (!addtodo.value) return;

  if (e.key === "Enter") {
    const listitem = document.createElement("li");
    listitem.className = "listitem";
    listitem.innerText = addtodo.value;
    listitem.addEventListener("click", (e) => {
      listitem.style.display = "none";
      // console.log(addtodo.value);
    });
    listitem.innerHTML = `<p>${addtodo.value}</p><button class="ul-btn" id="removed"> <b>Remove</b></button>`;
    console.log(addtodo.value);
    ul.appendChild(listitem);
    input.value = "";
    listitem.addEventListener("click", () => {
      console.log(`Change is there ${listitem.innerText} from today's plan`);
    });
  }
});

const signUp = document.getElementById("signUp");
function Message() {
  alert("Data Successfully Submitted\nCheck Details in Console");
}
signUp.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.getElementById("Username").value;
  const Password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpassword").value;
  const Phone = document.getElementById("phone").value;
  const Email = document.getElementById("email").value;
  const Textarea = document.getElementById("about").value;

  console.log(`
  Name of User is : ${userName}
  Password of User is : ${Password} 
  Confirm password of User is : ${confirmPassword}
  Phone number of User is : ${Phone}
  Email of User is : ${Email}
  Address of User is : ${Textarea}
  `);

  signUp.reset();
  ul.style.display = "none";

  setTimeout(Message, 100);
});
