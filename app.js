// app.js - Corrigido (Boxes 1 a 11 funcionando)

document.addEventListener("DOMContentLoaded", function () {
  // Função segura para divisão
  const safeDiv = (a, b) => b > 0 ? a / b : 0;

  const inputIds = [
    "quantidadeToneladas", "precoTonelada", "custoFrete", "custosOperacionais",
    "custoEmbalagem", "custoEtiqueta", "custoEstoque", "perc25", "perc50", "perc60", "margem"
  ];

  function calcular() {
    let v = {};
    for (const id of inputIds) {
      const el = document.getElementById(id);
      v[id] = el ? parseFloat(el.value.replace(",", ".") || 0) : 0;
    }

    const kg = v.quantidadeToneladas * 1000;
    const precoLote = v.quantidadeToneladas * v.precoTonelada;

    const sacas25 = Math.floor((kg * v.perc25 / 100) / 25);
    const sacas50 = Math.floor((kg * v.perc50 / 100) / 50);
    const sacas60 = Math.floor((kg * v.perc60 / 100) / 60);
    const totalSacas = sacas25 + sacas50 + sacas60;

    const totalEtiqueta = (sacas25 + sacas50 + sacas60) * v.custoEtiqueta;
    const totalEmbalagem = (sacas25 + sacas50 + sacas60) * v.custoEmbalagem;
    const custoDespesas = v.custosOperacionais + totalEtiqueta + totalEmbalagem + v.custoEstoque + v.custoFrete;

    const precoSP = precoLote + custoDespesas + precoLote * 0.06;
    const precoRJ = precoSP * 1.12;
    const precoMG = precoSP * 1.08;

    const custoSP25 = safeDiv(precoSP, sacas25);
    const custoSP50 = safeDiv(precoSP, sacas50);
    const custoSP60 = safeDiv(precoSP, sacas60);

    const custoRJ25 = safeDiv(precoRJ, sacas25);
    const custoRJ50 = safeDiv(precoRJ, sacas50);
    const custoRJ60 = safeDiv(precoRJ, sacas60);

    const custoMG25 = safeDiv(precoMG, sacas25);
    const custoMG50 = safeDiv(precoMG, sacas50);
    const custoMG60 = safeDiv(precoMG, sacas60);

    const lucro = precoLote * (v.margem / 100);
    const precoLucroSP = precoLote + custoDespesas + lucro;
    const precoLucroRJ = precoLucroSP * 1.12;
    const precoLucroMG = precoLucroSP * 1.08;

    const lucroSP25 = safeDiv(precoLucroSP, sacas25);
    const lucroSP50 = safeDiv(precoLucroSP, sacas50);
    const lucroSP60 = safeDiv(precoLucroSP, sacas60);

    const lucroRJ25 = safeDiv(precoLucroRJ, sacas25);
    const lucroRJ50 = safeDiv(precoLucroRJ, sacas50);
    const lucroRJ60 = safeDiv(precoLucroRJ, sacas60);

    const lucroMG25 = safeDiv(precoLucroMG, sacas25);
    const lucroMG50 = safeDiv(precoLucroMG, sacas50);
    const lucroMG60 = safeDiv(precoLucroMG, sacas60);

    const lucroTotalEstimado = (lucroSP25 - custoSP25) * sacas25 +
                               (lucroSP50 - custoSP50) * sacas50 +
                               (lucroSP60 - custoSP60) * sacas60;

    const updates = {
      quantidadeKG: kg,
      precoLote: precoLote,
      custoTotalDespesas: custoDespesas,
      custoTotalEtiqueta: totalEtiqueta,
      custoTotalEmbalagem: totalEmbalagem,
      precoComImpostoSP: precoSP,
      precoComImpostoRJ: precoRJ,
      precoComImpostoMG: precoMG,
      precoSaca25_SP: custoSP25,
      precoSaca50_SP: custoSP50,
      precoSaca60_SP: custoSP60,
      precoSaca25_RJ: custoRJ25,
      precoSaca50_RJ: custoRJ50,
      precoSaca60_RJ: custoRJ60,
      precoSaca25_MG: custoMG25,
      precoSaca50_MG: custoMG50,
      precoSaca60_MG: custoMG60,
      lucro_25_SP: lucroSP25,
      lucro_50_SP: lucroSP50,
      lucro_60_SP: lucroSP60,
      lucro_25_RJ: lucroRJ25,
      lucro_50_RJ: lucroRJ50,
      lucro_60_RJ: lucroRJ60,
      lucro_25_MG: lucroMG25,
      lucro_50_MG: lucroMG50,
      lucro_60_MG: lucroMG60,
      lucroTotalSP: lucroTotalEstimado,
      qtdSacas25: sacas25,
      qtdSacas50: sacas50,
      qtdSacas60: sacas60
    };

    for (const [id, val] of Object.entries(updates)) {
      const el = document.getElementById(id);
      if (el) el.value = val.toFixed(2);
    }
  }

  document.querySelectorAll("input").forEach(el => el.addEventListener("input", calcular));
});