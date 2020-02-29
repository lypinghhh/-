

//法一：暴力破解
var maxProfit = function(prices) {
    let max = 0;

    for(let i = 0;i<prices.length-1;i++){
        for(let j = i+1;j<prices.length;j++){
            let  temp = prices[j] - prices[i];
             if(temp > max){
                 max = temp;
             }
        }
    }
    return max;
};


//法二：机遇求解

function maxProfit(prices){
    let min = Number.MAX_VALUE;
    //最大收益
    let max = 0;
    for(let i = 0;i<prices.length;i++){
        //从最低点买入
        if(prices[i] < min){
            min = prices[i]
        //评估当前的收益是不是最大收益
        }else if(prices[i] - min > max){
            max = prices[i]-min;
        }
    }
    return max;
}