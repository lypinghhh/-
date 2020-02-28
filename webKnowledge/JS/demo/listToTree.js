var arr = [{
    id: 1
}, {
    id: 11,
    pId: '1'
}, {
    id: 12,
    pId: '1'
}, {
    id: 111,
    pId: '11'
}]





const listToTree = arr => {
    //初始化需返回的树形化数组为空数组
    let res = [];
    //初始map为空对象
    let map = arr.reduce((res, item) => {
        //键值为id
        res[item.id] = item;
        return res;
    }, {})
    console.log(map);
    for (let item of Object.values(map)) {
        if (!item.pId) {
            res.push(item);
        } else {
            const parent = map[item.pId];
            //第一次插入子元素时，初始化child为空数组
            //之后再插入时，取到原来的child进行添加子元素
            parent.child = parent.child || [];
            parent.child.push(item)
        }
    }
    console.log(res);
    return res;
}




listToTree(arr);

