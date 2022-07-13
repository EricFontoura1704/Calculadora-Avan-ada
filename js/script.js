// Varíaveis com escopo Global
let numero1 = "";
let numero2 = "";
let operador = "";

function pegarValor(valor) {
    somTecla();

    // verifica se o operador tem valor
    if (operador == "") {
        numero1 = numero1 + valor;
        // numero1 += valor;

        atualizarDisplay(numero1);

    } else {
        numero2 += valor;
        atualizarDisplay(numero2);
    }
}

function pegarOperador(sinal) {
    somTecla();

    // Verifica se o primeiro valor foi informado
    if (numero1 != "") {

        // Verifica se o segundo valor foi informado
        if (numero2 == "") {
            operador = sinal;
            atualizarDisplay(numero1 + operador);
        } else {
            calcular();
        }
    }
}

function calcular() {
    numero1 = numero1.replace("," , ".");
    numero2 = numero2.replace("," , ".");

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    let resultado = "";

    // Verifica o Sinal informado
    if (operador == "+") {
        resultado = numero1 + numero2;

    } else if (operador == "-") {
        resultado = numero1 - numero2;

    } else if (operador == "*") {
        resultado = numero1 * numero2;

    } else if (operador == "%") {
        resultado = numero1 % numero2;

    } else if (operador == "/") {
        resultado = numero1 / numero2;
    }

    resetar()
    atualizarDisplay(resultado);
}

function verificarIgual() {
    somTecla();

    // Verifica se todos o campos foram preenchidos
    if (numero1 != "" && numero2 != "" && operador != "") {
        calcular();
    }
}

function resetar() {
    somTecla();
    numero1 = "";
    numero2 = "";
    operador = "";
    atualizarDisplay(0);
}

function atualizarDisplay(valor) {
    document.getElementById('display').innerHTML = valor;
}


function somTecla() {
    const blip = document.getElementById('blip');
    blip.volume = 0.3;
    blip.play();
}