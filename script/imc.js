var button = document.querySelector("#button")

button.addEventListener("click", () => {
    var peso = document.querySelector("#peso").value
    var altura = document.querySelector("#altura").value
    var imc = peso / (altura * altura)
    var pesoTipo = "Indefinido"
    document.querySelector("#resultado").textContent = imc.toFixed(2)

    if (imc <= 18.5){
        pesoTipo = "Abaixo do Peso"
        }else if (imc <= 24.9){
                pesoTipo = "Peso Normal"
                }else if (imc <= 29.9){
                    pesoTipo = "Sobrepeso"
                    }else if (imc <= 34.9){
                        pesoTipo = "Obesidade Grau I"
                        }else if (imc <= 39.9){
                            pesoTipo = "Obesidade Grau II"                
                            }else if (imc >= 40){
                                pesoTipo = "Obesidade Mórbida"
                            }
            
    document.querySelector("#peso-tipo").innerText="("+pesoTipo+")";
})