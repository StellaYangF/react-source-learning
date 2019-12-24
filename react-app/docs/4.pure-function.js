/**
 * 函数式编程
 * 纯函数
 * 函数体内部不能改变传入的参数
 * 相同参数返回相同的值
 * 不能修改作用域外的值
 */
function withdraw(account, amount) {
  account.balance -= amount;
}
withdraw({name:'stella', balance: 1000}, 100);

function add(a,b) {
  return a + b + Math.random();
}
add(1,2);
add(1,2);

function sum(a,b) {
  global.x = 'a';
  let c = 10;
  c = a + b;// 作用域内申明的变量可以被改变
  return  c;
}