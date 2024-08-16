// const fetchdata =(callback)=>{
//     setTimeout(()=>{
//         console.log('data fetched')
//         callback('here s your data')
//     },1000)
// }

// const displayD=(data)=>{
//     console.log(data)
// }
// fetchdata(displayD)
// console.log('hello2')


// const myPromise= new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let success= false
//     if(success){
//         resolve('data fetched')
//     }
//     else{
//         reject('error fetching data')
//     }
//   },1000)  
// })
// myPromise.then(data=>{
//     console.log(data +' thankyou')
// })
// .catch(error=>{
//     console.log('error')
// })


// const fetchdata=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('data fetch')
//         },1000)
//     })
// }
// const processD=(data)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('${data} process')
//         },1000)
//     })
// }
// const displayD=(data)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve('${data} Display ')
//         },1000)
//     })
// }
// fetchdata()
// .then(data=>processD(data))
// .then(processD=>displayD(processD))
// .then(result=>console.log(result))
// .catch(error=>console.erro(error))


// async

// console.log('hi')
async function fetchdata(){
    try{
        let data = await new Promise((resolve,reject)=>{
            setTimeout(()=> resolve('data'))
        })
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
}
fetchdata()

const fd = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('data'))
    },1000)
}
const df = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('data'))
    },1000)
}
const fd = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('data'))
    },1000)
}