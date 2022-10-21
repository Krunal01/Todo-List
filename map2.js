//making objet for function userinfo
const aboutuserinfo = {
  about: function () {
    console.log(
      `The name of user is ${this.fname} and age of user is ${this.age}`
    );
  },
};
function userinfo(fname, age) {
  //   const userdata = {};
  const userdata = Object.create(aboutuserinfo);
  userdata.fname = fname;
  userdata.age = age;
  //   userdata.about = aboutuserinfo.about; //passing only reference of about function from object 'aboutuserinfo'
  return userdata;
}

const user = userinfo("krunal", 20);
console.log("user info", user);
console.log(
  "user calling 'function about' but user don't have its own property of about method,\nso its set through Object.create __proto__ of aboutuserinfo"
); // making object for this about function/method
user.about();
console.log("[[prototype]] of user", user.__proto__);
console.log("\n\n[[prototype]]===__proto__ \nbut only prototype is different");
