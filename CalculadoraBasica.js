class Calculadora {
    calculado = false;
    expresion = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    memoria = 0;
    input;


    escribir(string) {
        if (this.calculado && !isNaN(string)) {
            this.limpiar();
            document.getElementById("texto").value = string;

        } else {
            this.input = document.getElementById("texto").value
            document.getElementById("texto").value = this.input + string;
            this.input = document.getElementById("texto").value;
        }
        if (this.calculado)
            this.calculado = false;
    }

    permitEval(string) {

        if (this.expresion.test(string)) {
            return true;
        }
        else {
            return false
        }
    }

    calcular() {
        if (this.permitEval(document.getElementById("texto").value)) {
            document.getElementById("texto").value = eval(document.getElementById("texto").value);
            this.calculado = true;
        }

    }
    limpiar() {
        document.getElementById("texto").value = "";
    }

    sumarMemoria(e) {

        if (!isNaN(document.getElementById("texto").value)) {
            if (e == "suma") {
                this.memoria += Number.parseInt(document.getElementById("texto").value);
            }
            else if (e == "resta") {
                this.memoria -= Number.parseInt(document.getElementById("texto").value);
            }

        }
        this.calculado = true;
    }

    mostrarMemoria() {
        this.limpiar();
        document.getElementById("texto").value = this.memoria;
        this.calculado = true;
    }


}
window.onload = 0;
c = new Calculadora();




















/*
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

*/


