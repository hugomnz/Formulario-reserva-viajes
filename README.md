# Formulario-reserva-viajes
Aplicación web en HTML, CSS y JavaScript que implementa un formulario de reserva de viajes con validaciones avanzadas (nombre, DNI, correo, fechas, condiciones), opciones de clase y seguro, y generación automática de un resumen de la reserva.

# ✈️ Formulario de Reserva de Viajes

Este proyecto es una aplicación web que simula un **formulario de reserva de viajes** con múltiples campos, validaciones avanzadas, gestión de condiciones y generación automática de un resumen final del viaje. El diseño está desarrollado con **HTML5 y CSS3**, y toda la lógica de validación e interacción se implementa en **JavaScript**.

## 🚀 Características principales
- 📅 **Fecha actual mostrada automáticamente** en el formulario.  
- 📝 **Validaciones avanzadas**:
  - **Nombre**: máximo 12 caracteres alfanuméricos.  
  - **DNI**: validación de formato (8 dígitos + letra) y cálculo de letra correcta.  
  - **Correo electrónico**: validación mediante expresión regular.  
  - **Fechas**: la salida no puede ser anterior a la actual, y la de regreso debe ser posterior a la salida.  
- 🛫 **Selección de destino** entre varias ciudades predefinidas.  
- 💺 **Clase de viaje**: Económica, Business o Primera Clase (con advertencia especial en este último caso).  
- 🛡️ **Seguro opcional**: si se selecciona, se muestran condiciones adicionales que deben aceptarse.  
- 📋 **Resumen del viaje generado automáticamente** al enviar, con todos los datos introducidos.  
- 🔄 **Botón de reinicio** que limpia campos, estilos y mensajes de validación.  

## 📁 Estructura del proyecto
📂 formulario-reserva-viajes
├── 📄 index.html # Maquetación y estructura del formulario
├── 🎨 syles.css # Estilos con diseño responsivo y validaciones visuales
└── ⚙️ script.js # Validaciones, lógica del formulario y generación del resumen


## 🖼️ Vista previa de funcionamiento
1. El usuario introduce los datos obligatorios (nombre, DNI, correo, destino, fechas y clase).  
2. El sistema valida en tiempo real cada campo y aplica **colores visuales** (verde = válido, rojo = inválido).  
3. Si se selecciona **Primera Clase**, aparece un mensaje de advertencia sobre posible recargo.  
4. Si se activa el **seguro de viaje**, se despliegan condiciones adicionales que deben aceptarse.  
5. Al pulsar **Enviar**, si todo es válido, se genera un **resumen completo del viaje** en el área de texto.  
6. El botón **Reiniciar** devuelve el formulario a su estado inicial.  

## 💻 Tecnologías utilizadas
- **HTML5** para la estructura del formulario.  
- **CSS3** para estilos modernos, colores de validación, diseño limpio y responsive.  
- **JavaScript (ES6)** para todas las validaciones dinámicas, interacción con el usuario y generación del resumen.  

## ⚙️ Validaciones implementadas
- **Nombre**: se usa una expresión regular (`^[A-Za-z0-9]{1,12}$`).  
- **Correo electrónico**: expresión regular adaptada para verificar formato `usuario@dominio.com`.  
- **DNI**: comprobación del formato y cálculo de la letra según el algoritmo oficial.  
- **Fechas**: comparación de fechas con `Date()` y formato ISO (`YYYY-MM-DD`).  
- **Seguro**: condición obligatoria de aceptación si se activa la opción.  

## 🌍 Compatibilidad de navegadores
- Google Chrome ≥ v26  
- Mozilla Firefox ≥ v29  
- Microsoft Edge ≥ v12  
- Safari ≥ v9  
- Opera ≥ v15  

## 📦 Cómo usarlo
1. Clona este repositorio:  
   ```bash
   git clone https://github.com/hugomnz/formulario-reserva-viajes.git
2. Abre el archivo index.html en tu navegador.
3. Completa el formulario siguiendo las validaciones.
4. Pulsa Enviar para generar el resumen de la reserva.
5. Usa Reiniciar si deseas comenzar de nuevo.

Hecho por hugomnz, bajo licencia MIT (LICENSE).
