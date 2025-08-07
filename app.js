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

    <div class='box' id="box3">
      <h2>Box 3: Como será a venda</h2>
      <div class="row g-3">
        <div class="col-md-4">
          <label class="form-label">% sacas 25kg</label>
          <input type="number" id="perc25" class="form-control" step="0.1" />
        </div>
        <div class="col-md-4">
          <label class="form-label">Qtd. sacas 25kg</label>
          <input type="number" id="qtd25" class="form-control" readonly />
        </div>
        <div class="col-md-4">
          <label class="form-label">% sacas 50kg</label>
          <input type="number" id="perc50" class="form-control" step="0.1" />
        </div>
        <div class="col-md-4">
          <label class="form-label">Qtd. sacas 50kg</label>
          <input type="number" id="qtd50" class="form-control" readonly />
        </div>
        <div class="col-md-4">
          <label class="form-label">% sacas 60kg</label>
          <input type="number" id="perc60" class="form-control" step="0.1" />
        </div>
        <div class="col-md-4">
          <label class="form-label">Qtd. sacas 60kg</label>
          <input type="number" id="qtd60" class="form-control" readonly />
        </div>
      </div>
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

  function atualizarKgETotal() {
    const toneladas = parseFloat(quantTon.value) || 0;
    const precoPorTonelada = parseFloat(precoTon.value) || 0;
    const kg = toneladas * 1000;
    const total = toneladas * precoPorTonelada;
    quantKg.value = kg.toFixed(2);
    precoTotalLote.value = total.toFixed(2);
    calcularSacas(kg);
  }

  function calcularSacas(kg) {
    const p25 = parseFloat(perc25.value) || 0;
    const p50 = parseFloat(perc50.value) || 0;
    const p60 = parseFloat(perc60.value) || 0;
    qtd25.value = ((kg * (p25 / 100)) / 25).toFixed(2);
    qtd50.value = ((kg * (p50 / 100)) / 50).toFixed(2);
    qtd60.value = ((kg * (p60 / 100)) / 60).toFixed(2);
  }

  quantTon.addEventListener("input", atualizarKgETotal);
  precoTon.addEventListener("input", atualizarKgETotal);
  perc25.addEventListener("input", () => calcularSacas(parseFloat(quantKg.value) || 0));
  perc50.addEventListener("input", () => calcularSacas(parseFloat(quantKg.value) || 0));
  perc60.addEventListener("input", () => calcularSacas(parseFloat(quantKg.value) || 0));
});