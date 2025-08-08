function calcularKG() {
  const toneladas = parseFloat(document.getElementById("qtdeTon").value) || 0;
  const kg = toneladas * 1000;
  document.getElementById("qtdeKG").value = kg;
  calcularPrecoLote();
}

function calcularPrecoLote() {
  const toneladas = parseFloat(document.getElementById("qtdeTon").value) || 0;
  const precoPorTonelada = parseFloat(document.getElementById("precoTonelada").value) || 0;
  const total = toneladas * precoPorTonelada;
  document.getElementById("precoLote").value = total.toFixed(2);
}

function exibirTipoSaca() {
  const tipo = document.getElementById("tipoEmbalagem").value;
  document.getElementById("tipoSacaBox").style.display = tipo === "Saca" ? "block" : "none";
}
