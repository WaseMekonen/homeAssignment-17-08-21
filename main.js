// Home Assignment-Dom 17-08-21:///

// Exercise 1://

// let firstButton = document.getElementById("button1");

// firstButton.addEventListener("click",function(){
//     button1.innerText="Click On-Me!";
// }
// )

// Exercise 2://

// const fButton= document.getElementById("firstButton");
// const sButton= document.getElementById("secondButton");
// const tButton= document.getElementById("thirdButton");
// const foButton= document.getElementById("forthButton");

// fButton.addEventListener("click",function(){
//     alert("First Button");
// });

// sButton.addEventListener("click", function(){
//     alert("Second Button");
// });

// tButton.addEventListener("click", function(){
//     alert("Third Button");
// });

// foButton.addEventListener("click", function(){
//     alert("Forth Button");
// });

// Exercise 3://

// let list=document.getElementsByClassName("listClass");

// for(let i=0; i<list.length; i++){
//     list[i].addEventListener("click",function(){
//         console.log(list[i].innerText);
//     })
// }

// Exercise 4://

// let num=0;
// const paragraph=document.getElementById("firstPara");
// const button=document.getElementById("addNum");
// const button1=document.getElementById("subNum");


// button.addEventListener("click", function(){
//     num+=1;
//     paragraph.innerText=num;
// })
// // Exercise 5://
// button1.addEventListener("click", function(){
//     num-=1;
//     paragraph.innerText=num;
// })

// Exercise 7://

// const products=[
//     {
//         name:"iPhone",
//         price: 450,
//         Description:"new version 14max",
//     },
//     {
//         name:"lapetop",
//         price: 1550,
//         Description:"lenovo thinkPad",
//     },
//     {
//         name:"JBLspeker",
//         price: 150,
//         Description:"jbl partybox 1000",
//     }
// ]

// A:

// let maxOfproducts=products[0].price;
// for(let i=1; i<products.length; i++){
//     if(products[i].price>maxOfproducts){
//         maxOfproducts=products[i].price
//     }
// }
// console.log(maxOfproducts); 

// B:

// let mminOfproducts=products[0].price;
// for(let i=1; i<products.length; i++){
//     if(products[i].price<mminOfproducts){
//         mminOfproducts=products[i].price
//     }
// }
// console.log(mminOfproducts); 

// C:

// let discountPrice;
// for(let i=0; i < products.length; i++){
//     discountPrice=products[i].price*0.70
//     console.log(discountPrice);
// }









