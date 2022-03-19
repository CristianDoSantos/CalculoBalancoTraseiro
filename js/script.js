function calcular() {
    let balanço = document.getElementById('balançoT')
    let entre = document.getElementById('entreE')
    let res = document.getElementById('res')
    let informaçoes = document.getElementById('informaçoes')
    let limite = 3500
    let soma = entre.value * 0.6
    if (balanço.value == 0 || entre.value == 0) {
        window.alert('ERRO! Por favor informe as medidas')
    }
    if (soma > limite) { // verificando se o calculo ultrapassa o limite da norma
        soma = limite
    }
    if (balanço.value > soma) { // verificando se o balanço ultrapassa o calculo
        // reprovou
        res.innerHTML = '<p style="color: red;">REPROVADO!</p>'
        informaçoes.innerHTML = ''
        informaçoes.innerHTML += `<p>O limte para esse balanço traseiro é de ${soma}mm.</p>` 
        informaçoes.innerHTML += `<p>Você terá que diminuir o seu balanço traseiro em ${balanço.value - soma}mm.</p>`
    } else {
        // Aprovou 
        res.innerHTML = '<p style="color: green;">APROVADO!</p>'
        informaçoes.innerHTML = ''
        informaçoes.innerHTML += `<p>O limite máximo para esse balanço traseiro é de ${soma}mm.</p>`
        if (balanço.value < soma){
            informaçoes.innerHTML += `<p>Você ainda poderia aumentar o seu balanço traseiro em ${soma - balanço.value}mm.</p>` 
        }
    }
}