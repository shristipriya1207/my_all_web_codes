/*const ele = document.getElementById("title");
console.log(ele);
console.log(ele.id);
console.log(ele.className);
console.log(ele.getAttribute("class"));
document.getElementById("title").setAttribute("class","heading_2");
console.log(ele.className);
// ele.style.color="red";
ele.style.backgroundColor="green";



//read properly queryselector and queryselectorall
//queryselectorall returns nodelist.

const templist = document.querySelectorAll("li");
console.log(templist)

//if we want to change all the element of "Ui" together, its not possible , we hav to do one by one bacuse it is not array
//templist.style.backgroundColor="green";  //error
templist[0].style.backgroundColor="green";   // it will work

// we can use foreach loop to access
templist.forEach(function (l){
    l.style.backgroundColor ="green";
})



//getElemmentbYclassname is return html collection 
// we need to change into array.then we can use for each loop to access the element
const list = document.getElementsByClassName("list-item");
const updated_list=Array.from(list);
updated_list.forEach(function(li){
    li.style.color="orange"
})
*/


//creating new element

/*const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayone = document.querySelector(".day");
console.log(dayone.parentElement);
console.log(dayone.nextElementSibling);
*/

const div= document.createElement("div");
console.log(div);
div.classNmae="main";
div.id=Math.round(Math.random()*10+1);
div.setAttribute("title","generated title");
div.style.backgroundColor="green";
// div.innerText="chai or code";
const addtext= document.createTextNode("chai or code");
div.appendChild(addtext);
document.body.appendChild(div);
