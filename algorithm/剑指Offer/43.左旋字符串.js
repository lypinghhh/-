function LeftRotateString(str, n)
{
    // write code here
    if(!str || str.length === 0){
        return ''
    }
    return str.slice(n) + str.slice(0,n)
}