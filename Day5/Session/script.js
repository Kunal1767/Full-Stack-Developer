// let bike = ['honda','ct100']
// let jk = 'strings'
// console.log(typeof(jk))
// console.log(jk.length)
// bike.push('re')
// bike.unshift('ui')
// bike.pop()
// bike.shift()
// bike[0]=jk
// console.log(bike)


// var b =10
// var b =20
// {
//     var b =10
//     var b =12
// }
// console,log(b)
// let a =5
// a =5
// {
//     let a= 5
//     let a=5
// }
// console.log(a)


let bike = ['honda','bmw','kawasaki','bajaj']
let car =['maruti','apachi','tvs']
// let allv = bike.concat(car)
// console.log(allv)


// let sliceB = bike.slice(-1,4)
// console.log(sliceB)

bike.splice(1,1,'kl','lk')
// console.log(bike)
// console.log(bike.indexOf('bajaj'))
// console.log(bike.lastIndexOf('bmw'))


// bike.forEach(bike=>console.log(bike))

// let length = bike.map(bike=>bike.length)
// console.log(length)

// for(let i=0;i<bike.length;i++){
//     console.log(bike[i])
// }

// for(let bik of bike){
//     console.log(bik)
// }

// let vk = bike.filter(bike=>bike.length>3)
// console.log(vk)

// let jk= bike.reduce((sum,bik)=>sum+bik.length,0)
// console.log(jk)

let matrix=[
    [1,2,3],[4,5,6],[7,8,9]
]
console.log(matrix[2][1])

// spread operator
let arr1=[1,2,3]
let arr2=[...arr1,4,5,6]
console.log(arr2)

// rest operater
function sum(...number){
    return number.reduce((a,b)=>a+b)
}
console.log(sum(1,2,3,4,5,6))

// array destructing
let[first,Second,third] = bike
console.log(first)
console.log(Second)

// array membership
console.log(bike.includes('bmw'))


// sorting arrays

console.log(bike)
const y=bike.sort()
console.log(y)

let num=[10,20,30,40]
let max= Math.max(...num)
let min= Math.min(...num)
console.log(max)
console.log(min)

let arr=[1,7,4,5,2]
console.log(arr.sort())

