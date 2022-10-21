//new keyword
//this {}
//return {}

// function createUser(fname, age) {
//   this.fname = fname;
//   this.age = age;
// }

// createUser.prototype.about = function () {
//   console.log(this.fname, this.age);
// };
// const u1 = new createUser("cow", 5);
// console.log(u1);
// //new keyword create empty object{}
// //return this{}
// //Object.create(lalala); this line 'new' keyword making at own in func
// //new making relation between __proto__ and prototype
// console.log("u1 proto running", u1.__proto__);
// u1.about();
//making objet for function userinfo
// const aboutuserinfo = {
//   about: function () {
//     console.log(
//       `The name of user is ${this.fname} and age of user is ${this.age}`
//     );
//   },
// };

//constructor function
function Userinfo(fname, age) {
  //   const userdata = {};
  //   userdata.fname = fname;
  //   userdata.age = age;
  //   userdata.about = aboutuserinfo.about; //passing only reference of about function from object 'aboutuserinfo'
  //   return userdata;
  this.fname = fname;
  this.age = age;
  //   this.about = aboutuserinfo.about; //passing only reference of about function from object 'aboutuserinfo'
  //   return this;
}
Userinfo.prototype.about = function () {
  return `The name of user is ${this.fname} and age of user is ${this.age}`;
};
//COMPARE THIS CODE WITH ABOVE CODE
const user = new Userinfo("krunal", 20);
console.log(user);
// user.about(); // maling object for this about function/method
const user2 = new Userinfo("rahul", 22);
console.log(user2.about());
console.log(user.about());
//jo bhi function capital se suru ho rha he use new keyword se access krte he

for (let i in user2) {
  console.log(i);
} //it return all key with prototypes
for (const key in user2) {
  if (user2.hasOwnProperty(key)) {
    console.log("object has own property", key);
  }
}
