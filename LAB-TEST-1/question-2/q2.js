// Jesse Hughes 101244671

const resolvedPromise = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            let success = {'message': 'delayed Success!'}
            resolve(success);
        },500)
    })
}
const rejectedPromise =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            let error = {'message': 'delayed Exception!'}
            reject(error);
        },500)
    })
}
resolvedPromise().then((message)=>{
    console.log(message);
})
rejectedPromise().catch((message)=>{
    console.log(message);
})

