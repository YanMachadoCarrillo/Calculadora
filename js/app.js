
// Suma de productos con Query Params
function sumarQ() {

let num1 = document.getElementById("n1").value
let num2 = document.getElementById("n2").value

fetch(`http://localhost:3000/suma?num1=${num1}&num2=${num2}`)
.then(response => response.json())
.then(data => {

document.getElementById("resultado").innerText =
"Resultado Query Params: " + data.resultado

})
.catch(error => console.log(error))

}




// Suma de productos con Body Params

function sumarB() {

let num1 = document.getElementById("n1").value
let num2 = document.getElementById("n2").value

fetch("http://localhost:3001/suma",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
num1:num1,
num2:num2
})

})
.then(res => res.json())
.then(data => {

document.getElementById("resultado").innerText =
"Resultado Body Params: " + data.resultado

})

}

//Suma de productos con Path Params

function sumarP(){

let num1 = document.getElementById("n1").value
let num2 = document.getElementById("n2").value

fetch(`https://calculadora-1-wnkb.onrender.com/suma/${num1}/${num2}`)
.then(res => res.json())
.then(data => {

document.getElementById("resultado").innerText =
"Resultado Path Params: " + data.resultado

})

}
