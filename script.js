// Sticky Navigation Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#000';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(15, 15, 15, 0.9)';
        nav.style.boxShadow = 'none';
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar links සඳහා smooth scroll එකතු කිරීම
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// Navbar හි ඇති සියලුම ලින්ක්ස් සඳහා smooth scroll සක්‍රීය කිරීම
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // ලින්ක් එක ආරම්භ වන්නේ '#' ලකුණෙන් නම් පමණක් මෙය ක්‍රියාත්මක වේ
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault(); // සාමාන්‍ය පැනීම වළක්වයි
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});