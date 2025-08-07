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
