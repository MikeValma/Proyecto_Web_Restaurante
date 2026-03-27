// ============================================================
// VIEW SHARED: _Header.js
// Genera e inyecta el header/nav en todas las páginas.
// Detecta la página activa automáticamente.
// ============================================================

import { horarioRestaurante } from '../../Models/HorarioModel.js';

/**
 * Crea el componente Header y lo inyecta en #header-root.
 * Detecta la página actual y marca el enlace activo.
 */
export function renderHeader() {
  const root = document.getElementById('header-root');
  if (!root) return;

  // Detectar la página actual por el nombre del archivo
  const currentPage = window.location.pathname.split('/').pop() || 'Index.html';

  const navLinks = [
    { href: '../Home/Index.html',        label: 'Inicio'        },
    { href: '../Menu/Index.html',         label: 'Menú'          },
    { href: '../QuienesSomos/Index.html', label: 'Sobre Nosotros' },
    { href: '../Contacto/Index.html',     label: 'Contactanos'   }
  ];

  const buildNavLinks = (mobile = false) =>
    navLinks.map(link => {
      const isActive = currentPage === link.href.split('/').pop();
      if (mobile) {
        return `<a href="${link.href}" class="${isActive ? 'text-primary' : 'hover:text-primary'} transition-colors">${link.label}</a>`;
      }
      return `<a href="${link.href}" class="${isActive ? 'text-primary' : 'hover:text-primary'} transition-colors hover:-translate-y-0.5 transform duration-300">${link.label}</a>`;
    }).join('');

  root.innerHTML = `
    <header class="flex justify-between items-center px-6 md:px-10 py-4 bg-white/40 backdrop-blur-2xl backdrop-saturate-[1.8] sticky top-0 z-50 shrink-0 border-b border-white/50 shadow-sm">
      <!-- Logo -->
      <a href="../Home/Index.html" class="flex items-center gap-3 hover:opacity-80 transition z-50">
        <svg class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
        </svg>
        <span class="font-serif font-bold text-xl tracking-[0.2em] uppercase text-dark">Restaurante</span>
      </a>

      <!-- Navegación Desktop -->
      <nav class="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-dark">
        ${buildNavLinks(false)}
        <a href="../Reservas/Index.html" class="bg-dark text-white px-6 py-3 rounded-full hover:bg-primary transition-colors duration-300">Haz Reserva</a>
      </nav>

      <!-- Botón Menú Hamburguesa Mobile -->
      <button id="header-menu-btn" class="md:hidden flex flex-col gap-1.5 z-50 p-2 group" aria-label="Abrir menú">
        <span class="block w-6 h-0.5 bg-dark transition-transform duration-300 origin-center group-hover:bg-primary" id="h-line1"></span>
        <span class="block w-6 h-0.5 bg-dark transition-opacity duration-300 group-hover:bg-primary" id="h-line2"></span>
        <span class="block w-6 h-0.5 bg-dark transition-transform duration-300 origin-center group-hover:bg-primary" id="h-line3"></span>
      </button>
    </header>

    <!-- Overlay Menú Mobile -->
    <div id="header-mobile-menu" class="fixed inset-0 bg-secondary/80 backdrop-blur-2xl backdrop-saturate-[1.8] flex-col justify-start pt-32 items-center gap-8 text-base font-serif uppercase tracking-widest hidden opacity-0 transition-opacity duration-300 z-40">
      ${buildNavLinks(true)}
      <a href="../Reservas/Index.html" class="bg-primary text-white font-sans text-sm font-bold tracking-widest px-8 py-4 rounded-full hover:bg-dark transition-colors mt-4">Haz Reserva</a>
    </div>
  `;

  // --- Lógica del menú hamburguesa ---
  const menuBtn    = document.getElementById('header-menu-btn');
  const mobileMenu = document.getElementById('header-mobile-menu');
  const line1      = document.getElementById('h-line1');
  const line2      = document.getElementById('h-line2');
  const line3      = document.getElementById('h-line3');
  let isMenuOpen = false;

  menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
      line1.classList.add('translate-y-2', 'rotate-45');
      line2.classList.add('opacity-0');
      line3.classList.add('-translate-y-2', '-rotate-45');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('opacity-0');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      }, 300);
      line1.classList.remove('translate-y-2', 'rotate-45');
      line2.classList.remove('opacity-0');
      line3.classList.remove('-translate-y-2', '-rotate-45');
      document.body.style.overflow = '';
    }
  });
}
