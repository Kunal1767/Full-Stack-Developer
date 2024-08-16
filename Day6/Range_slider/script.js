const r =document.getElementById('rangen')
const d =document.getElementById('demo')
d.innerHTML= r.value
r.oninput= function(){
    d.innerHTML=this.value
}