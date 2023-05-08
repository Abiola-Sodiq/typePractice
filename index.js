const textCon = document.getElementById("text")
let texts = "My Name is Abiola Sodiq "
let index = 0
let speed = 200

function types(){
if (index < texts.length) {
    textCon.textContent += texts.charAt(index)
    index++
    setTimeout(types, speed)
}
}
types()