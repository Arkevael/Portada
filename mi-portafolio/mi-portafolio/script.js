// TODO: reemplaza estos 4 proyectos con tus proyectos reales
const proyectos = [
  { titulo: "[Título 1]", tech: "[Tecnologías]", desc: "[Descripción breve]" },
  { titulo: "[Título 2]", tech: "[Tecnologías]", desc: "[Descripción breve]" },
  { titulo: "[Título 3]", tech: "[Tecnologías]", desc: "[Descripción breve]" },
  { titulo: "[Título 4]", tech: "[Tecnologías]", desc: "[Descripción breve]" },
];

function renderizarProyectos() {
  const contenedor = document.querySelector('.grid-proyectos');

  proyectos.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card-proyecto';

    const h3 = document.createElement('h3');
    h3.textContent = p.titulo;

    const tech = document.createElement('span');
    tech.className = 'tech';
    tech.textContent = p.tech;

    const desc = document.createElement('p');
    desc.textContent = p.desc;

    card.append(h3, tech, desc);
    contenedor.appendChild(card);
  });
}

// Validación del formulario de contacto
const form = document.getElementById('form-contacto');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valido = true;

  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');

  document.getElementById('error-nombre').textContent = '';
  document.getElementById('error-email').textContent = '';
  document.getElementById('error-mensaje').textContent = '';

  if (nombre.value.trim() === '') {
    document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
    valido = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    document.getElementById('error-email').textContent = 'Ingresa un email válido.';
    valido = false;
  }

  if (mensaje.value.trim().length < 10) {
    document.getElementById('error-mensaje').textContent = 'El mensaje debe tener al menos 10 caracteres.';
    valido = false;
  }

  if (valido) {
    alert('Formulario enviado correctamente (simulado).');
    form.reset();
  }
});

// Scroll suave del botón CTA
document.getElementById('btn-cta').addEventListener('click', () => {
  document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
});

// TODO: agrega aquí más interactividad si quieres (dark mode, etc.)

document.addEventListener('DOMContentLoaded', renderizarProyectos);
