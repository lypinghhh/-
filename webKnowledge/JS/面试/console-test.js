var x = 10;
var obj = {
    x: 20,

    fn: function () {
        var x = 30;
        return this.x;
    }


}
//函数作为某个对象的方法调用时，this指的是那个对象
console.log(obj.fn())
console.log((obj.fn)())
console.log((obj.fn = obj.fn)())
console.log((obj.fn, obj.fn)())
console.log(obj.fn.apply(window))





var bar = {
    myName: "time.geekbang.com",
    printName: function () {
        console.log(myName)
    }

}

function foo() {
    let myName = " 极客时间 "
    return bar.printName
}
let myName = " 极客邦 "
let _printName = foo()
_printName()
bar.printName()



var bar = {
    myName: "time.geekbang.com",
    printName: function () {
        console.log(this.myName)
    }

}
let myName = " 极客邦 "
bar.printName()





function foo() {
    var myName = " 极客时间 "
    let test1 = 1
    const test2 = 2
    var innerBar = {
        setName: function (newName) {
            myName = newName
        },
        getName: function () {
            console.log(test1)
            return myName
        }


    }
    return innerBar
}
var bar = foo()
bar.setName(" 极客邦 ")
bar.getName()
console.log(bar.getName())





//  TEST
var name = "the window";
var object = {
    name: "the object",

    getNameFunc: function () {
        var name = "the func";
        console.log(this.name);

        return function () {
            console.log(name);
            console.log(this.name);
        };

    }

};
object.getNameFunc()();







var value = 20;
(function () {
    console.log(name);
    console.log(value);
    var name = 'local value';
    let value = 21;
})();




function Page() {
    return this.hosts;
}
Page.hosts = ['h1'];
Page.prototype.hosts = ['h2'];
const p1 = new Page();
const p2 = Page();
console.log(p1); 
console.log(p2);
console.log(p1.hosts); 
console.log(p2.hosts);