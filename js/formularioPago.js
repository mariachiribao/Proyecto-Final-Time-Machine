document.addEventListener("DOMContentLoaded", function () {
  const amountInput = document.getElementById("amount");
  const emailInput = document.getElementById("email");
  const cardTypeSelect = document.getElementById("cardType");
  const cardNumberInput = document.getElementById("cardNumber");

  // Obtener total desde el localStorage
  const total = localStorage.getItem("carritoTotal");
  amountInput.value = total ? `$${parseFloat(total).toFixed(2)}` : "$0.00";

  // Detección automática del tipo de tarjeta por número
  cardNumberInput.addEventListener("input", function () {
    const number = cardNumberInput.value;

    if (/^4/.test(number)) {
      cardTypeSelect.value = "visa";
    } else if (/^5[1-5]/.test(number)) {
      cardTypeSelect.value = "mastercard";
    } else if (/^6/.test(number)) {
      cardTypeSelect.value = "mercadopago";
    } else if (/^3[47]/.test(number)) {
      cardTypeSelect.value = "naranjax";
    } else {
      cardTypeSelect.value = "";
    }
  });

  // Simular registro de usuario
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      alert("Por favor ingresa un correo válido.");
      return;
    }

    alert(`✅ Usuario registrado correctamente:\n${email}`);
  });

  // Simular confirmación de pago
  document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const cardType = cardTypeSelect.value;
    const cardNumber = cardNumberInput.value.trim();
    const userEmail = emailInput.value.trim();
    const totalPago = amountInput.value;

    // Validar número de tarjeta
    if (!/^\d{16}$/.test(cardNumber)) {
      alert("❌ El número de tarjeta debe tener 16 dígitos.");
      return;
    }

    // Validar selección de tarjeta
    if (!cardType) {
      alert("❌ Selecciona un tipo de tarjeta válido.");
      return;
    }

    const confirmBtn = e.target.querySelector("button");
    confirmBtn.disabled = true;
    confirmBtn.textContent = "Procesando...";

    // Simular procesamiento del pago
    setTimeout(() => {
  const lastDigits = cardNumber.slice(-4);
  const userEmail = emailInput.value;
  const totalPago = amountInput.value;

  alert(
    `✅ PAGO CONFIRMADO ✅\n\n` +
    `Usuario: ${userEmail}\n` +
    `Tarjeta: ${cardType.toUpperCase()} **** **** **** ${lastDigits}\n` +
    `Importe: ${totalPago}\n\n` +
    `¡Gracias por tu compra!`
  );

  // ✅ Vaciar el carrito y total
  localStorage.removeItem("carrito");
  localStorage.removeItem("carritoTotal");
  localStorage.removeItem("carritoFinalizado"); // opcional, si lo usás

  // ✅ Redirigir a la página de productos
  window.location.href = "../pages/productos.html";
}, 2000);
  });
});
