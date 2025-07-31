// CALLBACK FUNCTION
function userName (callback){
    setTimeout(() =>{
        const user = {
            name:'fathia',
            job: 'software developer',
        }
        callback(user);
    }, 3000);
}
userName((user) =>{
    console.log(`user ${user.name}`);
});

//  PROMISE
function getPromise (){
    return new Promise(function (resolve){
        setTimeout(()=>{
            const user ={
                name: 'fathia',
                job:'software developer'
            }; 
            resolve(user)
        }, 3000);
        }
)
}
getPromise().then((user)=> console.log(`user ${user.name}`));

// ASYNC AWAIT
async function fetchInformation (){
    let information = new Promise ((resolve) =>{
    setTimeout(() => {
        const user ={
            name: 'fathia',
            job: "software developer",
        };
        resolve("user fathia")
    }, 3000)
})
let result = await information;
console.log(result);
};

fetchInformation()