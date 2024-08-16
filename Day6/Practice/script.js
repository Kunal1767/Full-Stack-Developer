const tb= document.getElementById('togglon')
const vm= document.getElementById('vm')
const vt= document.getElementById('vt')
console.log(vm)
tb.addEventListener('click',()=>{
    if(vm.style.display=='none'){
        vm.style.display = 'inline'
        tb.innerText='vl'
    }
    else{
        vm.style.display='none'
        vt.style.display='inline'
        tb.innerText='vm'
    }
})

// const para= document.getElementById('para')
// const p = document.getElementById('p')
// const vm =document.getElementById('view_more')
// const vl =document.getElementById('view_less')
// vm.addEventListener('click',()=>{
//     p.style.display='none'
// })