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































// Añadir al JavaScript existente
const certificacionesSection = document.querySelector('#certificaciones');

// Animación de entrada para certificaciones
const certificacionesObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

certificacionesObserver.observe(certificacionesSection);

// Efecto hover dinámico
document.querySelectorAll('#certificaciones li').forEach(cert => {
  cert.addEventListener('mousemove', (e) => {
    const rect = cert.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cert.style.setProperty('--mouse-x', `${x}px`);
    cert.style.setProperty('--mouse-y', `${y}px`);
  });
});





























// Añadir al JavaScript existente
const experienciaSection = document.querySelector('#experiencia');

// Animación de entrada para experiencia
const experienciaObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

experienciaObserver.observe(experienciaSection);

// Efecto de timeline
document.querySelectorAll('#experiencia article').forEach((exp, index) => {
  exp.style.transitionDelay = `${index * 0.1}s`;
});








































// Añadir al JavaScript existente
const contactoSection = document.querySelector('#contacto');

// Animación de entrada para contacto
const contactoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

contactoObserver.observe(contactoSection);

// Validación de formulario mejorada
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const submitBtn = e.target.querySelector('button[type="submit"]');
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Enviando... <div class="spinner"></div>';
  
  // Simular envío (reemplazar con tu API)
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Mensaje Enviado ✓';
    e.target.reset();
    
    setTimeout(() => {
      submitBtn.textContent = 'Enviar Mensaje';
    }, 2000);
  }, 1500);
});

// Efecto de carga para el botón
const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.6s linear infinite;
}
`;
document.head.appendChild(spinnerStyle);































// Añadir al JS existente
document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateX(5px)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateX(0)';
    });
  });