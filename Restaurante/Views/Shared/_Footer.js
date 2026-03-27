// ============================================================
// VIEW SHARED: _Footer.js
// Genera e inyecta el footer en todas las páginas.
// Los datos de horarios vienen del Model HorarioModel.js
// ============================================================

import { horarioRestaurante } from '../../Models/HorarioModel.js';

/**
 * Crea el componente Footer y lo inyecta en #footer-root.
 */
export function renderFooter() {
  const root = document.getElementById('footer-root');
  if (!root) return;

  const horariosHTML = horarioRestaurante.diasSemana.map(({ dias, horas }) => {
    if (!horas) {
      return `<li class="flex justify-between text-primary mt-1"><span>${dias}</span><span>Cerrado</span></li>`;
    }
    return `<li class="flex justify-between border-b border-gray-800/50 pb-2"><span>${dias}</span><span class="text-secondary">${horas}</span></li>`;
  }).join('');

  root.innerHTML = `
    <footer class="bg-dark text-secondary py-16 px-6 md:px-16 lg:px-24 shrink-0 transition-colors duration-500">
      <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        <!-- Columna 1: Logo + descripción -->
        <div class="flex flex-col gap-4">
          <a href="../Home/Index.html" class="flex items-center gap-3 hover:opacity-80 transition">
            <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
            <h4 class="font-serif text-2xl font-bold tracking-widest uppercase text-primary">Restaurante</h4>
          </a>
          <p class="text-sm font-light text-gray-400 leading-[1.8] max-w-xs mt-2">
            Una experiencia gastronómica inolvidable donde la alta cocina se encuentra con la elegancia y la tradición.
          </p>
          <div class="flex gap-4 mt-4">
            <!-- Email -->
            <svg class="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <!-- Calendario -->
            <svg class="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <!-- X -->
            <svg class="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </div>
        </div>

        <!-- Columna 2: Contacto -->
        <div class="flex flex-col gap-6">
          <h4 class="font-serif text-lg font-bold tracking-widest uppercase text-white">Contacto</h4>
          <ul class="text-sm font-light text-gray-400 flex flex-col gap-3">
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
              Balmaseda, Bizkaia
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +34 900 123 456
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              reservas@restaurante.com
            </li>
          </ul>
        </div>

        <!-- Columna 3: Horarios (desde el model) -->
        <div class="flex flex-col gap-6">
          <h4 class="font-serif text-lg font-bold tracking-widest uppercase text-white">Horarios</h4>
          <ul class="text-sm font-light text-gray-400 flex flex-col gap-3">
            ${horariosHTML}
          </ul>
        </div>

      </div>
      <div class="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 font-light tracking-widest uppercase">
        &copy; 2026 Restaurante Elegance. Todos los derechos reservados.
      </div>
    </footer>
  `;
}
