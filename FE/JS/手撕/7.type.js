var type = function(data) {
    var toString = Object.prototype.toString;
    var dataType = toString
            .call(data)
            .replace(/\[object\s(.+)\]/, "$1")
            .toLowerCase()
    return dataType
};



console.log(type([12,4,6,7]))