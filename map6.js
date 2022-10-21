//making class from this constructor

//constructor function
function Userinfo(fname, age) {
  this.fname = fname;
  this.age = age;
}
//no need of write long in class
Userinfo.prototype.about = function () {
  return `The name of user is ${this.fname} and age of user is ${this.age}`;
};

class UserInfo1 {
  constructor(fname, age) {
    console.log("enter in constructor");
    this.fname = fname;
    this.age = age;
  }
  //create method
  about() {
    return `The name of user is ${this.fname} and age of user is ${this.age}`;
  }
}
const u1 = new UserInfo1("krunal", 20);
console.log(u1.fname, u1.age, u1.about());
