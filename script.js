document.addEventListener('DOMContentLoaded', function () {
  // Animação dos elementos com data-anime
  if (window.SimpleAnime) {
    new SimpleAnime();
  }

  // Função para fechar o menu mobile quando clicado em um link
  function setupMobileNavigation() {
    // Seleciona todos os links da navegação que começam com #
    const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');
    // Seleciona o botão de toggle do menu
    const navbarToggler = document.querySelector('.navbar-toggler');
    // Seleciona o elemento de menu colapsável
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Adiciona evento de clique a cada link
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Obtém o ID da seção alvo
        const targetId = this.getAttribute('href');
        
        // Se o ID é válido e a seção existe
        if(targetId && targetId !== '#') {
          const targetSection = document.querySelector(targetId);
          
          // Fechar o menu mobile após o clique (se estiver aberto)
          if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
          }
          
          if(targetSection) {
            // Determinar o offset baseado no tamanho da tela
            let offset = 80; // Padrão para desktop
            
            if (window.innerWidth < 768) {
              offset = 60; // Menor offset para mobile
            }
            
            // Rolagem suave
            window.scrollTo({
              top: targetSection.offsetTop - offset,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  // Animação para elementos que entram com scroll
  function initAnimaScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
      const windowmedate = window.innerHeight * 0.6;

      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top - windowmedate;
          if (sectionTop < 0) {
            section.classList.add('ativo');
          } else if (section.classList.contains('ativo')) {
            section.classList.remove('ativo');
          }
        });
      }

      animaScroll();
      window.addEventListener('scroll', animaScroll);
    }
  }

  // Melhoria para carregamento de imagens em dispositivos móveis
  function otimizarImagensMobile() {
    if (window.innerWidth < 768) {
      const imagensGrandes = document.querySelectorAll('.estetica-img img');
      imagensGrandes.forEach(img => {
        if (img.getAttribute('src').endsWith('.webp') || img.getAttribute('src').endsWith('.jpg')) {
          // Adiciona classe para otimização de carregamento
          img.loading = 'lazy';
          img.classList.add('img-mobile');
        }
      });
    }
  }

  // Inicialização de todas as funções
  setupMobileNavigation();
  initAnimaScroll();
  otimizarImagensMobile();

  // Listener para redimensionamento da janela
  window.addEventListener('resize', function() {
    otimizarImagensMobile();
  });
});
