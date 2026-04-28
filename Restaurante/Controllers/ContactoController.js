// ============================================================
// CONTROLLER: ContactoController.js
// Lógica de la página Contacto/Index.html
// ============================================================

import { renderHeader } from '../Views/Shared/_Header.js';
import { renderFooter } from '../Views/Shared/_Footer.js';
import { initScrollAnimations } from '../wwwroot/lib/Utils.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initScrollAnimations();
  // El formulario usa action="https://formsubmit.co/..."
  // por lo que no requiere lógica JS adicional aquí.
});
