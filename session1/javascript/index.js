let inputBox = document.getElementById("InputBox");
let result = document.getElementById('Result');
debugger

inputBox.addEventListener('keyup', (e)=>{
    result.innerHTML = e.target.value;
})