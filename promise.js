 // const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if(rand< 0.7){
//                 resolve('YOUR FAKE DATA HERE!');
//             }
//             reject('REQUEST ERROR!');
//         }, 1000)
//     })  
// }

// fakeRequest('/dogs/1')
//     .then(() => {
//         console.log("DONE WITH REQUEST!");
//     })
//     .catch((err)=>{
//         console.log("OH NO!",err);
//     })


//chainging promises example


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => {
        console.log("Onto 2");
        return delayedColorChange('green', 1000);
    })
    .then(() => {
        console.log("Onto 3");
        return delayedColorChange('blue', 1000);
    })