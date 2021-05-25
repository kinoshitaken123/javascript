var obj1 = {
  name: "よしお",
  greet: function () {
    console.log(this.name + "です、初めまして");
  }
};
var obj2 = {
  name: "百合子"
};
obj1.greet.call(obj2);