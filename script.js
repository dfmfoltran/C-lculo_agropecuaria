
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
function updateBox4() {
  const custoLote = parseFloat(document.getElementById("precoLote").innerText.replace("R$ ", "").replace(".", "").replace(",", ".")) || 0;
  const custoExtra = parseFloat(document.getElementById("custoExtra").innerText.replace("R$ ", "").replace(".", "").replace(",", ".")) || 0;
  const custoFinalKg = (custoLote + custoExtra) / (parseFloat(document.getElementById("kgTotal").innerText.replace(" kg", "").replace(",", ".")) || 1);

  const custoConcorrente = parseFloat(document.getElementById("custoConcorrente").value) || 0;
  const precoConcorrente = parseFloat(document.getElementById("precoConcorrente").value) || 0;

  const receitaTotal = parseFloat(document.getElementById("receitaTotal").innerText.replace("R$ ", "").replace(".", "").replace(",", ".")) || 0;
  const precoVendaKg = receitaTotal / (parseFloat(document.getElementById("kgTotal").innerText.replace(" kg", "").replace(",", ".")) || 1);

  const diferencaCusto = custoFinalKg - custoConcorrente;
  const diferencaPreco = precoVendaKg - precoConcorrente;

  document.getElementById("diferencaCusto").innerText = formatCurrency(diferencaCusto);
  document.getElementById("diferencaPreco").innerText = formatCurrency(diferencaPreco);

  let analise = "";

  if (diferencaCusto < 0 && diferencaPreco > 0) {
    analise = "Muito competitivo: menor custo e maior preço!";
  } else if (diferencaCusto < 0 && diferencaPreco <= 0) {
    analise = "Boa margem: custo menor, preço igual ou menor.";
  } else if (diferencaCusto >= 0 && diferencaPreco > 0) {
    analise = "Boa receita, mas custo acima da média.";
  } else {
    analise = "Cuidado: margem apertada ou negativa.";
  }

  document.getElementById("analiseCompetitiva").innerText = analise;
}
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    calcularLote();       // Já existente
    updateBox2Box3();     // Box 2 e 3
    updateBox4();         // Novo
  });
});

// Atualiza tudo ao digitar
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    calcularLote();     // Já existente
    updateBox2Box3();   // Novo
  });
});
