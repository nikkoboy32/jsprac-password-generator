const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const generateButton = document.querySelector('.generate_password')
const firstPassword = document.querySelector('.password1')
const secondPassword = document.querySelector('.password2')
const passwordSpan = document.querySelectorAll('.password_span')
const textAlert = document.querySelector('.text_alert')
const darkModeButton = document.querySelector('.dark_mode_button')
const darkModeCircle = document.querySelector('.dark_mode_button_circle')
const passwordInput = document.querySelector('#password_length')
let generated = false;



function lightMode() {
    darkModeCircle.classList.toggle('light_mode')
    document.querySelector(".password_generator_con").classList.toggle("password_generator_con_dark")
}

darkModeButton.addEventListener('click', () => {
    lightMode()
})


generateButton.addEventListener("click", () => {
    firstPassword.textContent = generatePassword()
    secondPassword.textContent = generatePassword()
    console.log(passwordInput.value)
   
})


function generatePassword() {
    let password = ""
    let passwordInputValue = passwordInput.value
    
        if(passwordInputValue >=8 && passwordInputValue <= 16) {
            for(let i = 0; i < passwordInputValue; i++) {
                const randomNumber = Math.floor(Math.random() * characters.length)
                password += characters[randomNumber]
                generated = true} 
             }else {
                alert("Please choose password length between 8-16")
              password = ""
           }

    return password
}

passwordSpan.forEach(span => {
    span.addEventListener('click',() => {
         // Create a range and select the span text
    const range = document.createRange();
 
    range.selectNode(span);

    // Clear current selection
    window.getSelection().removeAllRanges();
    
    // Add the range to the selection
    window.getSelection().addRange(range);
    
    // Execute the copy command
    document.execCommand("copy");
    
    // Clear the selection (optional)
    window.getSelection().removeAllRanges();
    
    // Optional: Provide feedback to the user
    if(generated === false || passwordInput.value === "") {
        alert("Please generate password between 8-16")
    } else {
        showTextAlert() 
        setTimeout(hideTextAlert, 2000)
    }
    })
})

function showTextAlert() {
    textAlert.classList.add("show_text_alert")
}

function hideTextAlert() {
    textAlert.classList.remove("show_text_alert")
}

