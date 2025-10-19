function openModal(index) {
  document.getElementById(`modal-${index}`)?.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeModal(index) {
  document.getElementById(`modal-${index}`)?.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

// Permite cerrar haciendo clic fuera del modal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("backdrop-blur-sm")) {
    e.target.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
});
