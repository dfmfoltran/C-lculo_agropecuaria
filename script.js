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
function toggleVendaTipo() {
  const tipo = document.getElementById("vendaTipo").value;
  document.getElementById("sacasBox").style.display = tipo === "Saca" ? "block" : "none";
}

function calcularSacas() {
  const kgTotal = parseFloat(document.getElementById("qtdeKG").value) || 0;

  const pct25 = parseFloat(document.getElementById("pct25").value) || 0;
  const pct50 = parseFloat(document.getElementById("pct50").value) || 0;
  const pct60 = parseFloat(document.getElementById("pct60").value) || 0;

  const sacas25 = (kgTotal * pct25 / 100) / 25;
  const sacas50 = (kgTotal * pct50 / 100) / 50;
  const sacas60 = (kgTotal * pct60 / 100) / 60;

  document.getElementById("sacas25").innerText = sacas25.toFixed(2);
  document.getElementById("sacas50").innerText = sacas50.toFixed(2);
  document.getElementById("sacas60").innerText = sacas60.toFixed(2);
}
function calcularTotaisCustos() {
  const sacas25 = parseFloat(document.getElementById("sacas25").innerText) || 0;
  const sacas50 = parseFloat(document.getElementById("sacas50").innerText) || 0;
  const sacas60 = parseFloat(document.getElementById("sacas60").innerText) || 0;

  const totalSacas = sacas25 + sacas50 + sacas60;

  const custoEmbUn = parseFloat(document.getElementById("custoEmbalagem").value) || 0;
  const custoEtiqUn = parseFloat(document.getElementById("custoEtiqueta").value) || 0;
  const custoOperacionais = parseFloat(document.getElementById("custosOperacionais").value) || 0;
  const custoEstoque = parseFloat(document.getElementById("custoEstoque").value) || 0;
  const custoFrete = parseFloat(document.getElementById("custoFrete").value) || 0;

  const totalEmb = totalSacas * custoEmbUn;
  const totalEtiq = totalSacas * custoEtiqUn;
  const totalDespesas = totalEmb + totalEtiq + custoOperacionais + custoEstoque + custoFrete;

  document.getElementById("custoTotalEmbalagem").innerText = totalEmb.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  document.getElementById("custoTotalEtiqueta").innerText = totalEtiq.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  document.getElementById("custoTotalDespesas").innerText = totalDespesas.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    calcularKG();
    calcularPrecoLote();
    calcularSacas();
    calcularDespesasExtras();
    calcularTotaisCustos(); // <- novo
  });
});
function calcularPrecosComImpostos() {
  const precoLote = parseFloat(document.getElementById("precoLote").value) || 0;

  const custoTotalDespesasText = document.getElementById("custoTotalDespesas").innerText.replace("R$", "").replace(/\./g, "").replace(",", ".");
  const custoTotalDespesas = parseFloat(custoTotalDespesasText) || 0;

  const precoSP = (precoLote + custoTotalDespesas) * 1.06;
  const precoRJ = precoSP * 1.12;
  const precoMG = precoSP * 1.08;

  document.getElementById("precoComImpostoSP").innerText = precoSP.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  document.getElementById("precoComImpostoRJ").innerText = precoRJ.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  document.getElementById("precoComImpostoMG").innerText = precoMG.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    calcularKG();
    calcularPrecoLote();
    calcularSacas();
    calcularDespesasExtras();
    calcularTotaisCustos();
    calcularPrecosComImpostos(); // <- novo
  });
});
function calcularPrecoPorSaca() {
  const sacas25 = parseFloat(document.getElementById("sacas25").innerText) || 0;
  const sacas50 = parseFloat(document.getElementById("sacas50").innerText) || 0;
  const sacas60 = parseFloat(document.getElementById("sacas60").innerText) || 0;

  function getValor(textId) {
    const raw = document.getElementById(textId).innerText.replace("R$", "").replace(/\./g, "").replace(",", ".");
    return parseFloat(raw) || 0;
  }

  const precoSP = getValor("precoComImpostoSP");
  const precoRJ = getValor("precoComImpostoRJ");
  const precoMG = getValor("precoComImpostoMG");

  function format(val, qtde) {
    return qtde > 0 ? val / qtde : null;
  }

  function render(id, val) {
    document.getElementById(id).innerText = val !== null
      ? val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      : "—";
  }

  render("custoSaca25SP", format(precoSP, sacas25));
  render("custoSaca50SP", format(precoSP, sacas50));
  render("custoSaca60SP", format(precoSP, sacas60));

  render("custoSaca25RJ", format(precoRJ, sacas25));
  render("custoSaca50RJ", format(precoRJ, sacas50));
  render("custoSaca60RJ", format(precoRJ, sacas60));

  render("custoSaca25MG", format(precoMG, sacas25));
  render("custoSaca50MG", format(precoMG, sacas50));
  render("custoSaca60MG", format(precoMG, sacas60));
}
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    calcularKG();
    calcularPrecoLote();
    calcularSacas();
    calcularDespesasExtras();
    calcularTotaisCustos();
    calcularPrecosComImpostos();
    calcularPrecoPorSaca(); // <- novo
  });
});
function calcularPrecoComLucro() {
  const margemPercentual = parseFloat(document.getElementById("margemLucro").value) || 0;
  const margemFator = 1 + (margemPercentual / 100);

  const precoLote = parseFloat(document.getElementById("precoLote").value) || 0;

  const despesasText = document.getElementById("custoTotalDespesas").innerText.replace("R$", "").replace(/\./g, "").replace(",", ".");
  const despesas = parseFloat(despesasText) || 0;

  const sacas25 = parseFloat(document.getElementById("sacas25").innerText) || 0;
  const sacas50 = parseFloat(document.getElementById("sacas50").innerText) || 0;
  const sacas60 = parseFloat(document.getElementById("sacas60").innerText) || 0;

  const base = (precoLote + despesas) * margemFator;

  const precoSP = base * 1.06;
  const precoRJ = precoSP * 1.12;
  const precoMG = precoSP * 1.08;

  function render(id, total, sacas) {
    const val = sacas > 0 ? total / sacas : null;
    document.getElementById(id).innerText = val !== null
      ? val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      : "—";
  }

  render("lucro25SP", precoSP, sacas25);
  render("lucro50SP", precoSP, sacas50);
  render("lucro60SP", precoSP, sacas60);

  render("lucro25RJ", precoRJ, sacas25);
  render("lucro50RJ", precoRJ, sacas50);
  render("lucro60RJ", precoRJ, sacas60);

  render("lucro25MG", precoMG, sacas25);
  render("lucro50MG", precoMG, sacas50);
  render("lucro60MG", precoMG, sacas60);
}
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    calcularKG();
    calcularPrecoLote();
    calcularSacas();
    calcularDespesasExtras();
    calcularTotaisCustos();
    calcularPrecosComImpostos();
    calcularPrecoPorSaca();
    calcularPrecoComLucro(); // <- novo
  });
});
function atualizarComparativo() {
  function getValue(id) {
    const el = document.getElementById(id);
    if (!el) return "—";
    const val = parseFloat(el.value || el.innerText.replace("R$", "").replace(/\./g, "").replace(",", "."));
    return isNaN(val) ? "—" : val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  // Concorrentes
  document.getElementById("compConc1_25").innerText = getValue("conc1_25");
  document.getElementById("compConc1_50").innerText = getValue("conc1_50");
  document.getElementById("compConc1_60").innerText = getValue("conc1_60");

  document.getElementById("compConc2_25").innerText = getValue("conc2_25");
  document.getElementById("compConc2_50").innerText = getValue("conc2_50");
  document.getElementById("compConc2_60").innerText = getValue("conc2_60");

  // Seus preços com lucro (do Box 9)
  document.getElementById("compLucro25SP").innerText = document.getElementById("lucro25SP").innerText;
  document.getElementById("compLucro25RJ").innerText = document.getElementById("lucro25RJ").innerText;
  document.getElementById("compLucro25MG").innerText = document.getElementById("lucro25MG").innerText;

  document.getElementById("compLucro50SP").innerText = document.getElementById("lucro50SP").innerText;
  document.getElementById("compLucro50RJ").innerText = document.getElementById("lucro50RJ").innerText;
  document.getElementById("compLucro50MG").innerText = document.getElementById("lucro50MG").innerText;

  document.getElementById("compLucro60SP").innerText = document.getElementById("lucro60SP").innerText;
  document.getElementById("compLucro60RJ").innerText = document.getElementById("lucro60RJ").innerText;
  document.getElementById("compLucro60MG").innerText = document.getElementById("lucro60MG").innerText;
}
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    calcularKG();
    calcularPrecoLote();
    calcularSacas();
    calcularDespesasExtras();
    calcularTotaisCustos();
    calcularPrecosComImpostos();
    calcularPrecoPorSaca();
    calcularPrecoComLucro();
    atualizarComparativo(); // <- novo
  });
});
function calcularLucroOperacao() {
  const sacas25 = parseFloat(document.getElementById("sacas25").innerText) || 0;
  const sacas50 = parseFloat(document.getElementById("sacas50").innerText) || 0;
  const sacas60 = parseFloat(document.getElementById("sacas60").innerText) || 0;

  function getValor(id) {
    const el = document.getElementById(id);
    const raw = el?.innerText?.replace("R$", "").replace(/\./g, "").replace(",", ".");
    const val = parseFloat(raw);
    return isNaN(val) ? null : val;
  }

  function calcularLucro(custo, venda, qtd) {
    if (custo === null || venda === null || qtd === 0) return "—";
    const lucro = (venda - custo) * qtd;
    return lucro.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  const combinacoes = [
    ["SP", sacas25, "custoSaca25SP", "lucro25SP", "lucroFinal25SP"],
    ["SP", sacas50, "custoSaca50SP", "lucro50SP", "lucroFinal50SP"],
    ["SP", sacas60, "custoSaca60SP", "lucro60SP", "lucroFinal60SP"],

    ["RJ", sacas25, "custoSaca25RJ", "lucro25RJ", "lucroFinal25RJ"],
    ["RJ", sacas50, "custoSaca50RJ", "lucro50RJ", "lucroFinal50RJ"],
    ["RJ", sacas60, "custoSaca60RJ", "lucro60RJ", "lucroFinal60RJ"],

    ["MG", sacas25, "custoSaca25MG", "lucro25MG", "lucroFinal25MG"],
    ["MG", sacas50, "custoSaca50MG", "lucro50MG", "lucroFinal50MG"],
    ["MG", sacas60, "custoSaca60MG", "lucro60MG", "lucroFinal60MG"],
  ];

  combinacoes.forEach(([estado, qtd, idCusto, idVenda, idFinal]) => {
    const custo = getValor(idCusto);
    const venda = getValor(idVenda);
    document.getElementById(idFinal).innerText = calcularLucro(custo, venda, qtd);
  });
}
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    calcularKG();
    calcularPrecoLote();
    calcularSacas();
    calcularDespesasExtras();
    calcularTotaisCustos();
    calcularPrecosComImpostos();
    calcularPrecoPorSaca();
    calcularPrecoComLucro();
    atualizarComparativo();
    calcularLucroOperacao(); // <- novo
  });
});
