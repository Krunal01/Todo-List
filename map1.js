//ek obj khud dusre obj ke pass jakar value leke aaye
//__proto__
const obj1 = {
  key1: 10,
  key2: 11,
};
const obj2 = {
  key3: 12,
};
console.log("property of obj1,key1", obj1.key1);
console.log("property of obj2,key2", obj2.key3);
console.log(
  "property of obj1,obj1 ki value ko obj2 ke sath access krte hue jo obj2 ke pass nhi he,key1",
  obj2.key1
); //undefined//solutuion is making through Object.create()
const obj3 = Object.create(obj1);
console.log(
  "ye obj2 wali error ko solve krne ke liye ek nye obj3  ke exp smjte he \n ==> const obj3 = Object.create(obj1);"
);
// obj3 = Object.create(obj2);
console.log(
  "property of obj3 before adding any values,it create new empty object",
  obj3
);
obj3.key3 = 13;
console.log("property of obj3 after adding any values", obj3.key3);
console.log("accessing value of obj1 through obj3 error solve", obj3.key1);
console.log(obj3);
console.log(
  "obj3 has [[prototype]]/__proto__ of obj1 so that's why it accessnig value of obj1"
);
console.log("obj3.__proto__", obj3.__proto__);
