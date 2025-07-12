let simage = document.getElementsByClassName("oldImg");
for(let num = 0;num<simage.length;num++){
    console.log(simage[num].src);
    console.log(`value of ${num} has been printed`);

}
let links = document.querySelectorAll(".box a");
for(let i =0;i<links.length;i++){
    links[i].style.color = 'purple';
}
let para1 = document.createElement("p");
para1.innerText = "hey am red";
document.querySelector('body').append(para1);
para1.classList.add("red");

let h3  = document.createElement('h3');
h3.innerText = "Hi am blue h3";
document.querySelector('body').append(h3);
h3.classList.add("blue");

let div1 = document.createElement('div');
let h1  =  document.createElement('h1');
let p1 = document.createElement('p');
h1.innerText = "I am in a div";
p1.innerText = "ME TOO";
div1.append(h1);
div1.append(p1);
div1.classList.add("div1");
document.querySelector('body').append(div1);

let btn = document.querySelector('button');
// btn.onclick = function(){
//     console.log("knock knock !!");
// }
function abcd(){
    console.log("halllllloooooooooooo");
}
// btn.onclick = abcd;
// btn.onmouseenter = abcd;
// function df(){
//     console.log("it's meeeeee");
// }
// btn.addEventListener("click",df);
// btn.addEventListener("click",abcd);
// btn.addEventListener("dblclick",abcd);


btn.addEventListener("click",function(){
    let h3 = document.querySelector('h3');
    let randomcolor = randcolor();
    h3.innerText = randomcolor;
    let div= document.querySelector("div");    
    div.style.backgroundColor = randomcolor;
})
function randcolor(){
    let red = Math.floor(Math.random() * 225);
    let green = Math.floor(Math.random() *225);
    let blue = Math.floor(Math.random() *225);
    
    let color = `rgb(${red}, ${green} ,${blue})`;
    return color;

}
let para = document.querySelector('p');
para.addEventListener('click',function (){
    let color = randcolor();
    para.style.backgroundColor = color;
})
let di = document.querySelector('.di');
di.addEventListener("mouseenter",function(){
    let c = randcolor();
    di.style.backgroundColor = c; 
})
di.addEventListener("mouseleave",function(){
    let c = randcolor();
    di.style.backgroundColor = c; 
})
let inp = document.querySelector('input');
inp.addEventListener("keydown",function(){
    console.log("key pressed");
})
