function create() {
    // 创建一个空的对象
    let obj = new Object()
    console.log(arguments)
    // 获得构造函数
    let Con = [].shift.call(arguments)
    // 链接到原型
    obj.__proto__ = Con.prototype
    console.log(arguments)
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments)
    // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
}




function Person(name,age){
    this.name=name
    this.age=age 
    this.sayHi=function(){ console.log('hi') }
}
var p=create( Person,'xiaoMing',21)
console.log(p)
