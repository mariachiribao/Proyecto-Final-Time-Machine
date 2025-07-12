// Array de productos
const productos = [
  {
    id: "1604",
    imagen: "../assets/Multimedia/img/1604.jpg",
    precio: 20.00,
    nombre: "Cámara Oscura",
    descripcion: "Este es un modelo del siglo XVII. La Cámara Oscura produce una imagen sobre una pantalla blanca curva horizontal, a modo de mesa, situada en el centro de una habitación totalmente oscurecida, pintada de negro."
  },
  {
    id: "1839",
    imagen: "../assets/Multimedia/img/1839.jpg",
    precio: 40.00,
    nombre: "Cámara Daguerrotipo",
    descripcion: "El daguerrotipo es un proceso por el cual se obtiene una imagen en positivo a partir de una placa de cobre recubierta de yoduro de plata."
  },

  {
    id: "1844",
    imagen: "../assets/Multimedia/img/1844.jpg",
    precio: 75.00,
    nombre: "Cámara Megaskop",
    descripcion:"Los primeros modelos ocuparon placas de daguerrotipo y los posteriores utilizaron métodos de emulsión húmeda. La lente podía rotar 150 grados."
  },
  {
    id: "1852",
    imagen: "../assets/Multimedia/img/1852.jpg",
    precio: 70.00,
    nombre: "Colodión Húmedo",
    descripcion:"El colodión húmedo es un procedimiento fotográfico, el cual utilizaba un sulfato de protóxido de hierro para su revelado. El colodión es una solución de nitrocelulosa en una mezcla de éter y alcohol y fue, algo parecido a un barniz."
  },
  {
    id: "1888",
    imagen: "../assets/Multimedia/img/1888.jpg",
    precio: 70.00,
    nombre: "Cámara Kodak",
    descripcion:"Primera cámara manual de rollo de película bajo el nombre de Cámara Kodak. Registrada con el número 388.850, resultó un éxito ya que supuso el comienzo de la fotografía popular e instantánea."
  },
  {
    id: "1900",
    imagen: "../assets/Multimedia/img/1900.jpg",
    precio: 170.00,
    nombre: "Kodak Brownie",
    descripcion:"Caja de madera recubierta por una fina película de cuero sintético. Poseía una caja de películas en cintas de 117 y el resultado era una imagen de 2 1/4 X 2 1/4 . La lente de la cámara era menisco y el obturador de la misma era rotary."
  },
  {
    id: "1910",
    imagen: "../assets/Multimedia/img/1910.jpg",
    precio: 150.00,
    nombre: "Cámara Raisecamera",
    descripcion:"Cámara de visión trasera con fuelle de madera de gran formato de diseño casi estandarizado, a diferencia de la cámara de campo mucho más liviana y flexible, pero no tan engorrosa como la cámara de estudio."
  },
  {
    id: "1925",
    imagen: "../assets/Multimedia/img/1925.jpg",
    precio: 250.00,
    nombre: "Cámara Leica 1",
    descripcion:"Una de las ventajas de utilizar película cinematográfica era que ésta tenía unas perforaciones laterales que permitían enrollar la película en un carrete y sacar muchas fotos."
  },
  {
    id: "1935",
    imagen: "../assets/Multimedia/img/1935.jpg",
    precio: 250.00,
    nombre: "Kodakchrome",
    descripcion:"Analógica, la cual permitió que por primera vez se pudiese realizar fotografía en color usando un carrete, el cual se basó en el uso de la tricomía para unir 3 fotos, cada una de ellas con un filtro basado en los colores primarios (rojo, azul y verde)."
  },
  {
    id: "1936",
    imagen: "../assets/Multimedia/img/1936.jpg",
    precio: 250.00,
    nombre: "Kine Exakta",
    descripcion:"Disponía de un obturador plano focal de tela de recorrido horizontal que permitía una velocidad máxima de 1/1000seg. Con 20 posiciones y óptica intercambiable. Disponía de sincronización de flash y autodisparador."
  },
  {
    id: "1947",
    imagen: "../assets/Multimedia/img/1947.jpg",
    precio: 350.00,
    nombre: "Polaroid Land",
    descripcion:"Invención de materiales polarizantes en forma de lámina, la fotografía en cuestión de un minuto."
  },
  {
    id: "1947d",
    imagen: "../assets/Multimedia/img/1947d.jpg",
    precio: 350.00,
    nombre: "Cámara Duaflex",
    descripcion:"Las lentes no son gemelas, el visor es más sencilla que la del objetivo, el cristal superior de enfoque no sea tal cristal, sino de nuevo una lente para aumentar. Es como el visor de una cámara."
  },
  {
    id: "1972",
    imagen: "../assets/Multimedia/img/1972.jpg",
    precio: 450.00,
    nombre: "Polaroid SX-70",
    descripcion:"Se introduce la película instantánea, cómo se popularizó entre el público, el cartucho Polaroid. Pero, a parte de la evolución técnica, se convirtió en objeto de cultura POP, usada por artistas y fotógrafos."
  },
  {
    id: "1975",
    imagen: "../assets/Multimedia/img/1975.jpg",
    precio: 650.00,
    nombre: "Digital de Kodak",
    descripcion:"Un aparatoso dispositivo del tamaño de una tostadora, que pesaba 3,6 kilos y que sólo tomaba imágenes en blanco y negro con una calidad de 0,01 megapíxeles. Tardaba 23 segundos en grabar una foto."
  },
  {
    id: "1981",
    imagen: "../assets/Multimedia/img/1981.jpg",
    precio: 550.00,
    nombre: "Sony Mavica",
    descripcion:"Sus 0,01 megapixeles, técnicamente cumplía los requisitos para ser considerada como tal. La imagen se guardaba en una cinta de cassette y se visualizaba en un televisor. Las tarjetas de memoria no existían."
  },
  {
    id: "1986",
    imagen: "../assets/Multimedia/img/1986.jpg",
    precio: 350.00,
    nombre: "Cámara Fuji",
    descripcion:"Desechable, tanto el carrete como la lente y el resto de componentes están integrados en una misma carcasa, para extraer el film a la hora de revelarlo, se daña irremediablemente la estructura de la cámara."
  },
  {
    id: "1988",
    imagen: "../assets/Multimedia/img/1988.jpg",
    precio: 450.00,
    nombre: "Cámara Fuji",
    descripcion:"Primera cámara del mundo en almacenar datos en una tarjeta de memoria de semiconductores, método de almacenamiento fue una revolución y es original de Fujifilm. Memoria SRAM de 2mb, podía almacenar datos de 5 a 10 fotografías."
  },
  {
    id: "1991",
    imagen: "../assets/Multimedia/img/1991.jpg",
    precio: 850.00,
    nombre: "Cámara Fotoman",
    descripcion:"Modelo 1, solo podía hacer fotos con una resolución de 320x240 píxeles, en blanco y negro, solo tenia 1MB de memoria interna y sensor tipo CCD."
  },
  {
    id: "1992",
    imagen: "../assets/Multimedia/img/1992.jpg",
    precio: 1850.00,
    nombre: "Cámara Kodak",
    descripcion:"Modelo SLR DSC, primera cámara digital profesional para la venta en los E.E.UU. a 13 dólares."
  },
  {
    id: "1994",
    imagen: "../assets/Multimedia/img/1994.jpg",
    precio: 1050.00,
    nombre: "Cámara Apple Q100",
    descripcion:"Diseño peculiar, con capacidad de 2 resoluciones de fotografías pudiendo ser 8 o 32 fotografías. La conexión a la computadora, compatible Mac o PC, por cable serie."
  },
  {
    id: "1995",
    imagen: "../assets/Multimedia/img/1995.jpg",
    precio: 950.00,
    nombre: "Cámara Casio QV10",
    descripcion:"Primera cámara digital y comercial con pantalla LCD incorporada, reemplazando al viewfinder tradicional. Pantalla a color y de matriz activa, tamaño de 1.8 pulgadas, muy difícil de ver en exteriores con mucha luz solar."
  },
   {
    id: "1996",
    imagen: "../assets/Multimedia/img/1996.jpg",
    precio: 950.00,
    nombre: "Kodak DC25",
    descripcion:"Incorpora display LCD en color de visualización instantánea, proporciona visión previa de las imágenes, memoria interna de 2MB que almacena hasta 14 fotografías de alta resolución o 29 de resolución estándar."
  },
  {
    id: "1999",
    imagen: "../assets/Multimedia/img/1999.jpg",
    precio: 4500.00,
    nombre: "Nikon D1",
    descripcion:"Una cámara digital que iba a aumentar su resolución hasta los 2,7 Mpixels, tendría una velocidad máxima de 1/16000, una pantalla de 2″ para revisar las fotografías realizadas, podría disparar a una cadencia de 4.5 FPS."
  },
  {
    id: "2000",
    imagen: "../assets/Multimedia/img/2000.jpg",
    precio: 2500.00,
    nombre: "Sharp JSHO4",
    descripcion:"Dispositivo CMOS lente de 110.000 píxeles, fotografías resolución de 0.1 megapixeles, display 256 colores, capacidad de almacenar 500 números de teléfono. Acceso a la web, batería de litio duracion 125 minutos de llamadas."
  },
  {
    id: "2003",
    imagen: "../assets/Multimedia/img/2003.jpg",
    precio: 4500.00,
    nombre: "Canon 500D",
    descripcion:"Sensor de 15.1 megapíxeles formato APS-C con procesador DIGIC IV y sistema de autoenfoque de 9 puntos. Sensibilidad máxima sin forzar es de 3200 ISO. Monitor de 3 pulgadas, resolución de casi un megapíxel."
  },
  {
    id: "2007",
    imagen: "../assets/Multimedia/img/2007.jpg",
    precio: 4500.00,
    nombre: "Go Pro Hero 3",
    descripcion:"Completamente digital. Tiene una resolución de 3 megapixel para fotografías y es capaz de grabar videos de hasta 512 x 384 pixels, tarjeta SD interna. Tipo pulsera para deportistas."
  },
  {
    id: "2008",
    imagen: "../assets/Multimedia/img/2008.jpg",
    precio: 6500.00,
    nombre: "Laica S",
    descripcion:"Sensor tecnología CMOS de 30x45 mm de 37.5 MP, 50% mayor que uno full frame. El motor es el nuevo procesador Maestro II, 4 veces más rápido que su antecesor, 3,5 fps, record de velocidad con este tamaño de archivo."
  },
  {
    id: "2013",
    imagen: "../assets/Multimedia/img/2013.jpg",
    precio: 6500.00,
    nombre: "Sony Cyber Shot",
    descripcion:"Modelo DSCWX300, diseño compacto 96x54,9mm, 25,7mm conveniente para manipular rápidamente, capturar sin que la respuesta de encendido o la posición para tomar una foto sea un problema. Su peso 139 gramos."
  },
  {
    id: "2014",
    imagen: "../assets/Multimedia/img/2014.jpg",
    precio: 7500.00,
    nombre: "Socialmatic-Polaroid",
    descripcion:"Modelo inspirada en la imagen de Instagram, sensor de 14 Megapíxeles y otro de 2 MPx (cámara posterior). Almacenamiento es de 4GB mediante tarjetas microSD. Pantalla de 4,5 pulgadas, serviría su interfaz Android."
  },
  {
    id: "2019",
    imagen: "../assets/Multimedia/img/2019.jpg",
    precio: 3500.00,
    nombre: "Cámara Iphone 11",
    descripcion:"Interfaz cámara iPhone 11 y 11 Pro, muestra lo que sucede fuera de la toma que estás encuadrando. Esto puede ayudarte a encuadrar la toma o cambiar a cámara diferente del iPhone para obtener una mejor foto."
  },
];

// Cargar los productos en el DOM
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");

  productos.forEach(producto => {
    const item = document.createElement("div");
    item.className = "product-item";

    item.innerHTML = `
      <div class="card-container">
        <div class="card-flip-inner">
          <div class="card-front">
            <h3>${producto.id}</h3>
            <img src="${producto.imagen}" alt="Imagen del Producto" />
            <p>Precio: $${producto.precio.toFixed(2)}</p>
          </div>
          <div class="card-back">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
          </div>
        </div>
      </div>
      <button class="button" data-id="${producto.id}">Añadir al carrito</button>
    `;

    grid.appendChild(item);
  });

  document.querySelectorAll(".button[data-id]").forEach(boton => {
  boton.addEventListener("click", () => {
    const id = boton.dataset.id;
    const producto = productos.find(p => p.id === id);

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoEnCarrito = carrito.find(item => item.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto añadido al carrito");
  });
});

  const inputBusqueda = document.getElementById("busqueda");
  const mensajeNoResultados = document.getElementById("mensajeNoResultados");

  inputBusqueda.addEventListener("input", () => {
    const texto = inputBusqueda.value.toLowerCase();
    const items = document.querySelectorAll(".product-item");

    let hayCoincidencias = false;

    items.forEach(item => {
      const id = item.querySelector(".card-front h3").textContent.toLowerCase();
      const nombre = item.querySelector(".card-back h3").textContent.toLowerCase();
      const descripcion = item.querySelector(".card-back p").textContent.toLowerCase();

      const coincide = id.includes(texto) || nombre.includes(texto) || descripcion.includes(texto);

      if (coincide) {
        item.style.display = "flex";
        hayCoincidencias = true;
      } else {
        item.style.display = "none";
      }
    });

    mensajeNoResultados.style.display = hayCoincidencias ? "none" : "block";
  });

  // Prevenir el envío del formulario
  document.getElementById("form-busqueda").addEventListener("submit", function(e) {
    e.preventDefault();
  });
});