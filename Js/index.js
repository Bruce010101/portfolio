const backToTopBtn = document.getElementById("btn-back-to-top");

if (backToTopBtn) {
  const toggleVisibility = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    backToTopBtn.style.display = scrollTop > 20 ? "block" : "none";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    backToTopBtn.style.outline = "none";
  };

  window.addEventListener("scroll", toggleVisibility);
  backToTopBtn.addEventListener("click", scrollToTop);
}
