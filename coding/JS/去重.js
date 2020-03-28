function unique(arr){
    return Array.from(new Set(arr));
}
var arr = [0, 0, 1, 1, 'true', 'true', true, true, 'false', 'false', false, false, 'undefined', 'undefined', undefined, undefined, 'null', 'null', null, null, 'NaN', 'NaN', NaN, NaN, {}, {}, {a: 1}, {b: 2}, {a: 1, b: 2}, [1, 2, 3], [1, 2, 3], [11, 2, 3], [1, 22, 3], function fun () {}, function fun () {}, function f () {}, function fun () {return 1}, function fun () {return 2}]
console.log(unique(arr))