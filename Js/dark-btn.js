const backToTopBtn = document.getElementById("btn-back-to-top-dark");

if (backToTopBtn) {
  const toggleVisibility = () => {
    const isVisible = window.scrollY > 20;
    backToTopBtn.style.display = isVisible ? "block" : "none";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    backToTopBtn.style.outline = "none";
    backToTopBtn.style.color = "black";
  };

  window.addEventListener("scroll", toggleVisibility);
  backToTopBtn.addEventListener("click", scrollToTop);
}
