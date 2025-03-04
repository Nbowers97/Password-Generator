const characters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let passwrd1 = document.getElementById("password-1")
let passwrd2 = document.getElementById("password-2")
let password1 = ""
let password2 = ""
let passwordBtn = document.getElementById("pass-btn")



function resetPassword() {
    password1 = ""
    password2 = ""
    newPassword()
}



function newPassword() {

    let randomPassLength = [Math.floor(Math.random() * 15) + 4]

    for (i = 0; i < randomPassLength; i++) {

        let randomIndex1 = Math.floor(Math.random() * characters.length)
        password1 += characters[randomIndex1]

        let randomIndex2 = Math.floor(Math.random() * characters.length)
        password2 += characters[randomIndex2]

        passwrd1.textContent = password1
        passwrd2.textContent = password2

    }
}
