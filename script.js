const display = document.getElementById("display");

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}

// Suporte ao teclado
document.addEventListener("keydown", (event) => {
    const tecla = event.key;

    if (!isNaN(tecla) || "+-*/.".includes(tecla)) {
        adicionar(tecla);
    } else if (tecla === "Enter") {
        calcular();
    } else if (tecla === "Backspace") {
        apagar();
    } else if (tecla === "Escape") {
        limpar();
    }
});