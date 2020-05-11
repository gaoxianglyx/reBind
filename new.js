function myNew(fn, ...args) {
  // 1.创造一个实例对象
  let obj = {};
  // 2.生成的实例对象继承构造函数原型

  // 方法一 粗暴的改变指向 完成继承
  obj.__proto__ = fn.prototype;

  // 方法二 利用Object.create实现
  // obj=Object.create(fn.prototype)

  // 3.改变构造函数this指向为实例对象

  let result = fn.call(obj, ...args);

  // 4. 如果构造函数执行的结果返回的是一个对象或者函数，那么返回这个对象或函数
  if ((result && typeof result === "object") || typeof result === "function") {
    return result;
  }
  //不然直接返回boj
  return obj;
}

// 测试一下
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();