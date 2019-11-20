calculado = false;
memoria = 0;
expresion = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;


function escribir(string) {
    if (calculado && !isNaN(string)) {
        limpiar();
        document.getElementById("texto").value = string;

    } else {
        input = document.getElementById("texto").value
        document.getElementById("texto").value = input + string;
        input = document.getElementById("texto").value;
    }
    if (calculado)
        calculado = false;
}

function permitEval(string) {

    if (expresion.test(string)) {
        return true;
    }
    else {
        return false
    }
}

function calcular() {
    if (permitEval(document.getElementById("texto").value)) {
        document.getElementById("texto").value = eval(document.getElementById("texto").value);
        calculado = true;
    }

}

function limpiar() {
    document.getElementById("texto").value = "";
}

function sumarMemoria(e) {

    if (!isNaN(document.getElementById("texto").value)) {
        if (e == "suma") {
            memoria += Number.parseInt(document.getElementById("texto").value);
        }
        else if (e == "resta") {
            memoria -= Number.parseInt(document.getElementById("texto").value);
        }

    }
    calculado = true;
}

function mostrarMemoria() {
    limpiar();
    document.getElementById("texto").value = memoria;
    calculado = true;
}


