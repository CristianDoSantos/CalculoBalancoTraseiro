function calcular() {
    let balanco = document.getElementById('balancoT')
    let entre = document.getElementById('entreE')
    let res = document.getElementById('res')
    let informaçoes = document.getElementById('informacoes')
    let limite = 3500
    let soma = entre.value * 0.6
    if (balanco.value == 0 || entre.value == 0) {
        window.alert('ERRO! Por favor informe as medidas')
    }
    if (soma > limite) { // verificando se o calculo ultrapassa o limite da norma
        soma = limite
    }
    if (balanco.value > soma) { // verificando se o balanço ultrapassa o calculo
        // reprovou
        res.innerHTML = '<p style="color: red;">REPROVADO!</p>'
        informacoes.innerHTML = ''
        informacoes.innerHTML += `<p>O limte para esse balanço traseiro é de ${soma}mm.</p>` 
        informacoes.innerHTML += `<p>Você terá que diminuir o seu balanço traseiro em ${balanco.value - soma}mm.</p>`
    } else {
        // Aprovou 
        res.innerHTML = '<p style="color: green;">APROVADO!</p>'
        informacoes.innerHTML = ''
        informacoes.innerHTML += `<p>O limite máximo para esse balanço traseiro é de ${soma}mm.</p>`
        if (balanco.value < soma){
            informacoes.innerHTML += `<p>Você ainda poderia aumentar o seu balanço traseiro em ${soma - balanco.value}mm.</p>` 
        }
    }
}