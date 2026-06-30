/**
 * 🏗️ Core Utilities
 * Funções utilitárias globais para manipulação e performance.
 */

const Utils = {
  /**
   * Alterna uma classe em um elemento de forma segura.
   * @param {HTMLElement} el 
   * @param {string} className 
   * @param {boolean} [force] 
   */
  toggleClass: (el, className, force) => {
    if (!el) return;
    el.classList.toggle(className, force);
  },

  /**
   * Debounce simples para otimizar eventos de input/scroll.
   * @param {Function} func 
   * @param {number} [wait=250] 
   * @returns {Function}
   */
  debounce: (func, wait = 250) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
};

// Expõe globalmente para uso via <script> tags
window.Utils = Utils;
