//addition of node 
let btn = document.createElement("button");
btn.innerText="click me";
console.log(btn);
let div = document.querySelector("div");
// div.append(btn); // we can use prepend, after,before also
div.prepend(btn);


//deletion of node
let para= document.querySelector("p");
para.remove();