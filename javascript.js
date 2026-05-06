// ====== CAMBIO DE SECCIONES ======
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");

  secciones.forEach(sec => {
    sec.classList.remove("activa");
  });

  document.getElementById(id).classList.add("activa");
}

// ====== ESTUDIANTES ======
function agregarEstudiante() {
  const input = document.getElementById("nombreEstudiante");
  const nombre = input.value.trim();
  const lista = document.getElementById("listaEstudiantes");

  if (nombre === "") {
    alert("Escribe un nombre");
    return;
  }

  const li = document.createElement("li");
  li.textContent = nombre;

  lista.appendChild(li);

  input.value = "";
}