// function findUniq(str){
//     let uniq="";
//     for(let i=0;i<str.length;i++){
//         if(uniq.includes(str[i])===false){
//             uniq += str[i];
//         }
//     }
//     return uniq;
// }
// console.log(findUniq("dushyantrajput"));
// let sum=(a,b)=>{
//     console.log(a+b);
// }
// sum(2,3);
// let qube=(a)=>{
//     console.log(a*a*a);
// }
// qube(2);
// let mul=(a,b)=>{
//     console.log(a*b);
// }
// mul(2,3);

    // let avg=(a,b,c)=>{
    //     console.log((a+b+c)/3);
    // }
    // avg(2,3,4);
    // let hello=()=>{
    //     console.log("hello jee kese ho sare");
    // }
    // hello();
    // let mul=(a,b) => (a*b);
    // console.log(mul(2,3));

    // let arr=[1,2,3,4,5,6,6,8,9,10];
    // let num=5;
    // function returnArr(arr,num){
    //     for(let i=0;i<arr.length;i++){
    //         if(arr[i]>num){
    //             console.log(arr[i]);
    //         }
    //     }
    // }
    // returnArr(arr,num);
    // let str="abcdefghijkhlkhabcdefghi";
    // function findUniq(){
    //     let uniq="";
    //     for(let i=0;i<str.length;i++){
    //         if(uniq.includes(str[i])===false){
    //             uniq+=str[i];
    //         }
    //     }
    //     return uniq;
    // }
    // findUniq("abcdefghijkhlkhabcdefghi");
    // let str="abcdefghijkhlkhabcdefghi";
    // function returnUniq(str){
    //     let uniq="";
    //     for(let i=0;i<str.length;i++){
    //         let ans=str[i];
    //         if(uniq.indexOf(ans) == -1){
    //             uniq+=ans;
    //         }
    //     }
    //     return uniq;
    // }
    // console.log(returnUniq(str));
// let str = "abcdabcdefgggh";
// function getUnique(str) {
// let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//             if (ans.indexOf(currChar) == -1) {
//                 ans += currChar;
//             }
//     }
//     return ans;
//     }
//     console.log(getUnique(str))

// let country=["india","pakistan","brazil","united state of america"];
// function longestName (country){
//     let idx=0;
//     for(let i=0;i<country.length;i++){
//         let ansLen=country[idx].length;
//         let currLen=country[i].length
//         if(currLen>ansLen){
//             idx=i;
//         }
//     }
//     return country[idx];

// }
// console.log(longestName(country));

// let longestName=function(country){
// let idx=0;
// for(let i=0;i<country.length;i++){
//     let anslen=country[idx];
//     let currLen=country[i];
//     if(currLen>anslen){
//         idx=i;
//     }
// }
// return country[idx];
// }
// let outPut=longestName(["india","brazil","pakistan","unitedstate"]);
// console.log(outPut);
// let str="aeiouaeiouaeiou";
// function countVowel(str){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if(
//             str.charAt(i)=="a"||
//             str.charAt(i)=="e"||
//             str.charAt(i)=="i"||
//             str.charAt(i)=="o"||
//             str.charAt(i)=="u"
//         ){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowel(str));

// let num=Math.floor(Math.random()*100)+10;
// console.log(num);
// console.log("hello there!");

// setTimeout(()=>{
// console.log("apnaghar");
// },4000);

// console.log("welcome to");
// console.log("how");

// let id=setInterval(()=>{
//     console.log("hello");
// },2000);
// console.log("hii");

// clearInterval(id);
// const student={
//     name:"dushyant",
//     age:22,
//     marks:99,
//     prop:this,
//     getName:function(){
//         console.log(this)
//         return this.name;
//     },
//     getMrks:()=>{
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1:function(){
//         setTimeout(() => {
//             console.log(this);
//         },2000);
//     },
//     getInfo2:function(){
//         setTimeout(function(){
//             console.log(this)
//         }, 2000);
//     }
// };
// console.log(student.getInfo1());
// console.log(student.getInfo2());
// let n=3;
// let sqFun=(n)=>{
//     return n**2;
// }
// console.log(sqFun(n));
// let sqFun=(n)=>(n**2);
// console.log(sqFun(n));
// let printFun=()=>{
//     setTimeout(()=>)
// }

// let printFun=function(){
//     setTimeout(()=>{
//         for(let i=0;i<=5;i++){
//             console.log("hello world");
//         }
//     },2000)  
// }
// console.log(printFun());
// let id=setInterval(()=>{
//     console.log("hello world");
// },2000);
// setTimeout(()=>{
//     clearInterval(id);
//     console.log("clear interval run.");
// },10000);
// console.log(setInterval);
// let arr=[1,2,3];
// let arrAve=(arr)=>{
//     let ave=0;
//     for(let i=0;i<arr.length;i++){
//         ave+=i;
        
//     }
//     return ave/arr.length;
// }
// console.log(arrAve(arr));
// let num=5;
// let isEven=(num)=>{
//     if(num%2==0){
//         console.log("it's even");
//     }
//     else{
//         console.log("it's not an even number")
//     }
// };
// console.log(isEven(num));
// const object={
//     message:"hello world",
//     longMessage(){
//         console.log(this.message);
//     }
// };
// console.log(setTimeout(object.longMessage,2000));
// let length=4;
// let callback=function(){
//     console.log(this.length);
// };
// const object={
//     length:5,
//     method(){
//         callback();
//     }
// }
// console.log(object.method(callback,1,2));
// let arr=[1,2,3,4,5];
// let print=(em)=>{
//     console.log(em);
// };
// arr.forEach(print);
// arr.forEach(function(el){
//     console.log(el);
// })
// let arr=[{
//     name:"dushyant",
//     marks:99
// },
// {
// name:"akash",
// marks:98
// },
// {
//     name:"akankasha",
//     marks:97
// },
// ];

// arr.forEach((student)=>{
//     console.log(student.marks);
// });
// let arr=[1,2,3,4];
// let double=arr.map((el)=>{
//     return el*el;
// });
// console.log(double);

// let arr=[{
//         name:"dushyant",
//         marks:99
//     },
//     {
//     name:"akash",
//     marks:98
//     },
//     {
//         name:"akankasha",
//         marks:97
//     },
//     ];
// let gpa=arr.map((el)=>{
// return el.marks/10;
// });
// console.log(gpa);
// console.log(arr);

// let arr=[2,4,6,8];
// let ans=arr.filter((el)=>{
//     return el%2==0;
// });
// console.log(ans);
// let result=arr.every((el)=>(el%2==0));
// console.log(result);

// let arr=[1,2,3,4,5];
// let finalVal=arr.reduce((res,el)=>{
//     // console.log(res);
//     return res*el;});
// console.log(finalVal);
// let arr=[1,2,3,4,5,6,7,8,9];
// max=0;
// for(let i=0;i<arr.length;i++){
// if(max<arr[i]){
//     max=arr[i]
// }
// };
// console.log(max);
// let arr=[1,2,5,4,8,1,1,1,3];
// let ans=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }
//     else{
//         return max;
//     }
    
    
// });
// console.log(ans);
// let arr=[10,20,30,40,50];
// let ans=arr.every((el)=>(el%10==0));
// console.log(ans);

// let arr=[2,3,4,5,6,1];
// let ans=arr.reduce((min,el)=>{
//     if(min<el){
//         return min;
//     }
//     else{
//         return el;
//     }
// });
// console.log(ans);
// function getnum(num){
//     let min=num.reduce((min,el)=>{
//         if(min<el){
//             return min;
//         }
//         else{
//             return el;
//         }
//     });
//     return min;
// }
// let num=[1,2,3,4,5,6,-1];
// console.log(getnum([10,15,16,35,25,-45]));
// function sum(a,b=3){
//     return a+b;
// }
// console.log(sum(3));
// let str="dushyant";
// console.log(...str);
// let arr=[1,2,3,4,5,6,7,8,9,0,2];
// console.log(...arr);
// let output=average(...arr);
// console.log(output);
// let str=[..."dushaynt"];
// let even=[2,4,6,8];
// let odd=[1,3,5,7];
// let newarr=[...even ,...odd];
// console.log(newarr);
// let object={
//     name:"dushyant",
//     age:22,
//     marks:99
// }
// console.log(object);
// let newObject={...object,city:"mainpuri"};
// console.log(newObject);
// let object={
//     email:"ironman@gmail.com",
//     pass:"abc"
// };
// let newObject={...object,city:"newyork",id:123};
// console.log(newObject);
// let arr=[1,2,4,3,5];
// let object={...arr,city:"mainpuri"};
// console.log(object);
// let str="dushyant";
// let object={
//     ...str,marks:99
// };
// console.log(object);
// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("you entered:",args[i]);
//     }
// }
// sum(1,2,3,4);
// function min(a,b,c,d){
//     console.log(arguments.length);
// }
// min(1,2,3,4,5,6);
// function sum(...args){
//     return args.reduce((sum,el)=>(sum+el));
// }
// console.log(sum(1,2,3,4));
// function min(msg,...args){
//     console.log(msg)
//     return args.reduce((ans,el)=>{
//         if(ans>el){
//             return el;
//         }
//         else{
//             return ans;
//         }
//     });
// }
// console.log(min("smallest no. is:",1,2,3,4,5));
// let names=["dushyant","akankasha","akash","ayush"];
// let[winner,runner,...secrunner]=names;
// console.log(names);
// console.log(winner,runner,secrunner);
// let student={
//     name:"dushyant",
//     age:22,
//     class:10,
//     subject:["hindi","english","math"],
//     username:"abc@gmail.com",
//     pass:"abcd"
// }
// let{username:user,pass:secrate,city:place="mumbai"}=student;
// console.log(user,secrate,place);
// let object={
//     name:"dushyant",
//     age:22,
//     marks:99,
//     city:"mainpur"
// }
// let {city:place="mumbai"}=object;
// console.log(place);
// let arr=[1,2,3,4,5,6];
// let square=arr.map((el)=>(el*el));
// let sum=arr.reduce((iter,el)=>iter+el);
// let ave=sum/arr.length;
// console.log(square,sum,ave);
// let arr=[1,2,3,4,5,6];
// let newArr=arr.map((el)=>(el+5));
// console.log(arr);
// console.log(newArr);
// let strArr=["a","b","c","d"];
// let newArr=strArr.map((string)=>string.toUpperCase());
// console.log(newArr);
// let doubleAndReturnArgs =(arr,...args)=>[...arr,
//     ...args.map((el)=>el*2)

// ];
// console.log(doubleAndReturnArgs([1,2,3],2,3));

 
// const mergeObject=(obj1,obj2)=>
//     ({...obj1,...obj2})
// ;
// console.log(mergeObject({
//     names:"dushyant",
//     ages:22,
//     markss:99
// },{
//     name:"akankasha",
//     age:22,
//     marks:97
// }));
// let input=prompt("enter a string");
// let str="dushyant";
// console.log(str.indexOf("u"));
// let str="dushyantrajput";
// console.log(str.slice(-4));
// console.log(str.repeat(5));
// let arr=[1,2,3,4,5,6,7];
// arr.splice(0,2,13);
// console.log(arr);
// let str=["dushyant","ayush","alok"];
// str.sort();
// console.log(str);
// let heros=["dushyant","ayush","alok","aman"];
// for(let i=0;i<heros.length;i++){
//     for(let j=0;j<heros[i].length;j++){
//         console.log(heros[i][j]);

//     }
// };
// let fruits=["litchi","mango","orange","papaya"];

// let fruit3;
// for(fruit3 of fruits){
//     for(names of fruit3){
//         console.log(names);
//     }
// }
// let arr=[2,4,5,6,7,8];
// let ans=arr.map((el)=>{
//     return el*el;
// });
// console.log(ans);
// let arr=[1,2,3,4];
// let ans=arr.find("2");
// console.log(ans);
// let num=Math.floor(Math.random()*100)+10;
// console.log(num);
// let arr=[10,20,30,45];
// let outPut=arr.reduce((inp,el)=>{
//     return inp+el;
// },3);
// console.log(outPut);
// let arr= [1,2,3,7,4,5];
// let outPut=arr.sort(arr);
// console.log(outPut);
// let arr=["dushaynt","syush","ayush"];
// let outPut=arr.sort();
// console.log(outPut);
// let arr=[1,2,3,7,8,4,5,6];
// let outPut=arr.sort();
// console.log(outPut);
// let arr=["dushyant","ayush","akanksha"];
// let outPut=arr.forEach((input,el)=>{
// console.log(input,el)
// });
// outPut;
// let object={
//     name:"dushaynt",
//     age:22,
//     marks:99
// }
// for(key in object){
//     console.log(key,object[key]);

// }
// const stu={
//     name:"dushyant",
//     age:22,
//     marks:99
// };
// console.log(stu.name);
// stu.gender="male";
// console.log(stu);
// function funFactory(request){
// if (request=="even"){
//     return function(n){
//         console.log(n%2==0);
//     }
// }
// else if (request=="odd"){
//     return function(n){
//         console.log(!(n%2==0))
//     }
// }
// else{
//     console.log("wrong Entery")
// }

// }
// let request="even";
// let outPut=funFactory(request);
// outPut(54);
// const object={
//     name:"dushyant",
//     marks:99,
//     age:22,
//     gender:"male",
//     greet(){
//         console.log(this.name);
//     }

// }
// object.greet();
// try{
//     console.log(a);
// }
// catch{
//     console.log("a isn't defined yet")
// }
// setTimeout(console.log("hello world"),2000);
// setTimeout(()=>{
//     console.log("hello duniya")
// },2000);
// clearInterval();
// let id=setInterval(()=>{
//     console.log("hello how do you do ");
// },2000);
// console.log(id);

// clearInterval(id);








