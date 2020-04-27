//TEST 01 构造器模式
/**
 * 在创建一个user过程中，谁变了，谁不变？
很明显，变的是每个user的姓名、年龄、工种这些值，这是用户的个性，
不变的是每个员工都具备姓名、年龄、工种这些属性，这是用户的共性。
 * @param {*} name 
 * @param {*} age 
 * @param {*} career 
 */

function User(name,age,career){
    this.name = name;
    this.age = age;
    this.career = career;
}
const user = new User(name,age,career)