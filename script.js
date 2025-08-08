
function atualizarKG() {
    const toneladas = parseFloat(document.getElementById("qtdeToneladas").value) || 0;
    document.getElementById("qtdeKG").value = toneladas * 1000;
    calcularPrecoTotal();
}

function calcularPrecoTotal() {
    const toneladas = parseFloat(document.getElementById("qtdeToneladas").value) || 0;
    const precoTonelada = parseFloat(document.getElementById("precoTonelada").value) || 0;
    const total = toneladas * precoTonelada;
    document.getElementById("precoTotalLote").value = total.toFixed(2);
}
