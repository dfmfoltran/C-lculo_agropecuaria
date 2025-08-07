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
