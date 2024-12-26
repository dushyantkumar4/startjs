// let info={
//     name:"shradha",
//     age:23,
//     marks:94.5 

// };
// console.log(info);
// const post={
//     names:"@dushyantrajpoot_",
//     content:"This is my first post",
//     likes:150,
//     repost:5,
//     tag:["@learning","@problemfighter"]

// }
// console.log(post);
// console.log(post.likes);
// let info={
//     1:"name",
//     2:"dushyant",
//     null:"null",
//     undefined:"undefined"
// }
// let student={
//     name:"dushyant",
//     age:22,
//     weight:"6fit",
//     city:"delhi"
// };
// console.log(student.city);
// student.city="mumbai";
// console.log(student.city);
// console.log(student);
// student.gender="male";
// console.log(student);
// student.name=["akash","alok","ashwani"];
// console.log(student);
// student.marks=[99,99];
// console.log(student);
// delete student.marks;
// console.log(student);
// let classInfo={
//     aman:{
//         grade:"A",
//         city:"delhi"
//     },
//     Dushyant:{
//         grade:"A+",
//         city:"mainpuri"
//     },
//     akash:{
//         grade:"b+",
//         city:"mumbai"
//     }
// }
// console.log(classInfo.Dushyant.city);
// let classInfo=[{name:"dushyant",
//     grade:"a+",
//     city:"mainpuri"
// },
// {
//     name:"akash",
//     grede:"b+",
//     city:"mainpuri"
// },
// {
//     name:"akanksha",
//     age:22,
//     city:"pune"
// }

// ]
// console.log(classInfo[0].city);
// console.log(Math);
// let num1 = Math.random();
// let num2=num1*10;
// let num3=Math.ceil(num2);
// console.log(num3);
// let num=Math.floor(Math.random()*10);
// console.log(num);
// let num =Math.floor(Math.random()*5)+21;
// console.log(num);
const max=prompt("enter the maximum number");
const random=Math.floor(Math.random() * max)+1;
let guess=prompt("enter the random no.");
while(true){
    if(guess=="quit"){
        console.log("you quit the guess");
        break;
    }
    if(guess==random){
        console.log("congrats you guess! the random number is:",random);
        break;
    }
    else if(guess<random){
        guess=prompt("your no. is to small enter a large no.");
    }
    else{
        guess=prompt("your no.is to large please enter a small no.");
    }
    // else{
    //     guess=prompt("please guess again")
    // }
}


