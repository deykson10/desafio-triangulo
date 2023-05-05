let a = window.prompt("Digite o valor A")
let b = window.prompt("Digite o valor B")
let c = window.prompt("Digite o valor C")
let delta = (b*b) - 4 * a * c;
let verticeX = -b/2 * a
let verticeY = -delta/4 * a

window.alert(`O resultado de delta é: ${delta} , valor da vertice X é ${verticeX}, valor da vertice Y é ${verticeY}`)
