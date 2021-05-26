var obj1 = {
  name: "よしお",
  greet: function (age, from) {
    console.log(this.name + "です、初めまして");
    console.log("年齢は" + age + "歳です");
    console.log("出身地は" + from + "です");
  }
};
var obj = {
  name: "ゆりこ"
};
obj1.greet.call(obj2, 6, "アメリカ");