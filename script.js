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
    console.log(`user:${user.name}`);
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
getPromise().then((user)=> console.log(`user:${user.name}`));

// ASYNC AWAIT
async function fetchInformation (){
    let information = new Promise ((resolve) =>{
    setTimeout(() => {
        const user ={
            name: 'fathia',
            job: "software developer",
        };
        resolve("user:fathia")
    }, 3000)
})
let result = await information;
console.log(result);
};

fetchInformation()

// promise all
async function fetchInformation2() {
  const user1Promise = new Promise(resolve => {
    setTimeout(() =>{
         const user ={
            name: 'fathia',
            job: "software developer",
        };
         resolve("user:fathia")
         }, 3000);
  });
  
  const user2Promise = new Promise(resolve => {
    setTimeout(() => {
        const user ={
            name: 'fathia',
            job: "software developer",
        }; 
        resolve("user:fathia");
        }, 3000);
  });
  
  const [user1, user2] = await Promise.all([user1Promise, user2Promise]);
  console.log(user1, user2);
}

fetchInformation2();