var button = document.querySelector("#button")

button.addEventListener("click", () => {
    var peso = document.querySelector("#peso").value
    var altura = document.querySelector("#altura").value
    var imc = peso / (altura * altura)
    document.querySelector("#resultado").textContent = imc.toFixed(2)
    console.log(peso)
    console.log(altura)
})