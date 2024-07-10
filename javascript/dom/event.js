let btn1= document.querySelector("#btn1");
btn1.onclick =() =>{
    console.log("clicked button 2")
}

 /*let btn1= document.querySelector("#btn1");
btn1.onclick =(e) =>{
    console.log("clicked button 2")
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}*/



//addEventListener

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
   console.log("button was handled by event listener"); 
})

btn2.addEventListener("click",()=>{
    console.log(" again button was handled by event listener(we can handle mutltiple time by event listener"); 
 })

 //ques3: create a toggle button ,that changes the screen to dark mode whne clicked & light mode when clicked again
//  let mode = document.querySelector("#mode");
//  let curmode ="light";
//  mode.addEventListener("click",()=>{
//     if(curmode=="dark"){
//         curmode="light";
//         document.querySelector("body").style.backgroundColor="white";
//         mode.innerText=" changed into light"
//     }
//     else{
//         curmode="dark"
//         document.querySelector("body").style.backgroundColor="black";

//        mode.innerText="changed into dark"
//     }
//  });


 //using style class 
 let curmode ="light";
 mode.addEventListener("click",()=>{
    if(curmode=="dark"){
        curmode="light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");

        mode.innerText=" change into light"
    }
    else{
        curmode="dark"
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");

       mode.innerText="change into dark"
    }
 });