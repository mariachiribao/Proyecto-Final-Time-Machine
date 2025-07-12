// formulario-contacto.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacto");
  const mensaje = document.getElementById("mensaje-exito");
  const reviewCarousel = document.getElementById("reviewCarousel");

  if (!form || !mensaje || !reviewCarousel) return;

  // Cargar reseñas almacenadas en localStorage
  const reseñasGuardadas = JSON.parse(localStorage.getItem("reseñas")) || [];
  reseñasGuardadas.forEach(reseña => agregarReseñaAlCarrusel(reseña));

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const motivo = form.elements["motivo"].value;
    const ratingSeleccionado = form.querySelector('input[name="rating"]:checked');

    if (motivo === "reseña" && !ratingSeleccionado) {
      alert("Por favor, seleccioná una calificación con estrellas.");
      return;
    }

    const datos = new FormData(form);

    // Si es reseña, la agregamos al carrusel + localStorage
    if (motivo === "reseña") {
      const nombre = datos.get("nombre");
      const mensajeTexto = datos.get("mensaje");
      const rating = ratingSeleccionado.value;

      const nuevaReseña = {
        nombre,
        mensaje: mensajeTexto,
        rating: parseInt(rating),
        avatar: `https://i.pravatar.cc/100?u=${nombre + Date.now()}`
      };

      agregarReseñaAlCarrusel(nuevaReseña);

      reseñasGuardadas.push(nuevaReseña);
      localStorage.setItem("reseñas", JSON.stringify(reseñasGuardadas));

      form.reset();
      mensaje.style.display = "block";
      return; // No enviar a Formspree si es reseña local
    }

    // Enviar al backend externo (Formspree) si no es reseña
    const respuesta = await fetch(form.action, {
      method: "POST",
      body: datos,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (respuesta.ok) {
      form.reset();
      mensaje.style.display = "block";
    } else {
      alert("Ocurrió un error al enviar el formulario.");
    }
  });

  function agregarReseñaAlCarrusel({ nombre, mensaje, rating, avatar }) {
    const div = document.createElement("div");
    div.classList.add("review");

    const estrellas = "★".repeat(rating) + "☆".repeat(5 - rating);

    div.innerHTML = `
      <img src="${avatar}" alt="Usuario" class="avatar">
      <div class="review-content">
        <h3>${nombre}</h3>
        <div class="stars">${estrellas}</div>
        <p>${mensaje}</p>
      </div>
    `;

    reviewCarousel.appendChild(div);
  }
});