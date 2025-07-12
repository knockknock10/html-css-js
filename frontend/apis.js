// function Hello(){
//     console.log("helllllllllllll");
// }
// function  demo(){
//     Hello();
// }
// demo();

let h1 = document.querySelector("h1");

// CALLBACK HELL (commented version)
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

// CALLBACK STYLE EXAMPLE
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

// PROMISE VERSION OF savedtob
// function savedtob(data){
//     return new Promise((resolve,reject)=>{
//         let ispeed = Math.floor(Math.random()*10)+1;
//         if(ispeed>4){
//             resolve(`${data} saved `);
//         }else{
//             reject(`${data} got error`);
//         }
//     });
// }
// savedtob("apna")
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

// COLOR CHANGE WITH PROMISES
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

// ASYNC FUNCTION RETURN
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

// COLOR CHANGE WITH RANDOM FAIL
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

// Object for demo
let std = {
	name: "sanjeev",
	degree: "B.tech",
};

// Cat fact API
let url = "https://catfact.ninja/fact";

// ASYNC/AWAIT VERSION API CALL
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

// DOG IMAGE FETCH CODE
let url2 = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");

// CAT FACT FROM AXIOS
btn.addEventListener("click", () => {
	async function fact() {
		try {
			let r = await axios.get(url);
			let s = r.data.fact;
			h2.innerText = s;
		} catch (err) {
			console.log("errror", err);
		}
	}
	fact();
});

// DOG IMAGE FROM AXIOS
let btn2 = document.querySelector("button.dog");
// async function dog_fact() {
// 	try {
// 		let ur = await axios.get(url2);
// 		let se = document.querySelector("p");
// 		let imgUrl = ur.data.message;
// 		se.innerHTML = `<img src="${imgUrl}" width="300"/>`;
// 	} catch (e) {
// 		console.log("error", e);
// 	}
// }
// btn2.addEventListener("click", async () => {
// 	let sd = await dog_fact();
// 	console.log(sd);
// });
// add <img id="result"/> in html

btn2.addEventListener("click",async()=>{
    let link = await getimg();
    let img = document.querySelector("#result");//"img"
    img.setAttribute("src",link);
})
async function getimg() {
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        console.log("errrrrrrrr",e);
        return "/";
    }
}