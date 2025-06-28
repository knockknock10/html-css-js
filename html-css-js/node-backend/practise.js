// function Hello(){
//     console.log("helllllllllllll");
// }
// function  demo(){
//     Hello();
// }
// demo();
let h1 = document.querySelector("h1");
//CALLBACK HELL
// function changecolor(color,delay,nextchange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(changecolor){
//             nextchange();
//         }
//     },delay);
// };
// changecolor("red",1000,()=>{
//     changecolor("green",1000,()=>{
//         changecolor("blue",1000,()=>{
//             changecolor("yellow",1000)
//         });
//     });
// });
// function savedtob(data,success,failure){
//     let interspeed = Math.floor(Math.random() * 10)+1;
//     if(interspeed>4){
//         success();
//     }else{
//         failure();
//     }
// }
// savedtob("srm university",()=>{
//     console.log("Sucess : data saved ");
//     savedtob(
//         "colleges",()=>{
//             console.log("Success 2 : data saved ");
//         },()=>{
//             console.log("failure 2 ;data didnt saved ");
//         }
//     )
// },()=>{
//     console.log("failure data didnt saved");
// })
// function savedtob(data){
//     return new Promise((resolve,reject)=>{
//         let ispeed = Math.floor(Math.random()*10)+1;
//         if(ispeed>4){
//             // console.log("success");
//             resolve(`${data} saved `);
//         }else{
//             // console.log("failur");
//             reject(`${data} got error`);
//         }
//     });
// }
// savedtob("apna")
//     // .then(()=>{
//     //     console.log("resolved");
//     //     savedtob("hello")
//     //     .then(()=>{
//     //         console.log("resolved 2");
//     //     })
//     // })
//     //IMPROVED VERSION
//     .then((result)=>{
//         console.log("data saved 1");
//         console.log("result 2 ",result);
//         return savedtob("hello");
//     })
//     .then((result)=>{
//         console.log("data saved 2");
//         console.log("result 2 ",result);
//         return savedtob("know me");
//     })
//     .then((result)=>{
//         console.log("data saved 3");
//         console.log("result 3 ",result);
//     })
//     .catch((error)=>{
//         console.log('catch');
//         console.log("errorrrr  ",error);
//     })
// function changecolor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         h1.style.color = color;
//         let a = resolve(`${color} color changed `);
//     },delay);
//     })
// }
// changecolor("red",1000)
//     .then((msg)=>{
//         console.log("changed 1",msg);
//         return changecolor("blue",1000)
//     })
//     .then(()=>{
//         console.log("changed 2");
//         return changecolor("green",1000)
//     })
//     .then(()=>{
//         console.log("changed 3");
//     })
//     .catch(()=>{
//         console.log("errrrrrrrrrrrrrorrrrrrrrr");
//     })
// async function greet(){
//     // throw("page 404 not found");
//     return "heelo !";
// }
// greet()
// .then((result)=>{
//     console.log("data saved");
//     console.log("data ",result);
// })
// .catch((err)=>{
//     console.log("i got errrrrrooooorrrrr");
//     console.log("erroors",err);
// })
function greet(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let m = Math.floor(Math.random() * 5) + 1;
			if (m > 3) {
				reject("rejected during " + m);
			}
			h1.style.color = color;
			console.log(m);
			resolve("color changed");
		}, delay);
	});
}
async function demo() {
	try {
		await greet("red", 1000);
		await greet("blue", 1000);
		await greet("green", 1000);
	} catch (err) {
		console.log("error found");
		console.log(err);
	}
	console.log("okay all done");
}
demo();
let std = {
	name: "sanjeev",
	degree: "B.tech",
};
let url = "https://catfact.ninja/fact1";
// fetch(url)
// 	.then((response) => {
// 		console.log(response);
// 		response.json().then((data) => {
// 			console.log(data.fact);
// 		});
// 	})
// 	.catch((err) => {
// 		console.log("errrr", err);
// 	});

// async and await using api
async function getfact() {
	try {
		let res1 = await fetch(url);
		let data = await res1.json();
		console.log(data);
	} catch (e) {
		console.log("errorrrrrrrrrrrrr", e);
	}
}
// Streak commit for June 24, 2025
// Another line for streak recovery.
getfact();
