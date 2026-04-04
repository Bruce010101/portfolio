document.querySelectorAll('.btn-download').forEach(btn => {
  btn.addEventListener('click', function () {
    this.innerText = "Downloaded ✓";
  });
});
