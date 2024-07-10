// console.log("hello world");
// name = "shristi priya";
// console.log(name);
// const student={
//     fullname :"shristi",
//     age : 20,
//     cgpa :8.2,
    
// };
// console.log(student);
// let result =  5>2 ? "adult" : "not adult";
// console.log(result);
// let a= prompt("enter the number");
// if(a%5===0){
//     alert("yes it is divisle by 5.");
// }
// else{
//     alert("no,it is not divisble by 5");
// }
// for(let i in student){
//     console.log(i);
//     console.log(student[i])
//  }
// let msg = prompt("enter the username");
// console.log(`username = "${msg}" , username should be "@${msg}${msg.length}`)
// let arr=[1,2,3,4,5,6];
// arr.slice(2,5);
// arr.splice[2,2,7,8,9];
// console.log(a);
// function sum (a,b){
// console.log(a+b);
// }
// sum(2,3);

// let mul = (a,b)=>{
//     return a+b;
// }
// let res= mul(5,6);
// console.log(res);



// (a,b)=>{
 //     console.log(a+b);}
 let arr = [1,2,3,4,5,6,7,8];
// arr.forEach(function printVal(val){
//     console.log(val);
// })

// arr.forEach((val)=>{
//     console.log(val);
// })
// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr);
// })

// arr.forEach((val)=>{
//     console.log(val*val)
// })


let newarr= arr.map((val)=>{
    return val;
})
console.log(newarr)

let newarr1= arr.filter((val)=>{
    return val%2==0;
})
console.log(newarr1)