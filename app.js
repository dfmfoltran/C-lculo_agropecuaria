// app_completo_boxes_1_a_11.js
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class='container my-4'>
      <h1 class='mb-4'>Sistema de Precificação de Insumos</h1>

      <!-- Box 1: Dados do produto -->
      <div class='box'>
        <h3>Box 1: Dados do produto</h3>
        <div class='row g-3'>
          <div class='col-md-3'>
            <label>Tipo de produto</label>
            <select class='form-select' id='tipoProduto'>
              <option>Soja</option><option>Milho</option><option>Sorgo</option><option>Polpa cítrica</option>
              <option>Farelo de soja</option><option>Farelo de milho</option><option>Silagem</option>
              <option>Suplementos</option><option>Outros</option>
            </select>
          </div>
          <div class='col-md-3'><label>Quantidade (ton)</label><input type='number' class='form-control' id='qtdToneladas' /></div>
          <div class='col-md-3'><label>Quantidade (kg)</label><input type='number' class='form-control' id='qtdKg' readonly /></div>
          <div class='col-md-3'>
            <label>Tipo embalagem</label>
            <select class='form-select' id='tipoEmbalagem'>
              <option value='Granel'>Granel</option>
              <option value='Saca'>Saca</option>
            </select>
          </div>
          <div class='col-md-3' id='tipoSacaBox' style='display:none'>
            <label>Tipo de saca</label>
            <select class='form-select' id='tipoSaca'>
              <option value='25'>25kg</option>
              <option value='50'>50kg</option>
              <option value='60'>60kg</option>
            </select>
          </div>
          <div class='col-md-3'><label>Preço por tonelada (R$)</label><input type='number' class='form-control' id='precoTonelada' /></div>
          <div class='col-md-3'><label>Preço total do lote (R$)</label><input type='number' class='form-control' id='precoTotalLote' readonly /></div>
        </div>
      </div>

      <!-- TODO: Boxes 2 a 11 aqui (continua abaixo, encurtado para visualização) -->
     <!-- Box 2: Custos e despesas -->
<div class="box">
  <h3>Box 2: Custos e despesas</h3>
  <div class="row g-3">
    <div class="col-md-2">
      <label for="custoFrete">Custo de frete (R$)</label>
      <input type="number" id="custoFrete" class="form-control" />
    </div>
    <div class="col-md-2">
      <label for="custosOperacionais">Custos operacionais (R$)</label>
      <input type="number" id="custosOperacionais" class="form-control" />
    </div>
    <div class="col-md-2">
      <label for="custoEmbalagemUnidade">Custo embalagem unidade (R$)</label>
      <input type="number" id="custoEmbalagemUnidade" class="form-control" />
    </div>
    <div class="col-md-2">
      <label for="custoEtiquetaUnidade">Custo etiqueta unidade (R$)</label>
      <input type="number" id="custoEtiquetaUnidade" class="form-control" />
    </div>
    <div class="col-md-2">
      <label for="custoEstoque">Custo estoque (R$)</label>
      <input type="number" id="custoEstoque" class="form-control" />
    </div>
  </div>
</div>
  <!-- Box 3: Como será a venda -->
<div class="box">
  <h3>Box 3: Como será a venda</h3>
  <div class="row g-3">
    <div class="col-md-2">
      <label>% sacas 25kg</label>
      <input type="number" id="pctSaca25" class="form-control" placeholder="ex: 50" />
    </div>
    <div class="col-md-2">
      <label>% sacas 50kg</label>
      <input type="number" id="pctSaca50" class="form-control" placeholder="ex: 30" />
    </div>
    <div class="col-md-2">
      <label>% sacas 60kg</label>
      <input type="number" id="pctSaca60" class="form-control" placeholder="ex: 20" />
    </div>

    <div class="col-md-2">
      <label>Qtd sacas 25kg</label>
      <input type="number" id="qtdSacas25" class="form-control" readonly />
    </div>
    <div class="col-md-2">
      <label>Qtd sacas 50kg</label>
      <input type="number" id="qtdSacas50" class="form-control" readonly />
    </div>
    <div class="col-md-2">
      <label>Qtd sacas 60kg</label>
      <input type="number" id="qtdSacas60" class="form-control" readonly />
    </div>
  </div>
</div>    
<!-- Box 4: Impostos -->
<div class="box">
  <h3>Box 4: Impostos</h3>
  <div class="row g-3">
    <div class="col-md-4">
      <label>Venda SP</label>
      <input type="text" class="form-control" value="6% Simples Nacional" readonly />
    </div>
    <div class="col-md-4">
      <label>Venda RJ</label>
      <input type="text" class="form-control" value="6% + 12% DIFAL" readonly />
    </div>
    <div class="col-md-4">
      <label>Venda MG</label>
      <input type="text" class="form-control" value="6% + 8% DIFAL" readonly />
    </div>
  </div>
</div>

<!-- Box 5: Custos totais -->
<div class="box">
  <h3>Box 5: Custos e despesas totais</h3>
  <div class="row g-3">
    <div class="col-md-4">
      <label for="custoTotalEmbalagem">Custo total embalagem (R$)</label>
      <input type="number" id="custoTotalEmbalagem" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="custoTotalEtiqueta">Custo total etiqueta (R$)</label>
      <input type="number" id="custoTotalEtiqueta" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="custoTotalDespesas">Custo total despesas (R$)</label>
      <input type="number" id="custoTotalDespesas" class="form-control" readonly />
    </div>
  </div>
</div>
<!-- Box 6: Preço total do lote com impostos -->
<div class="box">
  <h3>Box 6: Preço total do lote com impostos</h3>
  <div class="row g-3">
    <div class="col-md-4">
      <label for="precoLoteImpostoSP">Preço total lote com imposto SP (R$)</label>
      <input type="number" id="precoLoteImpostoSP" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="precoLoteImpostoRJ">Preço total lote com imposto RJ (R$)</label>
      <input type="number" id="precoLoteImpostoRJ" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="precoLoteImpostoMG">Preço total lote com imposto MG (R$)</label>
      <input type="number" id="precoLoteImpostoMG" class="form-control" readonly />
    </div>
  </div>
</div>

<!-- Box 7: Preço de custo por saca -->
<div class="box">
  <h3>Box 7: Preço de custo por saca</h3>
  <div class="row g-3">
    <div class="col-md-4">
      <label for="precoCusto25SP">Saca 25kg SP (R$)</label>
      <input type="number" id="precoCusto25SP" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="precoCusto25RJ">Saca 25kg RJ (R$)</label>
      <input type="number" id="precoCusto25RJ" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="precoCusto25MG">Saca 25kg MG (R$)</label>
      <input type="number" id="precoCusto25MG" class="form-control" readonly />
    </div>

    <div class="col-md-4">
      <label for="precoCusto50SP">Saca 50kg SP (R$)</label>
      <input type="number" id="precoCusto50SP" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="precoCusto50RJ">Saca 50kg RJ (R$)</label>
      <input type="number" id="precoCusto50RJ" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="precoCusto50MG">Saca 50kg MG (R$)</label>
      <input type="number" id="precoCusto50MG" class="form-control" readonly />
    </div>

    <div class="col-md-4">
      <label for="precoCusto60SP">Saca 60kg SP (R$)</label>
      <input type="number" id="precoCusto60SP" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="precoCusto60RJ">Saca 60kg RJ (R$)</label>
      <input type="number" id="precoCusto60RJ" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="precoCusto60MG">Saca 60kg MG (R$)</label>
      <input type="number" id="precoCusto60MG" class="form-control" readonly />
    </div>
  </div>
</div>
<!-- Box 8: Preço dos concorrentes -->
<div class="box">
  <h3>Box 8: Preço dos concorrentes</h3>
  <div class="row g-3">
    <div class="col-md-4">
      <label>Concorrente 1 – Saca 25kg (R$)</label>
      <input type="number" id="conc1_25" class="form-control" />
    </div>
    <div class="col-md-4">
      <label>Concorrente 1 – Saca 50kg (R$)</label>
      <input type="number" id="conc1_50" class="form-control" />
    </div>
    <div class="col-md-4">
      <label>Concorrente 1 – Saca 60kg (R$)</label>
      <input type="number" id="conc1_60" class="form-control" />
    </div>
    <div class="col-md-4">
      <label>Concorrente 2 – Saca 25kg (R$)</label>
      <input type="number" id="conc2_25" class="form-control" />
    </div>
    <div class="col-md-4">
      <label>Concorrente 2 – Saca 50kg (R$)</label>
      <input type="number" id="conc2_50" class="form-control" />
    </div>
    <div class="col-md-4">
      <label>Concorrente 2 – Saca 60kg (R$)</label>
      <input type="number" id="conc2_60" class="form-control" />
    </div>
  </div>
</div>

<!-- Box 9: Margem de lucro -->
<div class="box">
  <h3>Box 9: Margem de lucro</h3>
  <div class="row g-3 mb-3">
    <div class="col-md-3">
      <label>Margem de lucro pretendida (%)</label>
      <input type="number" id="margemLucro" class="form-control" />
    </div>
  </div>

  <div class="table-responsive">
    <table class="table table-bordered text-center">
      <thead class="table-light">
        <tr>
          <th></th>
          <th>SP</th>
          <th>RJ</th>
          <th>MG</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Saca 25kg</th>
          <td><span id="lucro_25_SP">-</span></td>
          <td><span id="lucro_25_RJ">-</span></td>
          <td><span id="lucro_25_MG">-</span></td>
        </tr>
        <tr>
          <th>Saca 50kg</th>
          <td><span id="lucro_50_SP">-</span></td>
          <td><span id="lucro_50_RJ">-</span></td>
          <td><span id="lucro_50_MG">-</span></td>
        </tr>
        <tr>
          <th>Saca 60kg</th>
          <td><span id="lucro_60_SP">-</span></td>
          <td><span id="lucro_60_RJ">-</span></td>
          <td><span id="lucro_60_MG">-</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<!-- Box 10: Comparativo de preços com concorrentes -->
<div class="box">
  <h3>Box 10: Comparativo de preços com concorrentes</h3>
  <div class="table-responsive">
    <table class="table table-bordered text-center">
      <thead class="table-light">
        <tr>
          <th></th>
          <th>Lucro SP</th>
          <th>Conc. 1</th>
          <th>Conc. 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Saca 25kg</th>
          <td id="comp_SP_25">-</td>
          <td id="conc1_25_result">-</td>
          <td id="conc2_25_result">-</td>
        </tr>
        <tr>
          <th>Saca 50kg</th>
          <td id="comp_SP_50">-</td>
          <td id="conc1_50_result">-</td>
          <td id="conc2_50_result">-</td>
        </tr>
        <tr>
          <th>Saca 60kg</th>
          <td id="comp_SP_60">-</td>
          <td id="conc1_60_result">-</td>
          <td id="conc2_60_result">-</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- Box 11: Lucro da operação -->
<div class="box">
  <h3>Box 11: Lucro da operação</h3>
  <div class="row g-3">
    <div class="col-md-4">
      <label for="lucroOperacaoSP">Lucro total SP (R$)</label>
      <input type="text" id="lucroOperacaoSP" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="lucroOperacaoRJ">Lucro total RJ (R$)</label>
      <input type="text" id="lucroOperacaoRJ" class="form-control" readonly />
    </div>
    <div class="col-md-4">
      <label for="lucroOperacaoMG">Lucro total MG (R$)</label>
      <input type="text" id="lucroOperacaoMG" class="form-control" readonly />
    </div>
  </div>
</div>
      <div id="restanteBoxes"></div>
    </div>
  `;

  // Funções de cálculo Box 1
  const qtdToneladas = document.getElementById("qtdToneladas");
  const qtdKg = document.getElementById("qtdKg");
  const precoTonelada = document.getElementById("precoTonelada");
  const precoTotalLote = document.getElementById("precoTotalLote");

  const atualizarKg = () => {
    const tonelada = parseFloat(qtdToneladas.value) || 0;
    qtdKg.value = tonelada * 1000;
    atualizarPrecoLote();
  };

  const atualizarPrecoLote = () => {
    const tonelada = parseFloat(qtdToneladas.value) || 0;
    const preco = parseFloat(precoTonelada.value) || 0;
    precoTotalLote.value = (tonelada * preco).toFixed(2);
  };

  qtdToneladas.addEventListener("input", atualizarKg);
  precoTonelada.addEventListener("input", atualizarPrecoLote);

  // Mostrar tipo de saca apenas se selecionar "Saca"
  document.getElementById("tipoEmbalagem").addEventListener("change", function () {
    const box = document.getElementById("tipoSacaBox");
    if (this.value === "Saca") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});
function getNumber(id) {
  return parseFloat(document.getElementById(id)?.value) || 0;
}

["custoFrete", "custosOperacionais", "custoEmbalagemUnidade", "custoEtiquetaUnidade", "custoEstoque"].forEach(id => {
  document.getElementById(id).addEventListener("input", atualizarCustosBox2);
});

function atualizarCustosBox2() {
  const frete = getNumber("custoFrete");
  const operacionais = getNumber("custosOperacionais");
  const embalagemUn = getNumber("custoEmbalagemUnidade");
  const etiquetaUn = getNumber("custoEtiquetaUnidade");
  const estoque = getNumber("custoEstoque");

  // Você pode usar essas variáveis para cálculos posteriores
  const custoTotalBase = frete + operacionais + estoque;

  console.log("Box 2 – Custos parciais:", {
    frete, operacionais, embalagemUn, etiquetaUn, estoque
  });
}
["pctSaca25", "pctSaca50", "pctSaca60", "qtdKg"].forEach(id => {
  document.getElementById(id).addEventListener("input", atualizarSacas);
});

function atualizarSacas() {
  const kgTotal = getNumber("qtdKg");
  const pct25 = getNumber("pctSaca25") / 100;
  const pct50 = getNumber("pctSaca50") / 100;
  const pct60 = getNumber("pctSaca60") / 100;

  const sacas25 = kgTotal * pct25 / 25;
  const sacas50 = kgTotal * pct50 / 50;
  const sacas60 = kgTotal * pct60 / 60;

  document.getElementById("qtdSacas25").value = Math.floor(sacas25);
  document.getElementById("qtdSacas50").value = Math.floor(sacas50);
  document.getElementById("qtdSacas60").value = Math.floor(sacas60);
}
["qtdSacas25", "qtdSacas50", "qtdSacas60", "custoEmbalagemUnidade", "custoEtiquetaUnidade", "custosOperacionais", "custoEstoque"].forEach(id => {
  document.getElementById(id).addEventListener("input", calcularCustosTotais);
});

function calcularCustosTotais() {
  const s25 = getNumber("qtdSacas25");
  const s50 = getNumber("qtdSacas50");
  const s60 = getNumber("qtdSacas60");

  const embalagemUnit = getNumber("custoEmbalagemUnidade");
  const etiquetaUnit = getNumber("custoEtiquetaUnidade");
  const operacionais = getNumber("custosOperacionais");
  const estoque = getNumber("custoEstoque");

  const totalSacas = s25 + s50 + s60;

  const custoEmbalagemTotal = totalSacas * embalagemUnit;
  const custoEtiquetaTotal = totalSacas * etiquetaUnit;
  const custoDespesas = operacionais + estoque + custoEmbalagemTotal + custoEtiquetaTotal;

  document.getElementById("custoTotalEmbalagem").value = custoEmbalagemTotal.toFixed(2);
  document.getElementById("custoTotalEtiqueta").value = custoEtiquetaTotal.toFixed(2);
  document.getElementById("custoTotalDespesas").value = custoDespesas.toFixed(2);
}
["precoTotal", "custoTotalDespesas", "qtdSacas25", "qtdSacas50", "qtdSacas60"].forEach(id => {
  document.getElementById(id).addEventListener("input", calcularImpostosELotes);
});

function calcularImpostosELotes() {
  const precoLote = getNumber("precoTotal");
  const despesas = getNumber("custoTotalDespesas");

  const precoSP = (precoLote + despesas) * 1.06; // 6%
  const precoRJ = precoSP * 1.12; // +12%
  const precoMG = precoSP * 1.08; // +8%

  document.getElementById("precoLoteImpostoSP").value = precoSP.toFixed(2);
  document.getElementById("precoLoteImpostoRJ").value = precoRJ.toFixed(2);
  document.getElementById("precoLoteImpostoMG").value = precoMG.toFixed(2);

  const s25 = getNumber("qtdSacas25");
  const s50 = getNumber("qtdSacas50");
  const s60 = getNumber("qtdSacas60");

  // Evita divisão por zero
  const safeDiv = (a, b) => (b > 0 ? (a / b).toFixed(2) : "0.00");

  document.getElementById("precoCusto25SP").value = safeDiv(precoSP, s25);
  document.getElementById("precoCusto25RJ").value = safeDiv(precoRJ, s25);
  document.getElementById("precoCusto25MG").value = safeDiv(precoMG, s25);

  document.getElementById("precoCusto50SP").value = safeDiv(precoSP, s50);
  document.getElementById("precoCusto50RJ").value = safeDiv(precoRJ, s50);
  document.getElementById("precoCusto50MG").value = safeDiv(precoMG, s50);

  document.getElementById("precoCusto60SP").value = safeDiv(precoSP, s60);
  document.getElementById("precoCusto60RJ").value = safeDiv(precoRJ, s60);
  document.getElementById("precoCusto60MG").value = safeDiv(precoMG, s60);
}
["margemLucro", "precoTotal", "qtdSacas25", "qtdSacas50", "qtdSacas60"].forEach(id => {
  document.getElementById(id).addEventListener("input", calcularMargemLucro);
});

function calcularMargemLucro() {
  const precoTotal = getNumber("precoTotal");
  const margemPct = getNumber("margemLucro") / 100;

  const precoSP = (precoTotal * (1 + margemPct)) * 1.06;
  const precoRJ = precoSP * 1.12;
  const precoMG = precoSP * 1.08;

  const s25 = getNumber("qtdSacas25");
  const s50 = getNumber("qtdSacas50");
  const s60 = getNumber("qtdSacas60");

  const calcLucro = (valor, qtd) => (qtd > 0 ? (valor / qtd).toFixed(2) : "-");

  document.getElementById("lucro_25_SP").textContent = calcLucro(precoSP, s25);
  document.getElementById("lucro_25_RJ").textContent = calcLucro(precoRJ, s25);
  document.getElementById("lucro_25_MG").textContent = calcLucro(precoMG, s25);

  document.getElementById("lucro_50_SP").textContent = calcLucro(precoSP, s50);
  document.getElementById("lucro_50_RJ").textContent = calcLucro(precoRJ, s50);
  document.getElementById("lucro_50_MG").textContent = calcLucro(precoMG, s50);

  document.getElementById("lucro_60_SP").textContent = calcLucro(precoSP, s60);
  document.getElementById("lucro_60_RJ").textContent = calcLucro(precoRJ, s60);
  document.getElementById("lucro_60_MG").textContent = calcLucro(precoMG, s60);
}
[
  "conc1_25", "conc1_50", "conc1_60",
  "conc2_25", "conc2_50", "conc2_60",
  "lucro_25_SP", "lucro_50_SP", "lucro_60_SP",
  "qtdSacas25", "qtdSacas50", "qtdSacas60"
].forEach(id => {
  document.getElementById(id)?.addEventListener("input", compararPrecos);
});

function compararPrecos() {
  const getValor = (id) => parseFloat(document.getElementById(id)?.value || document.getElementById(id)?.textContent) || 0;

  const c1_25 = getValor("conc1_25");
  const c1_50 = getValor("conc1_50");
  const c1_60 = getValor("conc1_60");

  const c2_25 = getValor("conc2_25");
  const c2_50 = getValor("conc2_50");
  const c2_60 = getValor("conc2_60");

  const l25 = getValor("lucro_25_SP");
  const l50 = getValor("lucro_50_SP");
  const l60 = getValor("lucro_60_SP");

  document.getElementById("comp_SP_25").textContent = l25.toFixed(2);
  document.getElementById("comp_SP_50").textContent = l50.toFixed(2);
  document.getElementById("comp_SP_60").textContent = l60.toFixed(2);

  document.getElementById("conc1_25_result").textContent = c1_25.toFixed(2);
  document.getElementById("conc1_50_result").textContent = c1_50.toFixed(2);
  document.getElementById("conc1_60_result").textContent = c1_60.toFixed(2);

  document.getElementById("conc2_25_result").textContent = c2_25.toFixed(2);
  document.getElementById("conc2_50_result").textContent = c2_50.toFixed(2);
  document.getElementById("conc2_60_result").textContent = c2_60.toFixed(2);
}

["lucro_25_SP", "lucro_50_SP", "lucro_60_SP",
 "lucro_25_RJ", "lucro_50_RJ", "lucro_60_RJ",
 "lucro_25_MG", "lucro_50_MG", "lucro_60_MG",
 "qtdSacas25", "qtdSacas50", "qtdSacas60"
].forEach(id => {
  document.getElementById(id)?.addEventListener("input", calcularLucroTotal);
});

function calcularLucroTotal() {
  const getVal = id => parseFloat(document.getElementById(id)?.textContent) || 0;
  const s25 = getNumber("qtdSacas25");
  const s50 = getNumber("qtdSacas50");
  const s60 = getNumber("qtdSacas60");

  const lucroSP = s25 * getVal("lucro_25_SP") + s50 * getVal("lucro_50_SP") + s60 * getVal("lucro_60_SP");
  const lucroRJ = s25 * getVal("lucro_25_RJ") + s50 * getVal("lucro_50_RJ") + s60 * getVal("lucro_60_RJ");
  const lucroMG = s25 * getVal("lucro_25_MG") + s50 * getVal("lucro_50_MG") + s60 * getVal("lucro_60_MG");

  document.getElementById("lucroOperacaoSP").value = lucroSP.toFixed(2);
  document.getElementById("lucroOperacaoRJ").value = lucroRJ.toFixed(2);
  document.getElementById("lucroOperacaoMG").value = lucroMG.toFixed(2);
}
