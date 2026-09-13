const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

const modal = document.querySelector('.modal');
const modalImg = modal?.querySelector('img');
const modalClose = modal?.querySelector('.modal-close');

document.querySelectorAll('[data-zoom]').forEach(img => {
  img.addEventListener('click', () => {
    if (!modal || !modalImg) return;
    modalImg.src = img.src;
    modalImg.alt = img.alt || 'Yoskana treatment result';
    modal.classList.add('open');
  });
});

function closeModal() { modal?.classList.remove('open'); }
modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const form = document.querySelector('#appointment-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.querySelector('#form-message');
  if (message) message.textContent = 'Thank you! This demo form is ready to connect to your email, WhatsApp, or booking system.';
  form.reset();
});
/* =========================================================
   RESULTS REVIEW CAROUSEL
========================================================= */

const reviewSlider =
    document.querySelector('.reviews-slider');

const reviewPrev =
    document.querySelector('.review-arrow-left');

const reviewNext =
    document.querySelector('.review-arrow-right');


if (
    reviewSlider &&
    reviewPrev &&
    reviewNext
) {

    function getReviewScrollAmount() {

        const card =
            reviewSlider.querySelector(
                '.review-card'
            );

        if (!card) {
            return 0;
        }

        const sliderStyle =
            window.getComputedStyle(
                reviewSlider
            );

        const gap =
            parseFloat(
                sliderStyle.gap
            ) || 0;

        return (
            card.offsetWidth +
            gap
        );
    }


    reviewNext.addEventListener(
        'click',
        () => {

            reviewSlider.scrollBy({
                left:
                    getReviewScrollAmount(),
                behavior:
                    'smooth'
            });

        }
    );


    reviewPrev.addEventListener(
        'click',
        () => {

            reviewSlider.scrollBy({
                left:
                    -getReviewScrollAmount(),
                behavior:
                    'smooth'
            });

        }
    );

}