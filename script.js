
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
function formatCurrency(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function updateBox2Box3() {
  const custoLote = parseFloat(document.getElementById("precoLote").innerText.replace("R$ ", "").replace(".", "").replace(",", ".")) || 0;

  const frete = parseFloat(document.getElementById("frete").value) || 0;
  const armazenagem = parseFloat(document.getElementById("armazenagem").value) || 0;
  const operacional = parseFloat(document.getElementById("operacional").value) || 0;
  const custoExtra = frete + armazenagem + operacional;

  document.getElementById("custoExtra").innerText = formatCurrency(custoExtra);

  const custoFinal = custoLote + custoExtra;

  const pctVarejo = parseFloat(document.getElementById("pctVarejo").value) || 0;
  const precoVarejo = parseFloat(document.getElementById("precoVarejo").value) || 0;

  const pctAtacado = parseFloat(document.getElementById("pctAtacado").value) || 0;
  const precoAtacado = parseFloat(document.getElementById("precoAtacado").value) || 0;

  const pctCoop = parseFloat(document.getElementById("pctCoop").value) || 0;
  const precoCoop = parseFloat(document.getElementById("precoCoop").value) || 0;

  const totalKg = parseFloat(document.getElementById("kgTotal").innerText.replace(" kg", "").replace(",", ".")) || 0;

  const receitaTotal =
    (pctVarejo / 100 * totalKg * precoVarejo) +
    (pctAtacado / 100 * totalKg * precoAtacado) +
    (pctCoop / 100 * totalKg * precoCoop);

  document.getElementById("receitaTotal").innerText = formatCurrency(receitaTotal);

  const lucro = receitaTotal - custoFinal;
  document.getElementById("lucroEstimado").innerText = formatCurrency(lucro);
}

// Atualiza tudo ao digitar
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    calcularLote();     // Já existente
    updateBox2Box3();   // Novo
  });
});
