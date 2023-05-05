// [X] Iniciar o nosso app
// [X] Selecionar os valores do formulário
// [X] Calcular a área do triangulo
// [X] Mostrar o resultado na tela

let app = () => {
    let form = document.querySelector(".form");

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("clicou")
        let newData = getValues()
        if (newData.altura == "" || newData.base == "") {
            window.alert("PRENCHA TODOS OS DADOS")
            window.alert("SEU ANIMAL!")
        } else {
            if (isNaN(parseInt(newData.base)) || isNaN(parseInt(newData.altura))) {
                window.alert("APENAS NÚMEROS")
            } else {
                calc(newData)
            }
        }
    })
    let getValues = () => {
        let A = document.querySelector("#base")
        let B = document.querySelector("#altura")
        let valores = {
            altura: A.value,
            base: B.value
        }
        return valores;
    };

    let calc = (value) => {
        let result_calc = (parseInt(value.altura)) * (parseInt(value.base)) / 2;
        mostrar_result(result_calc)
    }
    let mostrar_result = (value) => {
        let most = document.querySelector(".result");
        most.innerHTML = `${value}`
    }
}
app();