/**
 * 百度 - 3-29
 */

// TEST-01
function fun() {
    return () => {
        return () => {
            return () => {
                console.log(this.name)
            }
        }
    }
}
var f = fun.call({
    name: 'foo'
})
var f1 = f.call({
    name: 'bar'
})()(); //foo
var f2 = f().call({
    name: 'baz'
})(); //foo
var f3 = f()().call({
    name: 'cool'
}) //foo


// TEST-02
PromiseA = Promise.resolve('a');
PromiseA.then((res) => {
    console.log(res)
}).then((res) => {
    console.log(res)
})

PromiseB = Promise.resolve('b');
PromiseB.then((res) => {
    console.log(res)
})
PromiseB.then((res) => {
    console.log(res)
})

//a b b undefined


// TEST-03
console.log(100['toString']['length'])





var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = (function (i) {
        return function () {
            console.log(i);
        }
    }(i))
}
funcs[0](); // 0




var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = (function (i) {
        return function () {
            console.log(i)
        }
    }(i))
}


var funcs = [],
    object = {
        a: 1,
        b: 1,
        c: 1
    };
for (var key in object) {
    funcs.push(function () {
        console.log(key)
    });
}

funcs[2]()



//连等赋值
var b = {
    n: 1
};
var a = {
    n: 1
};
a.n = 0;
console.log(b); //Object {n: 1}

var b = {
    n: 1
};
var a = b;
a.n = 0;
console.log(b); //Object {n: 0}

var a, b;
a = b = {
    n: 1
};
a.n = 0;
console.log(b); //Object {n: 0}




console.log(b, c) //1 1 
{
    let a = b = c = 1
};


var a = {
    n: 1
};
var b = a;
a.x = a = {
    n: 2
};
alert(a.x); // --> undefined
alert(b.x); // --> {n: 2}





(async () => {
    request = async function request(number) {
        const time = Math.random() * 1000;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number);
            }, time);
        })
    }
    for (let i = 0; i < 10; ++i) {
        await request(i).then(res => console.log(res))
    }
})()







const helperObj = {
    name: 'one piece'
}
const obj = {
    name: 'lufy',
    say() {
        console.log(this)
        console.log(this.name)
    },
    say2: () => {
        console.log(this)
        console.log(this.name)
    },
    say3() {
        console.log(this)
        const f = function () {
            console.log(this)
            console.log(this.name)
        }
        f()
    },
    say4() {
        console.log(this)
        const f = () => {
            console.log(this)
            console.log(this.name)
        }
        f()
    },
    say5() {
        console.log(this)
        const f = () => {
            console.log(this)
            console.log(this.name)
        }
        f.call(helperObj)
    },
    embed: {
        name: 'solon',
        say() {
            console.log(this)
            console.log(this.name)
        }
    }
}
const say = obj.embed.say
const say4 = obj.say4

say()
say4()

obj.say()
obj.embed.say()
obj.say2()
obj.say3()
obj.say4()
obj.say5()
// undefined
// undefined
// lufy
// solon
// undefined
// undefined
// lufy
// lufy





console.log(1)
setTimeout(() => {
    console.log(2)
    Promise.resolve().then(() => {
        console.log(3)
    })
}, 0);

Promise.resolve().then(() => {
    console.log(4);
    setTimeout(() => {
        console.log(5)
    }, 0)
}).then(() => {
    console.log(6)
})





const helperObj = {
    name: 'one piece'
}
const obj = {
    name: 'lufy',

    say5() {
        console.log(this)
        const f = () => {
            console.log(this)
            console.log(this.name)
        }
        f.call(helperObj)
    },

}

obj.say5()






const helperObj = {
    name: 'one piece'
}
const obj = {
    name: 'lufy',

    say2: () => {
        console.log(this.name)
    },

    say4() {
        const f = () => console.log(this.name)
        f()
    },
    say5() {
        const f = () => console.log(this.name)
        f.call(helperObj)
    },
    embed: {
        name: 'solon',
        say() {
            console.log(this.name)
        }
    }
}
const say = obj.embed.say
const say4 = obj.say4
say()
say4()
obj.embed.say()
obj.say2()
obj.say4()
obj.say5()





function Foo() {}
let oldName = Foo.name;
Foo.name = "bar";
console.log([oldName, Foo.name]);


let a = Foo.prototype;
let b = new Foo();
let c = b.prototype;
console.log(a === c);



let name = 'global';

function getName() {
    name = 'local';
    return function () {
        return name;
    }
}
let getPrivate = getName();
console.log(name);
console.log(getPrivate());





async function test() {
    return 1;
}
async function call() {
    const a = test();
    const b = await test();
    console.log(a, b)
}
call()



window.data = 5;
var foo = {
    data: 6,
    click: function () {
        console.log(this.data);
    }
};
// div.addEventListener('click', foo.click);
var bar = foo.click;
bar();




var a = function () {
    this.b = 3;
}
var c = new a();
a.protorype.b = 9;
var b = 7;
a();
console.log(b);
console.log(c.b);



[]



//all
Promise.all([]).then((res) => {
    console.log('all');
})

Promise.race([]).then((res) => {
    console.log('race')
})


function func(one,two,three){
    console.log(one);
    console.log(two);
    console.log(three);
}

var person = 'lili';
var age = 20;


func `${person}is${age}years old`