const showButton = document.getElementById("showEnvelope");
const overlay = document.getElementById("overlay");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const cierre = document.getElementById("cierre");

// Mostrar el sobre al presionar el botón
showButton.addEventListener("click", () => {
  overlay.style.display = "flex"; // Hacer visible la ventana flotante

  cierre.addEventListener("click", () => {
    overlay.style.display = "none"; // Cerrar la ventana flotante
});

  // Animar la solapa y la carta
  setTimeout(() => {
    flap.style.transform = "rotateX(-180deg)"; // Abrir solapa
    letter.style.top = "0"; // Deslizar carta hacia afuera
  }, 300); // Retraso para mayor efecto
});







document.getElementById('openModal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'flex';
  });
  
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
  });

