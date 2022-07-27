const path = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-item").forEach((item) => {
  if (item.href.includes(path)) {
    item.classList.add("active");
  }
});
