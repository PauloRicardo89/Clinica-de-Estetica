new SimpleAnime();

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowmedate = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowmedate;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimaScroll();
