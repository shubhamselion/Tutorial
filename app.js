let btn = document.createElement("button");
btn.innerText="click me ";
btn.style.backgroundColor="yellow";
document.querySelector("body").append(btn);
let p =document.createElement("p");
p.innerText="this is the first paragraph";
let body=document.querySelector("body");
body.append(p);

btn.addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor="grey";

});