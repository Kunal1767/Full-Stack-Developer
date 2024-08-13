const display=document.getElementById("display")
function appendToDisplay(value) {
    display.value += value
}
function clearDisplay(){
    display.value=''
    console.log("hi")
}
function deleLast(){
    display.value= display.value.slice(0,-1)
}
// console.log(display)
function cr(){
    try {
        display.value=eval(display.value)
    } catch (error) {
        display.value='Error'
    }
}