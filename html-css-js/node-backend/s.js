// let student = {
//     name : "sanjeev",
//     marks : 98,
//     age : 21,
//     gender: "Male"

// };
// const item = {
//     price : 243,
//     discount : 12421,
//     colors : ["blue"]

// };
// const post = {
//     username : "sanjevkr037",
//     content : "this is mine 1st post",
//     likes : 133,
//     tag : ["kr","@karthik"]
// };
// const obj = {
//     1:"a",
//     2 : "b",
//     null : "abs",
// };
// const classinfo = {
//     ram:{
//         grade : "A+",
//         city : "delhi"
//     },
//     hari : {
//         grade : "0",
//         city : "mumbai"
//     }
// }
// const std = [
//     {
//         names : "sanjeev",
//         class : 10
//     },
//     {
//         names : "anushka",
//         class :9
//     },
//     {
//         names : "rajeev",
//         class : 8
//     }
// ];
// // guessing game
// // const max = prompt("enter the max number");
// // const random = Math.floor(Math.random() * max) +1;
// // let guess = prompt("guess the number");
// // while(true){
// //     if(guess == "quiet"){
// //         console.log("user quite");
// //         break;
// //     }
// //     if(guess == random){
// //         console.log(" u r right    congrats");
// //         break;
// //     }else if(guess<random){
// //         guess = prompt("ur number was too small . try again");
// //     }
// //     else{
// //         guess = prompt("ur number was too large .try again ");
// //     }
// // }

// const car = {
//     name :"tesla",
//     model :"500tr",
//     color : "blue"
// };
// //console.log(car.name);

// const person = {
//     name : "jhon",
//     city : "us",
//     age : 23
// };
// person.city = "New york";
// person.country = "united states";
// //console.log(person);
// function dice(){
//     let dic = Math.floor(Math.random()*6) +1;
//     console.log(dic);
// };
// //dice();
// //let n1 = prompt("enter n1");
// //let n2 = prompt("enter n2");
// //let n3 = prompt("enter n3");
// function sum(n,nn){
//     let s = n + nn;
//     console.log(s);
// }
// //sum(Number(n1),Number(n2));
// function avg(n,s,t){
//     let av = (n+s+t)/3;
//     console.log(av);
// }
// //avg(Number(n1),Number(n2),Number(n3));
// function multiplication(n1){
//     for(let i=1;i<=10;i++){
//         console.log(n1," X",i," = ",i*n1);
//     }
// }
// //multiplication(n1);
// function s1ton(n1){
//     let s = 0;
//     for(let i=1;i<=n1;i++){
//         s +=i;
//     }
//     return s;
// }
// //console.log(s1ton(n1));
// let str = ["hi","hello","bye"];
// function con(str){
//     let result="";
//     for(let i =0;i<str.length;i++){
//         result+=str[i];
//     }
//     return result;
// }
// con(str);
// {
//     var a = 45;
// }
// //console.log(a);
// function multiplegreet(func,n){
//     for(let i=1;i<=n;i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log( "hello");
// }
// //multiplegreet(greet,2);
// function oddevenfact(request){
//     if(request=="odd"){
//         return function(n){
//             console.log(n%2!=0);
//         }
//     }
// }
// function odd(n){
//     console.log(n%2!=0);
// };
// const calculator = {
//     add : function(a,b){
//         return a+b;
//     },
//     sub : function(a,b){
//         return a-b;
//     },
//     multiply : function(a,b){
//         return a*b;
//     }
// };
// let arr1 = [3,5,2,7,9,7,4,1,8,6];
// let num = 5;
// function arge(arr1,num){
//     for(let i =0;i<arr1.length;i++){
//         if(arr1[i]>num){
//         console.log(arr1[i]);
//         }
//     }
// };
// // arge(arr1,num);
// let str1 = "abcdabcdefgggh";
// let ans = "";
// function unique(str1){
//     let n = str1.length;
//     for(let i =0;i<n;i++){
//         if(ans.indexOf(str1[i])==-1){
//             ans +=str1[i];
//         }
//     }return ans;
// }
// unique(str1);
// let vstr = "alksdjhfowieru";
// function cvowel(vstr){
//     let n = vstr.length;
//     let  v = 0;
//     for(let i =0; i<n;i++){
//        if(vstr.charAt(i)=='a' ||  vstr.charAt(i)=='e' || vstr.charAt(i)=='i' || vstr.charAt(i)=='o' || vstr.charAt(i)=='u'){
//             v++;
//        }
//     }return v;
// }
// cvowel(vstr);
// let country=["Australia","Germany","UnitedStatesofAmerica"];
// function longestname(country){
//     let len = country.length;
//      let long = country[0];
//     for(let i =0 ;i<len-1;i++){
//         if(long.length<country[i+1].length){
//             long = country[i+1];
//         }
       
//     } return long;
// }
// longestname(country);
// let start = 100, end = 200;
// function random_generate(start,end){
//     return Math.floor(Math.random()*(end-start)+start);
// }
// random_generate(start,end);
// let arr = [2,5,3,1,6,8,0];
// function sort(arr){
//         for(let i = 0;i<arr.length;i++){
//            for(let j =0 ;j<arr.length;j++){
//                 if(arr[i]<arr[j]){
//                     let temp = arr[i];
//                     arr[i] = arr[j];
//                     arr[j] = temp;
//                 }
//            }
//         }return arr;
//     } 
//     const sums = () =>{
//         console.log(a+b);
//     }
//     const cube = (n) =>{
//         console.log( n*n*n );
//     }   
//     const pow = (d,e) =>{
//         return d**e;
//     }
//     const ss = s =>(
//         s*s
//     );
// // console.log("hello");
// // setTimeout( () =>{
// //     console.log("My universtiy");
// // },4000);
// // console.log("welcome to ");
// // let id = setInterval(() => {
// //     console.log("go to hell..................");
// // }, 2000);
// // console.log(id);
// // let id1 = setInterval(() => {
// //     console.log("go to hell..................");
// // }, 2000);
// // console.log(id1);
// // clearInterval(id);
// // clearInterval(id1)
// const st = {
//     name : "sanjeev",
//     marks : 98,
//     prop : this,
//     getname : function(){
//         console.log(this);
//         return this.name;
//     },
// };
// const squares = n  =>{
//     return n*n;
// };
// let as=0;
// let asd = setInterval(() =>{
//     console.log("hello world");
// },2000);
// setTimeout(() =>{
//     clearInterval(asd)
// },10000);
// const arrayaverage = (arr) =>{
//     let n = arr.length;
//     let total = 0;
//     for(let nn of arr){
//         total+=nn;
//     }return total/n;
// };
// console.log(arrayaverage(arr));

// const eoro = (e) =>{
//     if(e%2==0){
//         return true;
//     }return false;
// }
// let arr=[{
//     name:"sanjeev",
//     marks:98,
// },
// {
//     name:"ranjeev",
//     marks:99,
// },
// {
//     name:"njeev",
//     marks:100,
// }];
// arr.forEach(function(s){
//     console.log(s.marks);
// });
// let num = [1,2,3,4,5];
// let d = num.map((el) =>{
//     return el*el;
// });
// let n = num.reduce((res,el)=>(res+el));
// let arr=[12,3,4,57,32,12];
// let max = arr.reduce((max,el) =>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log("max is",max);
// let arr = [10,20,30,5];
// let a = arr.every((el) => (el%10==0));
// console.log("every is",a);
// let min = arr.reduce((res,el)=>{
//     if(res<el){
//         return res;
//     }else{
//         return el;
//     }
// })
// console.log(min);
// function fun(a,b=9){
//     return a+b;
// }
// console.log(fun(3));
//Spread
// let arr=[12,3,45,6];
// let b = [22,4,6,8,9,4,2];
// let num = [...arr,...b];
// let obj1 = {...arr};
// let obj2 = {..."hell universityl"};
// let obj3 = {...obj1,id:"kr"};
let arr = [1,3,4,5,6];
// const square = arr.map((n)=> n*n );
// console.log(square);
const a = arr.map(function(el){
    return el+=5;
}) ;
let word = ["aew","asfsf"];
const u = word.map(function(el){
    return el.toUpperCase();
});
const ob = (obj1,obj2) =>({...obj1,...obj2});

