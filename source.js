// Boton para Subir ----------
parriba.addEventListener("click", topFunction);
let button = document.getElementById("parriba");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 60) {
    button.style.opacity = 100;
  } else {
    button.style.opacity = 0;
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
  console.log("funciona");
}

// Botón Modular ----------

let button_contenido = document.getElementsByClassName("obra");
let modular = document.getElementById("modular");

function showContent() {
  if (modular.style.display == "none") {
    modular.style.display = "flex";
  } else {
    modular.style.display = "none";
  }
}

// Codigo y Curiosidades ----------

const CODIGOS_SECRETOS = {
  lll: () => latripleele(),
  independiente: () => dinos(),
  noe: () => ganarDineroFalso(),
  clear: () => reiniciarTodo(),
  chicoschicos: () => chicoschicos(),
};

const MAX_LONGITUD = Math.max(
  ...Object.keys(CODIGOS_SECRETOS).map((c) => c.length),
);
let secuenciaUsuario = [];

document.addEventListener("keydown", (event) => {
  const tecla = event.key.toLowerCase();

  if (tecla.length === 1) {
    secuenciaUsuario.push(tecla);

    if (secuenciaUsuario.length > MAX_LONGITUD) {
      secuenciaUsuario.shift();
    }

    const secuenciaActual = secuenciaUsuario.join("");

    for (const codigo in CODIGOS_SECRETOS) {
      if (secuenciaActual.endsWith(codigo)) {
        CODIGOS_SECRETOS[codigo]();
        secuenciaUsuario = [];
        break;
      }
    }
  }
});

function latripleele() {
  console.log("Codigo Tini");
  alert("Tini Tini Tini!");
}

function dinos() {
  document.body.style.filter = "grayscale(100%)";
}

function ganarDineroFalso() {
  alert("Tengo Miedo");
}

function chicoschicos() {
  alert("Ayuda Ayuda Ayuda! 🤌🤌🤌 ");
}

function reiniciarTodo() {
  console.log("Limpiando");
  document.body.style.filter = "none";
}
//
// let pinturas = document.querySelectorAll(".obra"); // O el selector correcto
// const modal = document.getElementById("modal__window");
//
// pinturas.forEach(function (pintura) {
//   pintura.addEventListener("click", windowshow);
// });
//
// function windowshow() {
//   modal.setAttribute("id", "modal__window.is-active");
// }
//
// ---
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal__window");
  if (!modal) return;

  const baseImg = document.getElementById("zoom__base_img");
  const targetImg = document.getElementById("zoom__target_img");
  const modalTitle = modal.querySelector(".modal__content h1");
  const modalText = modal.querySelector(".modal__content p");
  const closeBtn = modal.querySelector(".modal__close");
  const overlay = modal.querySelector(".modal__overlay");

  const zoomContainer = document.getElementById("zoom__container");
  const lens = document.getElementById("zoom__lens");
  const zoomWindow = document.getElementById("zoom__window");

  const ZOOM_SCALE = 2;

  const openModal = (imgSrc, title, desc) => {
    if (baseImg && imgSrc) baseImg.src = imgSrc;
    if (targetImg && imgSrc) targetImg.src = imgSrc;
    if (modalTitle && title) modalTitle.textContent = title;
    if (modalText && desc) modalText.textContent = desc;

    modal.classList.add("is-active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-active");
    zoomContainer.classList.remove("zoom__active");
    if (lens) lens.style.display = "none";
    if (zoomWindow) zoomWindow.style.display = "none";
    document.body.style.overflow = "";
  };

  // Delegación de clics en las tarjetas
  const cards = document.querySelectorAll('.parent > div[class^="div"]');
  cards.forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      const img = card.querySelector("img.obra");
      const title = card.querySelector("h4");
      const desc = card.querySelector("blockquote");

      openModal(
        img ? img.getAttribute("src") : "",
        title ? title.textContent.trim() : "Obra de Arte",
        desc ? desc.textContent.trim() : "",
      );
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active"))
      closeModal();
  });

  // Motor del Zoom estilo Amazon
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    const rect = zoomContainer.getBoundingClientRect();
    const lensW = lens.offsetWidth || 140;
    const lensH = lens.offsetHeight || 140;

    let x = e.clientX - rect.left - lensW / 2;
    let y = e.clientY - rect.top - lensH / 2;

    const maxX = rect.width - lensW;
    const maxY = rect.height - lensH;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`;

    // Mueve la imagen ampliada en sentido contrario
    targetImg.style.transform = `translate(-${x * ZOOM_SCALE}px, -${y * ZOOM_SCALE}px)`;
  };

  zoomContainer.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 768) {
      zoomContainer.classList.add("zoom__active");
      lens.style.display = "block";
      zoomWindow.style.display = "block";
    }
  });

  zoomContainer.addEventListener("mousemove", handleMouseMove);

  zoomContainer.addEventListener("mouseleave", () => {
    zoomContainer.classList.remove("zoom__active");
    lens.style.display = "none";
    zoomWindow.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".carousel-container");
  if (!container) return;

  const slides = container.querySelectorAll(".carousel-slide");
  const prevBtn = container.querySelector(".carousel-btn.prev");
  const nextBtn = container.querySelector(".carousel-btn.next");
  const dotsContainer = container.querySelector(".carousel-dots");

  let currentIndex = 0;

  // Generar dinámicamente los bullets según la cantidad de diapositivas
  slides.forEach((_, idx) => {
    const dot = document.createElement("button");
    dot.classList.add("carousel-dot");
    dot.setAttribute("aria-label", `Ir a imagen ${idx + 1}`);
    if (idx === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      goToSlide(idx);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".carousel-dot");

  function updateCarousel() {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === currentIndex);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Soporte de navegación por teclado (flechas izquierda/derecha)
  container.setAttribute("tabindex", "0");
  container.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });
});
