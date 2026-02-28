document.addEventListener('DOMContentLoaded', () => {

    // --- FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(i => i.classList.remove('active'));

            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // --- Testimonials Carousel ---
    const track = document.querySelector('.testimonial-track');
    const dots = document.querySelectorAll('.nav-dot');
    let currentIdx = 0;

    const moveCarousel = (index) => {
        if (!track || dots.length === 0) return;
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');
        currentIdx = index;
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveCarousel(index);
        });
    });

    // Auto rotate carousel
    setInterval(() => {
        if (dots.length > 0) {
            currentIdx = (currentIdx + 1) % dots.length;
            moveCarousel(currentIdx);
        }
    }, 5000);

    // --- Countdown Timer ---
    const timerDisplay = document.getElementById('timer');
    const updateTimer = () => {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const diff = endOfDay - now;
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        if (timerDisplay) {
            timerDisplay.textContent = `OFERTA VÁLIDA POR LAS PRÓXIMAS ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
    };

    setInterval(updateTimer, 1000);
    updateTimer();

    // --- Smooth Anchor Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });
});
