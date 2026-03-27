// ============================================================
// CONTROLLER: HomeController.js
// Lógica de la página Home/Index.html
// ============================================================

import { renderHeader } from '../Views/Shared/_Header.js';
import { renderFooter } from '../Views/Shared/_Footer.js';
import { initScrollAnimations } from '../wwwroot/lib/Utils.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initScrollAnimations();
});
