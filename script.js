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
function calcularDespesasExtras() {
  const frete = parseFloat(document.getElementById("custoFrete").value) || 0;
  const operacionais = parseFloat(document.getElementById("custosOperacionais").value) || 0;
  const embalagem = parseFloat(document.getElementById("custoEmbalagem").value) || 0;
  const etiqueta = parseFloat(document.getElementById("custoEtiqueta").value) || 0;
  const estoque = parseFloat(document.getElementById("custoEstoque").value) || 0;

  const total = frete + operacionais + estoque; // embalagem e etiqueta serão usados depois por unidade
  document.getElementById("totalDespesasExtras").innerText = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
