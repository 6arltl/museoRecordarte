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

let button_contenido = document.getElementById("contenido");
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
