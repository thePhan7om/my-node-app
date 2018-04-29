var asyncAdd = (a, b) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else
                reject("Args must be numbers");
        }, 2500);
        
    });
    
};

asyncAdd(4, 5).then((result) => {
    console.log(`Answer = ${result}`);
    return (asyncAdd(result, 18));
}).then((result) => {
    console.log(`Should be 27 = ${result}`);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

//
// var somePromise = new Promise( (resolve,reject) =>{
//     setTimeout(()=>{
//         //resolve("Hey it worked");
//         reject("nope");
//     },2500);
//
// });
//
// somePromise.then((message)=>{
//     console.log("Succss : "+message);
// },(errorMessage) =>{
//     console.log("Error : " +errorMessage);
// })