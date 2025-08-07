document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class='alert alert-info'>🔧 O sistema completo com os Boxes 1 a 8 será renderizado aqui com interatividade e cálculos dinâmicos.</div>
    <p>✔️ Utilize este modelo como base para o deploy automático no GitHub Pages.</p>
    <p>✔️ Coloque esta pasta dentro de <code>docs/</code> no seu repositório.</p>
  `;
});