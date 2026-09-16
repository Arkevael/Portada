// Datos de proyectos (simulando una "base de datos" local)
const proyectos = [
  { titulo: 'Sistema de Inventario', tech: 'HTML, CSS, JS', desc: 'CRUD básico con LocalStorage para gestión de productos.' },
  { titulo: 'Clon de Calculadora', tech: 'JavaScript puro', desc: 'Operaciones matemáticas sin usar eval, con teclado.' },
  { titulo: 'Dashboard de Clima', tech: 'Fetch API + OpenWeather', desc: 'Consume API REST pública y muestra pronóstico por ciudad.' },
  { titulo: 'Gestor de Tareas', tech: 'JS + LocalStorage', desc: 'App de tareas con filtros por estado y prioridad.' },
];

// Renderizar proyectos de forma segura (sin innerHTML con datos no sanitizados)
function renderizarProyectos() {
  const contenedor = document.querySelector('#grid-proyectos');
  proyectos.forEach(({ titulo, tech, desc }) => {
    const card = document.createElement('article');
    card.className = 'card-proyecto';

    const h3 = document.createElement('h3');
    h3.textContent = titulo;

    const span = document.createElement('span');
    span.className = 'tech';
    span.textContent = tech;

    const p = document.createElement('p');
    p.textContent = desc;

    card.append(h3, span, p);
    contenedor.appendChild(card);
  });
}

// Scroll suave
function activarScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      const destino = document.querySelector(enlace.getAttribute('href'));
      if (!destino) return;
      e.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth' });
      // Cierra menú móvil si está abierto
      document.querySelector('#menu').classList.remove('open');
      document.querySelector('#btn-menu').setAttribute('aria-expanded', 'false');
    });
  });
}

// Menú hamburguesa
function activarMenu() {
  const btn = document.querySelector('#btn-menu');
  const menu = document.querySelector('#menu');
  btn.addEventListener('click', () => {
    const abierto = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', abierto.toString());
    btn.textContent = abierto ? '✕' : '☰';
  });
}

// Validación del formulario
function activarFormulario() {
  const form = document.querySelector('#form-contacto');
  const msg = document.querySelector('#form-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (nombre.length < 2 || !emailOk || mensaje.length < 10) {
      msg.textContent = '⚠️ Por favor completa los campos correctamente.';
      msg.className = 'error';
      return;
    }
    msg.textContent = `✅ ¡Gracias, ${nombre}! Tu mensaje fue registrado (demo sin backend).`;
    msg.className = 'ok';
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarProyectos();
  activarScrollSuave();
  activarMenu();
  activarFormulario();
});
