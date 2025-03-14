// JavaScript Mejorado
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');
    const links = document.querySelectorAll('.header__link');
    const body = document.body;
  
    // Menú Hamburguesa Animado
    const toggleMenu = () => {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
      body.classList.toggle('menu-open');
    };
  
    toggle.addEventListener('click', toggleMenu);
  
    // Cerrar menú con Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        toggleMenu();
      }
    });
  
    // Smooth Scroll Mejorado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Efecto de Scroll en Header
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      const header = document.querySelector('.header');
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
      lastScroll = currentScroll;
      
      header.style.background = currentScroll > 50 
        ? 'rgba(255, 255, 255, 0.98)'
        : 'rgba(255, 255, 255, 0.95)';
    });
  
    // Mejor Gestión de Eventos
    links.forEach(link => link.addEventListener('click', toggleMenu));
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  });






































  // Añadir al JavaScript existente
const sobreMiSection = document.querySelector('#sobre-mi');

// Intersection Observer para animación de entrada
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

observer.observe(sobreMiSection);

// Efecto hover mejorado para el botón
document.querySelector('#sobre-mi a[download]').addEventListener('mousemove', (e) => {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  btn.style.setProperty('--mouse-x', `${x}px`);
  btn.style.setProperty('--mouse-y', `${y}px`);
});


































// Añadir al JavaScript existente
const habilidadesSection = document.querySelector('#habilidades');

// Animación de entrada para habilidades
const habilidadesObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

habilidadesObserver.observe(habilidadesSection);

// Efecto hover dinámico
document.querySelectorAll('#habilidades li').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    item.style.setProperty('--mouse-x', `${x}px`);
    item.style.setProperty('--mouse-y', `${y}px`);
  });
});



























// Añadir al JavaScript existente
const proyectosSection = document.querySelector('#proyectos');

// Animación de entrada para proyectos
const proyectosObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

proyectosObserver.observe(proyectosSection);

// Efecto hover dinámico para tarjetas
document.querySelectorAll('#proyectos article').forEach(project => {
  project.addEventListener('mousemove', (e) => {
    const rect = project.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    project.style.setProperty('--mouse-x', `${x}px`);
    project.style.setProperty('--mouse-y', `${y}px`);
  });
});