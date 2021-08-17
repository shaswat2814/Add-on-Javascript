//The await keyword

//We can only use the await keyword inside of function declared with async.
//await will pause the execution of the function, waiting for a promise to be resolved

const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            console.log("Inside");
            resolve("this is the rainbow color");   
        },delay)
    })
}



async function rainbow(){
     await delayedColorChange('red',1000)
     await delayedColorChange('orange',1000);
     await delayedColorChange('blue',1000);
     await delayedColorChange('green',1000);
     await delayedColorChange('purple',1000);
     await delayedColorChange('yellow',1000);
     await delayedColorChange('pink',1000);
    
    
}

