//Javascript is single threaded
//At any given point in time, a single JS thread is running at most one line of JS code
// Question that arises?..What happens when something takes a long time?

// console.log("Sending request to server");
// setTimeout(()=>{
//     console.log("Here is your data from the server..."); 
// },3000);//the server is not waiting for this to timeout and then going on to the next line of the code
//it just goes to the next line and executes and returns  when the data is availble at the caller function which is taking time
// console.log("I am at the end of file!");

//Browsers come with Web API's that are able to handle certain tasks in the background 
//The JS call stack recognises these Web API functions and passes them off to the browser to take care of
//Once the browser finishes those, tasks return and are pushed onto the stack as a callback

//THE ASYNC KEYWORD

//Async functions always return a promise.
//If the fucntion returns a value, the promise will be resolved with that value.
//If the function throws and exception, the promise will be rejected.

// const sing = async () => {

//     return "I like to sing";

// }

// sing()
// .then((data)=>{
//     console.log("promsie resovled",data);
// })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';
    if (password === 'corgifeetarecute') return 'WELCOME!';
    throw 'Invalid Password';

}

login('shaswat','corgifeetarecute')
    .then((msg) => {
        console.log("Loged In!");
        console.log(msg);
    })
    .catch(err => {
        console.log('Error!');
        console.log(err);
    })