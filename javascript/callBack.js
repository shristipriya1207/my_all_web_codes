function getData(dataId){
    setTimeout(()=>{
        console.log("data",dataId);
    },2000);
}

getData(1);
getData(2);
getData(3);