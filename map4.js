//add functions in userinfo using prototype
//making objet for function userinfo
// const aboutuserinfo = {
//   about: function () {
//     console.log(
//       `The name of user is ${this.fname} and age of user is ${this.age}`
//     );
//   },
// };
function userinfo(fname, age) {
  //   const userdata = {};
  const userdata = Object.create(userinfo.prototype); //passing only reference of about function from object 'aboutuserinfo'
  userdata.fname = fname;
  userdata.age = age;
  return userdata;
}
// const userdata = Object.create(userinfo.prototype); this line is making __proto__ of userinfo
const user = userinfo("krunal", 20);
// console.log(typeof userinfo);
// console.log(userinfo.prototype);
// console.log(typeof user);
console.log(user);
// user.about(); // maling object for this about function/method
userinfo.prototype.about = function () {
  console.log(
    `The name of user is ${this.fname} and age of user is ${this.age}`
  );
  return "";
};
console.log(user.about());
