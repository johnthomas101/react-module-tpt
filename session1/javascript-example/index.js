let inputBox = document.getElementById("InputBox");
let result = document.getElementById("Result");
// ----

inputBox.addEventListener("keyup", () => {
    result.innerText = inputBox.value;
})

// inputBox.addEventListener("keydown", () => {
//     console.log("Key down");
// })







