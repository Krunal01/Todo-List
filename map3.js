function hello() {
  console.log("hello world");
}
hello();
console.log("The name of a function is ", hello.name);
//function gives an empty object(free space) bydefault
console.log("find property of hello function using hello.prototype");
console.log("it gives constructor or its empty object{}", hello.prototype);
console.log("and __proto__ / [[prototype]] is Object", hello.__proto__);
console.log("only functions provide prototype property");

console.log("\n\nAdding property in hello function");
hello.prototype.abc = "add";
hello.prototype.add = "cys";
hello.prototype.sum = function (a, b) {
  return a + b;
};
console.log(hello.prototype);
const sumadd = hello.prototype.sum(10, 30);
console.log(
  "add sum func in hello func using prototype,calling sum func\nSum of two numbers is",
  sumadd
);

//SO __PROTO__ IS REFERENCE OF ANY OBJECT IT CREATE CHAIN
//PROTOTYPE IN FUNCTION IS OBJECT(FREE SPACE)
