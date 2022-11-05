
var a = "a from outside" //global
const b = 5;    //global can't change
let c = "c from outside" //within defined function
const chatArea = document.querySelector(".chatArea");
const header = document.querySelector(".header");
const mainHeader = document.querySelector(".mainHeader");


const abc = (parameters) =>{

    mainHeader.innerHTML = parameters.innerHTML
    
    const chatBox = document.createElement('div')  
    chatBox.className = "chatBox";

    chatArea.appendChild(chatBox);

    const backButton = document.createElement("h1")
    backButton.innerHTML = "⬅"
    backButton.className = "backButton"
    backButton.addEventListener('click', ()=>{
        chatBox.remove();
        backButton.remove();
        mainHeader.innerHTML = "TwinChat"
    })
    header.appendChild(backButton)

} 

console.log(a);
console.log(b);
console.log(c);
