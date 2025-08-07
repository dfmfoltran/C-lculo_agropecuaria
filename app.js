document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class='box' id="box1">
      <h2>Box 1: Dados do Produto</h2>
      <div class="row g-3">
        <div class="col-md-4">
          <label class="form-label">Quantidade (toneladas)</label>
          <input type="number" id="quantTon" class="form-control" step="0.01" />
        </div>
        <div class="col-md-4">
          <label class="form-label">Quantidade (kg)</label>
          <input type="number" id="quantKg" class="form-control" readonly />
        </div>
        <div class="col-md-4">
          <label class="form-label">Preço por tonelada (R$)</label>
          <input type="number" id="precoTon" class="form-control" step="0.01" />
        </div>
        <div class="col-md-4">
          <label class="form-label">Preço total do lote (R$)</label>
          <input type="number" id="precoTotalLote" class="form-control" readonly />
        </div>
      </div>
    </div>

    <div class='box' id="box2">
      <h2>Box 2: Custos e Despesas</h2>
      <div class="row g-3">
        <div class="col-md-4"><label class="form-label">Custo de frete</label><input type="number" id="frete" class="form-control" step="0.01" /></div>
        <div class="col-md-4"><label class="form-label">Custos operacionais</label><input type="number" id="operacionais" class="form-control" step="0.01" /></div>
        <div class="col-md-4"><label class="form-label">Custo embalagem unidade</label><input type="number" id="embalagemUn" class="form-control" step="0.01" /></div>
        <div class="col-md-4"><label class="form-label">Custo etiqueta unidade</label><input type="number" id="etiquetaUn" class="form-control" step="0.01" /></div>
        <div class="col-md-4"><label class="form-label">Custo estoque</label><input type="number" id="estoque" class="form-control" step="0.01" /></div>
      </div>
    </div>

    <div class='box' id="box3">
      <h2>Box 3: Como será a venda</h2>
      <div class="row g-3">
        <div class="col-md-4"><label class="form-label">% sacas 25kg</label><input type="number" id="perc25" class="form-control" step="0.1" /></div>
        <div class="col-md-4"><label class="form-label">Qtd. sacas 25kg</label><input type="number" id="qtd25" class="form-control" readonly /></div>
        <div class="col-md-4"><label class="form-label">% sacas 50kg</label><input type="number" id="perc50" class="form-control" step="0.1" /></div>
        <div class="col-md-4"><label class="form-label">Qtd. sacas 50kg</label><input type="number" id="qtd50" class="form-control" readonly /></div>
        <div class="col-md-4"><label class="form-label">% sacas 60kg</label><input type="number" id="perc60" class="form-control" step="0.1" /></div>
        <div class="col-md-4"><label class="form-label">Qtd. sacas 60kg</label><input type="number" id="qtd60" class="form-control" readonly /></div>
      </div>
    </div>

    <div class='box' id="box4">
      <h2>Box 4: Custo Total</h2>
      <div class="row g-3">
        <div class="col-md-6"><label class="form-label">Custo total embalagem (R$)</label><input type="number" id="custoTotalEmbalagem" class="form-control" readonly /></div>
        <div class="col-md-6"><label class="form-label">Custo total etiqueta (R$)</label><input type="number" id="custoTotalEtiqueta" class="form-control" readonly /></div>
        <div class="col-md-6"><label class="form-label">Custo total despesas (R$)</label><input type="number" id="custoTotalDespesas" class="form-control" readonly /></div>
      </div>
    </div>

    <div class='box' id="box5">
      <h2>Box 5: Impostos por Estado</h2>
      <ul>
        <li><strong>SP:</strong> 6% Simples Nacional</li>
        <li><strong>RJ:</strong> +12% DIFAL</li>
        <li><strong>MG:</strong> +8% DIFAL</li>
      </ul>
    </div>
  `;

  const quantTon = document.getElementById("quantTon");
  const quantKg = document.getElementById("quantKg");
  const precoTon = document.getElementById("precoTon");
  const precoTotalLote = document.getElementById("precoTotalLote");

  const perc25 = document.getElementById("perc25");
  const perc50 = document.getElementById("perc50");
  const perc60 = document.getElementById("perc60");
  const qtd25 = document.getElementById("qtd25");
  const qtd50 = document.getElementById("qtd50");
  const qtd60 = document.getElementById("qtd60");

  const embalagemUn = document.getElementById("embalagemUn");
  const etiquetaUn = document.getElementById("etiquetaUn");
  const estoque = document.getElementById("estoque");
  const operacionais = document.getElementById("operacionais");

  const custoTotalEmbalagem = document.getElementById("custoTotalEmbalagem");
  const custoTotalEtiqueta = document.getElementById("custoTotalEtiqueta");
  const custoTotalDespesas = document.getElementById("custoTotalDespesas");

  function atualizarKgETotal() {
    const toneladas = parseFloat(quantTon.value) || 0;
    const precoPorTonelada = parseFloat(precoTon.value) || 0;
    const kg = toneladas * 1000;
    const total = toneladas * precoPorTonelada;
    quantKg.value = kg.toFixed(2);
    precoTotalLote.value = total.toFixed(2);
    calcularSacas(kg);
    calcularCustos();
  }

  function calcularSacas(kg) {
    const p25 = parseFloat(perc25.value) || 0;
    const p50 = parseFloat(perc50.value) || 0;
    const p60 = parseFloat(perc60.value) || 0;
    qtd25.value = ((kg * (p25 / 100)) / 25).toFixed(2);
    qtd50.value = ((kg * (p50 / 100)) / 50).toFixed(2);
    qtd60.value = ((kg * (p60 / 100)) / 60).toFixed(2);
    calcularCustos();
  }

  function calcularCustos() {
    const eUn = parseFloat(embalagemUn.value) || 0;
    const etUn = parseFloat(etiquetaUn.value) || 0;
    const estq = parseFloat(estoque.value) || 0;
    const oper = parseFloat(operacionais.value) || 0;

    const n25 = parseFloat(qtd25.value) || 0;
    const n50 = parseFloat(qtd50.value) || 0;
    const n60 = parseFloat(qtd60.value) || 0;

    const totalUnidades = n25 + n50 + n60;

    const totalEmbalagem = totalUnidades * eUn;
    const totalEtiqueta = totalUnidades * etUn;
    const totalDespesas = totalEmbalagem + totalEtiqueta + estq + oper;

    custoTotalEmbalagem.value = totalEmbalagem.toFixed(2);
    custoTotalEtiqueta.value = totalEtiqueta.toFixed(2);
    custoTotalDespesas.value = totalDespesas.toFixed(2);
  }

  quantTon.addEventListener("input", atualizarKgETotal);
  precoTon.addEventListener("input", atualizarKgETotal);

  perc25.addEventListener("input", () => calcularSacas(parseFloat(quantKg.value) || 0));
  perc50.addEventListener("input", () => calcularSacas(parseFloat(quantKg.value) || 0));
  perc60.addEventListener("input", () => calcularSacas(parseFloat(quantKg.value) || 0));

  embalagemUn.addEventListener("input", calcularCustos);
  etiquetaUn.addEventListener("input", calcularCustos);
  estoque.addEventListener("input", calcularCustos);
  operacionais.addEventListener("input", calcularCustos);
});
