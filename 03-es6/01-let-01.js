// var 声明的变量没有局部作用域
// let 声明的变量  有局部作用域
// {} 代表局部作用域
{
    var a = 0
    let b = 1
    let c = 1
    console.log(b)  // ReferenceError: b is not defined
}
a = 2
console.log(a)  // 0
console.log(c)  // ReferenceError: b is not defined