let app = () => {
    let form = document.querySelector(".form");
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        getData()
    })
    let getData = () => {
        let base = (document.querySelector("#base")).value;
        let altura = (document.querySelector("#altura")).value;
        let data = {
            b: base,
            h: altura
        }
        verifyData(data)
    }
    let verifyData = (data) =>{
        if (data.b == "" || data.h == "") {
            alert("Preencha todos os dados para calcular")
        } else {
            if (isNaN(parseInt(data.b)) || isNaN(parseInt(data.h))) {
                alert("Digite um número para calcular")
            } else {
                calc(data.b, data.h)
            }
        }
    }

    let calc = (base, altura) => {
        let result = (base * altura) / 2
        showResultToUser(result)
    }
    let showResultToUser = (result) => {
        let p = document.querySelector(".result")
        p.innerHTML = result
    }
}
app();