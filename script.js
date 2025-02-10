const image = document.getElementById('image');

image.addEventListener('mousemove', tiltEffect);
image.addEventListener('touchmove', tiltEffect);
image.addEventListener('mouseleave', resetTilt);
image.addEventListener('touchend', resetTilt);

function tiltEffect(e) {
    const { left, top, width, height } = image.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    const rotateX = y * 20;
    const rotateY = x * 20;

    image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
}

function resetTilt() {
    image.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
}


const words = ["Web Developer", "Programmer", "Web Designer", "Chess Player", "Script Writer", "Graphic Designer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const textElement = document.getElementById("text");
        
        function typeEffect() {
            const currentWord = words[wordIndex];
            const displayText = isDeleting 
                ? currentWord.substring(0, charIndex - 1) 
                : currentWord.substring(0, charIndex + 1);
            
            textElement.textContent = displayText;
            
            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
            
            charIndex += isDeleting ? -1 : 1;
            setTimeout(typeEffect, isDeleting ? 100 : 200);
        }
        
        typeEffect();



        document.querySelector('.floating-nav').addEventListener('mousemove', scaleIcons);
        document.querySelector('.floating-nav').addEventListener('touchmove', scaleIcons);
        document.querySelector('.floating-nav').addEventListener('mouseleave', resetScale);
        document.querySelector('.floating-nav').addEventListener('touchend', resetScale);
        
        function scaleIcons(e) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
            document.querySelectorAll('.floating-nav a').forEach(link => {
                const rect = link.getBoundingClientRect();
                const linkX = rect.left + rect.width / 2;
                const linkY = rect.top + rect.height / 2;
        
                const distance = Math.sqrt((clientX - linkX) ** 2 + (clientY - linkY) ** 2);
                const scale = Math.max(1, 2 - distance / 100);
        
                link.style.transform = `scale(${scale})`;
            });
        }
        
        function resetScale() {
            document.querySelectorAll('.floating-nav a').forEach(link => {
                link.style.transform = 'scale(1)';
            });
        }
        

// document.body.addEventListener("mousemove", (e) => {
//     document.body.style.setProperty("--x", `${e.clientX}px`);
//     document.body.style.setProperty("--y", `${e.clientY}px`);
// });







gsap.from(".home-img img", { duration: 1.2, x: 150, opacity: 0, ease: "power3.out" });

gsap.from(".home-content h1", { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });

gsap.from(".typing-container", { duration: 1, scale: 0.8, opacity: 0, ease: "elastic.out(1, 0.5)", delay: 1 });



gsap.registerPlugin(ScrollTrigger);

function animateOnView(targets, animation) {
    gsap.from(targets, {
        scrollTrigger: {
            trigger: targets,
            start: "top 80%", // Adjust if needed
            once: true, // Ensures the animation happens only once
        },
        ...animation
    });
}
animateOnView(".social-icons", { scale: 0.5, opacity: 0, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.4 });
animateOnView(".btn", { scale: 0.3, opacity: 0, duration: 0.3, ease: "elastic.in(1, 0.5)", delay: 0.4 });
















ScrollReveal().reveal('.image-container', {
    duration: 1000, 
    origin: 'bottom', 
    distance: '50px', 
    delay: 200, 
    easing: 'ease-in-out',
    reset: true
  });
  

  ScrollReveal().reveal('.image-container', {
    duration: 1200, 
    origin: 'left', 
    distance: '80px', 
    delay: 200, 
    easing: 'ease-in-out',
    reset: true
  });
  
  ScrollReveal().reveal('.image-container', {
    duration: 1000, 
    scale: 0.85, 
    delay: 200, 
    easing: 'ease-in-out',
    reset: true
  });
  

  



  
  ScrollReveal().reveal('.about-content p', {
    duration: 1000,
    origin: 'right',
    distance: '50px',
    delay: 300,
    easing: 'ease-in-out',
    reset: true
  });
  
  ScrollReveal().reveal('.about-content .about-icons', {
    duration: 1200,
    origin: 'bottom',
    distance: '70px',
    delay: 400,
    easing: 'ease-in-out',
    reset: true
  });
  

  ScrollReveal().reveal('.detail-item', {
    duration: 900,
    origin: 'left',
    distance: '50px',
    delay: 300,
    easing: 'ease-in-out',
    interval: 150,
    reset: true
});



ScrollReveal().reveal('.skills__box', {
    duration: 1000,
    origin: 'bottom',
    distance: '70px',
    delay: 300,
    easing: 'ease-in-out',
    reset: true
  });
  


    ScrollReveal().reveal('.projects-section h2', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        delay: 200,
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.projects-section p', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        delay: 300,
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.project-card', {
        duration: 900,
        origin: 'left',
        distance: '50px',
        delay: 200,
        easing: 'ease-in-out',
        interval: 150,
        reset: true
    });

    ScrollReveal().reveal('.sb3', {
        duration: 900,
        origin: 'left',
        distance: '50px',
        delay: 200,
        easing: 'ease-in-out',
        interval: 150,
        reset: true
    });


    ScrollReveal().reveal('.footer', {
        duration: 700,
        origin: 'bottom',  // Comes from bottom
        distance: '50px',   // Moves up slightly
        delay: 100,
        easing: 'ease-in-out',
        interval: 100,
        reset: true,
        scale: 0.8 // Starts smaller and scales up
    });
    