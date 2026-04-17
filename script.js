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
const textArray = ["Graphic Designer", "Visual Artist", "Creative Thinker"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // වචනයක් ටයිප් වී තිබෙන කාලය
let textArrayIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typingText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (textArray.length) setTimeout(type, newTextDelay);
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