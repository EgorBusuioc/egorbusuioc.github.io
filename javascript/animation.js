gsap.registerPlugin(ScrollTrigger, SplitText);

window.addEventListener('DOMContentLoaded', () => {

    gsap.set(['.navigation', '.hero-title'], { opacity: 0 });

    document.fonts.ready.then(() => {

        // ============================
        // CUSTOM CURSOR
        // ============================
        const cursor = document.querySelector('.custom-cursor');
        const hint = document.querySelector('.cursor-hint');

        if (cursor && hint && window.matchMedia('(pointer: fine)').matches) {
            let hoverTimer = null;
            let mouseX = 0;
            let mouseY = 0;
            let cursorX = 0;
            let cursorY = 0;
            const speed = 0.1;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                hint.classList.remove('visible');
                clearTimeout(hoverTimer);
                hoverTimer = setTimeout(() => hint.classList.add('visible'), 1500);
            });

            function animate() {
                cursorX += (mouseX - cursorX) * speed;
                cursorY += (mouseY - cursorY) * speed;

                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                hint.style.left = cursorX + 'px';
                hint.style.top = cursorY + 'px';

                requestAnimationFrame(animate);
            }
            animate();
        }

        // ============================
        // GSAP ANIMATIONS
        // ============================

        // NAVIGATION
        gsap.fromTo('.navigation',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power1.out' }
        );

        // HERO TITLE
        gsap.fromTo('.hero-title',
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1.2, delay: 0.4, ease: 'power2.out' }
        );

        // HERO TEXT (SplitText)
        const heroTextSplit = new SplitText('.hero-text', { type: 'words' });
        gsap.set(heroTextSplit.words, { opacity: 0 });

        gsap.to(heroTextSplit.words, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            delay: 1,
            duration: 0.6,
            ease: 'power2.out'
        });

        // PROFESSIONAL EXPERIENCE
        const profExp = new SplitText('.heading.prof', { type: 'words' });
        gsap.set(profExp.words, { opacity: 0 });

        gsap.to(profExp.words, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            delay: 1,
            duration: 1,
            ease: 'power2.out'
        });

        // HEADINGS
        gsap.utils.toArray('.heading').forEach((heading) => {
            const split = new SplitText(heading, { type: 'chars' });
            gsap.set(split.chars, { opacity: 0 });

            gsap.to(split.chars, {
                opacity: 1,
                y: 0,
                stagger: 0.03,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // ABOUT ME TEXT
        gsap.utils.toArray('.about-me-text').forEach((text) => {
            const split = new SplitText(text, { type: 'lines' });
            gsap.set(split.lines, { opacity: 0 });

            gsap.to(split.lines, {
                opacity: 1,
                y: 0,
                stagger: 0.03,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // EDUCATION CARDS
        gsap.utils.toArray('.education-card').forEach((card) => {
            gsap.fromTo(card,
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

    }); // END fonts.ready
});
