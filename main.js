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


  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');
    const body = document.body;

    if (!toggle || !menu) {
      console.error("❌ Error: No se encontró el botón de hamburguesa o el menú.");
      return;
    }

    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
      body.classList.toggle('menu-open');
      console.log("📌 Menú activado:", menu.classList.contains('active'));
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

































(() => {
  'use strict';

  // Animar la sección de habilidades al entrar en pantalla
  const habilidadesSection = document.querySelector('#habilidades');
  if (habilidadesSection) {
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Deja de observar una vez animada
        }
      });
    }, { threshold: 0.15 });
    sectionObserver.observe(habilidadesSection);
  }

  // Función para inicializar el efecto de hover dinámico
  function initDynamicHoverEffect(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      let animationFrameId = null;

      const updateMousePosition = (x, y) => {
        // Actualiza las variables CSS personalizadas que puedes usar en tus estilos
        elem.style.setProperty('--mouse-x', `${x}px`);
        elem.style.setProperty('--mouse-y', `${y}px`);
      };

      const pointerMoveHandler = (e) => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        animationFrameId = requestAnimationFrame(() => updateMousePosition(x, y));
      };

      const pointerEnterHandler = () => {
        elem.classList.add('hover-active');
      };

      const pointerLeaveHandler = () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        elem.classList.remove('hover-active');
        // Reinicia las variables a valores centrales; ajústalo según el efecto deseado
        elem.style.setProperty('--mouse-x', '50%');
        elem.style.setProperty('--mouse-y', '50%');
      };

      // Usa PointerEvent si está disponible, de lo contrario, recurre a mouse events
      if (window.PointerEvent) {
        elem.addEventListener('pointerenter', pointerEnterHandler);
        elem.addEventListener('pointermove', pointerMoveHandler);
        elem.addEventListener('pointerleave', pointerLeaveHandler);
      } else {
        elem.addEventListener('mouseenter', pointerEnterHandler);
        elem.addEventListener('mousemove', pointerMoveHandler);
        elem.addEventListener('mouseleave', pointerLeaveHandler);
      }
    });
  }

  // Inicializa el efecto dinámico en elementos con la clase .skill-card o <li> dentro de #habilidades
  initDynamicHoverEffect('#habilidades .skill-card, #habilidades li');

  // Efecto de "pulso" al hacer clic: añade temporalmente una clase que puedes animar en CSS
  function initClickPulseEffect(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.addEventListener('click', () => {
        elem.classList.add('click-pulse');
        setTimeout(() => {
          elem.classList.remove('click-pulse');
        }, 300); // Duración de la animación en milisegundos
      });
    });
  }

  initClickPulseEffect('#habilidades .skill-card, #habilidades li');

})();























(() => {
  'use strict';

  /* ====================================
     Animación de Secciones
     Se animan al aparecer en pantalla (threshold: 15%)
  ==================================== */
  const sections = document.querySelectorAll(
    '.projects-section, #certificaciones, #experiencia'
  );

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optimiza dejando de observar una vez animada
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => sectionObserver.observe(section));

  /* ====================================
     Efecto Hover Dinámico en Tarjetas de Proyectos
     Se utiliza pointermove para soporte en todos los dispositivos
  ==================================== */
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    let animationFrameId = null;

    const updateCardEffect = (x, y) => {
      // Actualiza las variables CSS personalizadas para efectos dinámicos (puedes usarlas en tus estilos)
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const handlePointerMove = (e) => {
      // Cancelar cualquier actualización pendiente
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      const rect = card.getBoundingClientRect();
      const posX = e.clientX - rect.left;
      const posY = e.clientY - rect.top;
      animationFrameId = requestAnimationFrame(() => updateCardEffect(posX, posY));
    };

    const handlePointerLeave = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      // Restablece la posición al centro (puedes ajustar según efecto deseado)
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    };

    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', handlePointerLeave);
  });

  /* ====================================
     Efectos Opcionales para Certificaciones y Experiencia
     Se agrega una clase 'hovered' en pointerenter/leave para animaciones extra definidas en CSS.
  ==================================== */
  const addHoverEffects = (selector) => {
    document.querySelectorAll(selector).forEach(element => {
      element.addEventListener('pointerenter', () => element.classList.add('hovered'));
      element.addEventListener('pointerleave', () => element.classList.remove('hovered'));
    });
  };

  addHoverEffects('#certificaciones li');
  addHoverEffects('#experiencia article');

})();































(() => {
  'use strict';

  /**
   * Observes a section and adds a class when it becomes visible.
   *
   * @param {Element} section - The DOM element to observe.
   * @param {string} [visibleClass='visible'] - The class to add when visible.
   * @param {number} [threshold=0.15] - The visibility threshold.
   */
  const initSectionObserver = (section, visibleClass = 'visible', threshold = 0.15) => {
    if (!section) return;
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          obs.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, { threshold });
    observer.observe(section);
  };

  // Initialize observer for the certifications section
  const certSection = document.querySelector('#certificaciones');
  initSectionObserver(certSection);

  /**
   * Adds a dynamic hover effect to elements by updating CSS variables based on pointer position.
   * Also adds a "pulse" effect on pointer down/up.
   *
   * @param {NodeListOf<Element>} elements - Elements to attach the hover effects.
   */
  const initDynamicHoverEffect = (elements) => {
    elements.forEach(element => {
      let animationFrameId = null;

      const updatePosition = (x, y) => {
        element.style.setProperty('--mouse-x', `${x}px`);
        element.style.setProperty('--mouse-y', `${y}px`);
      };

      const pointerMoveHandler = (e) => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        animationFrameId = requestAnimationFrame(() => updatePosition(x, y));
      };

      const pointerLeaveHandler = () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        // Reset to center
        element.style.setProperty('--mouse-x', '50%');
        element.style.setProperty('--mouse-y', '50%');
      };

      const pointerDownHandler = () => {
        element.classList.add('active');
      };

      const pointerUpHandler = () => {
        element.classList.remove('active');
      };

      // Use pointer events for unified touch/mouse support
      element.addEventListener('pointermove', pointerMoveHandler, { passive: true });
      element.addEventListener('pointerleave', pointerLeaveHandler, { passive: true });
      element.addEventListener('pointerdown', pointerDownHandler, { passive: true });
      element.addEventListener('pointerup', pointerUpHandler, { passive: true });
      element.addEventListener('pointercancel', pointerUpHandler, { passive: true });
    });
  };

  // Select certification cards for dynamic hover effect
  const certCards = document.querySelectorAll('#certificaciones .certification-card');
  initDynamicHoverEffect(certCards);
})();





























// Añadir al JavaScript existente
const experienciaSection = document.querySelector('#experiencia');
const experienciaCards = document.querySelectorAll('.experiencia-card');

// Animación de entrada con Intersection Observer
const experienciaObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.animation = `fadeInUp 0.6s ease-out ${index * 0.15}s both`;
      observer.unobserve(entry.target); // Detenemos la observación para no reanimar
    }
  });
}, { threshold: 0.2 });

experienciaCards.forEach(card => experienciaObserver.observe(card));

// Definimos la animación CSS en JavaScript (en caso de que quieras inline)
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);








































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



























  document.addEventListener("DOMContentLoaded", () => {
    // Botón de menú en móviles
    const menuToggle = document.querySelector(".header__toggle");
    const menu = document.querySelector(".header__menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    // Suavizar el desplazamiento al hacer clic en los enlaces del menú
    document.querySelectorAll(".header__link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }

            // Ocultar menú en móviles después de hacer clic
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
            }
        });
    });
});
