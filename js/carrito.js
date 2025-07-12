document.addEventListener("DOMContentLoaded", () => {
  const carritoContainer = document.getElementById("carrito-container");
  const totalCarritoDiv = document.getElementById("total-carrito");
  const finalizarBtn = document.getElementById("finalizar-compra");
  const contadorCarrito = document.getElementById("contador-carrito");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function actualizarContador() {
    if (contadorCarrito) {
      const totalCantidad = carrito.reduce((acc, prod) => acc + Number(prod.cantidad), 0);
      contadorCarrito.textContent = totalCantidad;
    }
  }

  function renderCarrito() {
    carritoContainer.innerHTML = "";
    totalCarritoDiv.innerHTML = "";

    if (carrito.length === 0) {
      carritoContainer.innerHTML = `
        <div class="carrito-vacio-box">
          <i class="fas fa-shopping-cart carrito-icono-vacio"></i>
          <p class="mensaje-carrito-vacio">Tu carrito está vacío.</p>
        </div>
      `;
      finalizarBtn.disabled = true;
      actualizarContador();
      return;
    }

    finalizarBtn.disabled = false;

    carrito.forEach(producto => {
      const precio = Number(producto.precio);
      const cantidad = Number(producto.cantidad);
      const subtotal = precio * cantidad;

      const div = document.createElement("div");
      div.classList.add("item-carrito");

      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <div class="info-producto">
          <h4>${producto.nombre}</h4>
          <p>Precio unitario: $${precio.toFixed(2)}</p>
        </div>
        <div class="contador">
          <button class="menos" data-id="${producto.id}">-</button>
          <span>${cantidad}</span>
          <button class="mas" data-id="${producto.id}">+</button>
        </div>
        <div class="importe">$${subtotal.toFixed(2)}</div>
        <button class="eliminar" title="Eliminar" data-id="${producto.id}">🗑️</button>
      `;

      carritoContainer.appendChild(div);
    });

    const total = carrito.reduce((acc, prod) => acc + Number(prod.precio) * Number(prod.cantidad), 0);
    totalCarritoDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;

    activarBotones();
    actualizarContador();
  }

  function activarBotones() {
    document.querySelectorAll(".mas").forEach(btn => {
      btn.onclick = (e) => {
        const id = e.target.dataset.id;
        const prod = carrito.find(p => p.id === id);
        if (prod) {
          prod.cantidad = Number(prod.cantidad) + 1;
          guardarCarrito();
          renderCarrito();
        }
      };
    });

    document.querySelectorAll(".menos").forEach(btn => {
      btn.onclick = (e) => {
        const id = e.target.dataset.id;
        const prod = carrito.find(p => p.id === id);
        if (prod && prod.cantidad > 1) {
          prod.cantidad = Number(prod.cantidad) - 1;
          guardarCarrito();
          renderCarrito();
        }
      };
    });

    document.querySelectorAll(".eliminar").forEach(btn => {
      btn.onclick = (e) => {
        const id = e.target.dataset.id;
        carrito = carrito.filter(p => p.id !== id);
        guardarCarrito();
        renderCarrito();
      };
    });

    finalizarBtn.onclick = () => {
  const total = carrito.reduce((acc, prod) => acc + Number(prod.precio) * Number(prod.cantidad), 0);

  // Guardamos el total en localStorage para el formulario de pago
  localStorage.setItem("carritoTotal", total.toFixed(2));

  // También podés guardar los productos si querés mostrarlos en el ticket
  localStorage.setItem("carritoFinalizado", JSON.stringify(carrito));

  // Redirigimos al formulario
  window.location.href = "formularioPago.html";
};

  }

  renderCarrito();
});