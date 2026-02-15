function showToast(message, type) {
  const container = document.getElementById("toast-container");

  // Create toast div
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.textContent = message;

  // Add to container
  container.appendChild(toast);

  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 2000);
}


