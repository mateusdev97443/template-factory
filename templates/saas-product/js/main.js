// main.js - Vanilla JS (Strict Mode)
(function() {
    'use strict';

    /**
     * =========================================
     * HAMBURGER MENU TOGGLE (A11y)
     * =========================================
     */
    const initHamburger = () => {
        const hamburger = document.querySelector('.hamburger');
        const navList = document.querySelector('.saas-nav__list');

        if (!hamburger || !navList) return;

        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-controls', 'primary-navigation');
        navList.id = 'primary-navigation';

        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!isExpanded));
            navList.classList.toggle('saas-nav__list--open');
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
                hamburger.setAttribute('aria-expanded', 'false');
                navList.classList.remove('saas-nav__list--open');
                hamburger.focus();
            }
        });
    };

    /**
     * =========================================
     * FAQ ACCORDION (Dynamic Height)
     * =========================================
     */
    const initFaq = () => {
        const faqItems = document.querySelectorAll('.faq__item');
        if (faqItems.length === 0) return;

        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');
            const answer = item.querySelector('.faq__answer');

            if (!question || !answer) return;

            // Initial A11y setup
            const id = answer.id || `faq-answer-${Math.random().toString(36).substr(2, 9)}`;
            answer.id = id;
            question.setAttribute('aria-controls', id);
            question.setAttribute('aria-expanded', 'false');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Accordion behavior: close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq__answer');
                        const otherQuestion = otherItem.querySelector('.faq__question');
                        
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = 0;
                        }
                        if (otherQuestion) {
                            otherQuestion.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                // Toggle current item
                if (isActive) {
                    // FECHAR
                    item.classList.remove('active');
                    answer.style.maxHeight = 0;
                    question.setAttribute('aria-expanded', 'false');
                } else {
                    // ABRIR
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Recalculate max-height on window resize to prevent clipping
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                faqItems.forEach(item => {
                    if (item.classList.contains('active')) {
                        const answer = item.querySelector('.faq__answer');
                        if (answer) {
                            answer.style.maxHeight = answer.scrollHeight + "px";
                        }
                    }
                });
            }, 150);
        });
    };

    // DOMContentLoaded Init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initHamburger();
            initFaq();
        });
    } else {
        initHamburger();
        initFaq();
    }
})();
