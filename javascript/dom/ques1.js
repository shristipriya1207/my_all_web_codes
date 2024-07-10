/*let h2 = document.querySelector("h2");
console.log(h2);
let a = h2.innerText;
console.log(a);
h2.innerText= a+" from shristi priya"*/

let divs= document.querySelectorAll(".box");
//console.log(divs[0].innerText);
// divs[0].innerText="modified fisrt div"
// divs[1].innerText="modified second div"
// divs[2].innerText="modified third div"

//another way
/*let idx=1; 
for(div of divs){
    div.innerText=`this is my ${idx} div`
    idx++;
}*/




//
//ATTRIBUTES
//1.getattributes

let select = document.querySelector("#element");
console.log(select.getAttribute("name"));
console.log(select.getAttribute("id"));
console.log(select.getAttribute("class"));

//2.setattribute
console.log(select.setAttribute("name","modified"))
console.log(select.style);
select.style.backgroundColor="red";




