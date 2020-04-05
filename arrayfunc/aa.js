function Person(name) {
  this.name = name;
  let sex = "five";
  this.getName = function() {
    console.log(name);
    console.log(this.name);
  };
  let getSex = function() {
    console.log(this.sex);
    console.log(sex);
  };
}
Person.prototype.setName = function() {
  console.log("setname");
};

Person.setSex = function() {
  console.log("setsex");
};
var p=new Person("xiaoming")
console.log(p.name)
console.log(p)
p.setName()
console.log(p)
