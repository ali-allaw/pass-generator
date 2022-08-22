/* 
    [1] Set characters to create the serial
    [2] Set serial characters count
    [3] Create empty variable to store the serial
    [4] Create random number + Access sequence
    [5] Store the random element in the empty variable 
    [6] Loop X Count
    [7] Change serial element with the serial variable 
*/
let gen = document.querySelector(".generate");
let ser = document.querySelector(".serial");

gen.addEventListener("click", () => {
    let characters = "1234567890QWERTYUIPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm!@#$%^&*()_+|}{"
    let charsCount = 10
    let finalNum = "";
    for (let i = 0; i < charsCount; i++) {
        finalNum += characters[Math.floor(Math.random() * characters.length)]
    }
    ser.innerHTML = finalNum
})