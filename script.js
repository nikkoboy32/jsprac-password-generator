const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const generateButton = document.querySelector('.generate_password')
const firstPassword = document.querySelector('.password1')
const secondPassword = document.querySelector('.password2')



generateButton.addEventListener("click", () => {
    firstPassword.textContent = generatePassword()
    secondPassword.textContent = generatePassword()
})


function generatePassword() {
    let password = ""
    
    for(let i = 0; i < 16; i++) {
        const randomNumber = Math.floor(Math.random() * characters.length)
        password += characters[randomNumber]
    }

    return password
}

