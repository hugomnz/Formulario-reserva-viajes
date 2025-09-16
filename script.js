document.addEventListener("DOMContentLoaded", () => {
  // Fecha actual
  const hoy = new Date();
  const fechaFormateada = hoy.toLocaleDateString('es-ES');
  const hoyISO = hoy.toISOString().split("T")[0]; // formato YYYY-MM-DD
  document.getElementById("fechaActual").value = fechaFormateada;

  // Elementos del formulario
  const nombre = document.getElementById("nombre");
  const dni = document.getElementById("dni");
  const email = document.getElementById("email");
  const salida = document.getElementById("salida");
  const regreso = document.getElementById("regreso");
  const destino = document.getElementById("destino");
  const seguro = document.getElementById("seguro");
  const aceptarCondiciones = document.getElementById("aceptarCondiciones");
  const condicionesDiv = document.getElementById("condicionesSeguro");
  const advertenciaClase = document.getElementById("advertenciaClase");
  const resumen = document.getElementById("resumen");

  // Mensajes
  const msjNombre = document.getElementById("validaNombre");
  const msjDni = document.getElementById("validaDni");
  const msjEmail = document.getElementById("validaEmail");
  const msjFechas = document.getElementById("validaFechas");
  const msjCondiciones = document.getElementById("validaCondiciones");

  // Expresiones regulares
  const regexNombre = /^[A-Za-z0-9]{1,12}$/;
  const regexEmail = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
  const regexDni = /^[0-9]{8}[a-zA-Z]{1}$/;

  // Validaciones individuales
  nombre.addEventListener("blur", () => {
    if (regexNombre.test(nombre.value)) {
      nombre.style.backgroundColor = "#c8e6c9";
      msjNombre.textContent = "";
    } else {
      nombre.style.backgroundColor = "#ffcdd2";
      msjNombre.textContent = "Nombre inválido (máximo 12 caracteres alfanuméricos)";
    }
  });

  dni.addEventListener("blur", () => {
    const valor = dni.value.toUpperCase();
    if (regexDni.test(valor)) {
      const numero = parseInt(valor.slice(0, 8));
      const letra = valor.slice(8);
      const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
      const letraCorrecta = letras[numero % 23];

      if (letra === letraCorrecta) {
        dni.style.backgroundColor = "#c8e6c9";
        msjDni.textContent = "";
      } else {
        dni.style.backgroundColor = "#ffcdd2";
        msjDni.textContent = "La letra del DNI no es correcta.";
      }
    } else {
      dni.style.backgroundColor = "#ffcdd2";
      msjDni.textContent = "DNI inválido. Formato: 8 dígitos + letra.";
    }
  });

  email.addEventListener("blur", () => {
    if (regexEmail.test(email.value)) {
      email.style.backgroundColor = "#c8e6c9";
      msjEmail.textContent = "";
    } else {
      email.style.backgroundColor = "#ffcdd2";
      msjEmail.textContent = "Correo inválido. Ejemplo: usuario@dominio.com";
    }
  });

  // Validación de fechas
  salida.addEventListener("blur", () => {
    if (salida.value && salida.value < hoyISO) {
      salida.style.backgroundColor = "#ffcdd2";
      msjFechas.textContent = "La fecha de salida no puede ser anterior a hoy.";
    } else {
      salida.style.backgroundColor = "#c8e6c9";
      msjFechas.textContent = "";
    }
  });

  regreso.addEventListener("blur", () => {
    if (salida.value && regreso.value && regreso.value <= salida.value) {
      regreso.style.backgroundColor = "#ffcdd2";
      msjFechas.textContent = "La fecha de regreso debe ser posterior a la de salida.";
    } else if (regreso.value) {
      regreso.style.backgroundColor = "#c8e6c9";
      if (msjFechas.textContent === "La fecha de salida no puede ser anterior a hoy.") return;
      msjFechas.textContent = "";
    }
  });

  // Advertencia por clase
  document.querySelectorAll('input[name="clase"]').forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "Primera Clase" && radio.checked) {
        advertenciaClase.textContent = "⚠️ La Primera Clase puede tener recargo.";
      } else {
        advertenciaClase.textContent = "";
      }
    });
  });

  // Mostrar condiciones si se contrata seguro
  seguro.addEventListener("change", () => {
    condicionesDiv.style.display = seguro.checked ? "block" : "none";
    if (!seguro.checked) {
      aceptarCondiciones.checked = false;
      msjCondiciones.textContent = "";
    }
  });

  // Botón Enviar
  document.getElementById("enviar").addEventListener("click", () => {
    let valido = true;

    if (!regexNombre.test(nombre.value)) valido = false;
    if (!regexDni.test(dni.value)) valido = false;
    if (!regexEmail.test(email.value)) valido = false;
    if (!destino.value) valido = false;
    if (!salida.value || salida.value < hoyISO) valido = false;
    if (salida.value && regreso.value && regreso.value <= salida.value) valido = false;
    if (seguro.checked && !aceptarCondiciones.checked) {
      msjCondiciones.textContent = "Debe aceptar los términos del seguro.";
      valido = false;
    }

    if (valido) {
      const clase = document.querySelector('input[name="clase"]:checked')?.value || "";
      const texto = `
Fecha: ${fechaFormateada}
Nombre: ${nombre.value}
DNI: ${dni.value}
Correo: ${email.value}
Destino: ${destino.value}
Salida: ${salida.value}
Regreso: ${regreso.value}
Clase: ${clase}
Seguro: ${seguro.checked ? "Sí" : "No"}
      `.trim();
      resumen.value = texto;
    } else {
      resumen.value = "";
      alert("Por favor, rellena todos los campos obligatorios correctamente antes de enviar.");
    }
  });

  // Reset completo
  document.getElementById("formulario").addEventListener("reset", () => {
    document.querySelectorAll("input, select, textarea").forEach(el => {
      el.style.backgroundColor = "";
    });

    document.querySelectorAll(".mensaje").forEach(m => m.textContent = "");

    condicionesDiv.style.display = "none";
    resumen.value = "";
  });
});
