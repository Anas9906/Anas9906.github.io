// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Typing Effect for Hero Section
const typingText = document.getElementById('typingText');
if (typingText) {
  const phrases = [
    "ERP Specialist",
    "Data Analyst",
    "AI Automation Scripter",
    "Martial Arts Practitioner"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isWaiting = false;
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      isWaiting = true;
      typeSpeed = 2000; // Wait before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      isWaiting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500; // Wait before typing next word
    }
    
    setTimeout(type, typeSpeed);
  }
  
  // Start the typing effect
  setTimeout(type, 1000);
}

// Clone skills for infinite scroll effect
const skillsContainer = document.querySelector('.skills-container');
if (skillsContainer) {
  const clonedSkills = skillsContainer.innerHTML;
  skillsContainer.innerHTML += clonedSkills + clonedSkills; // Add twice for smooth infinite scroll
}

// Copy Email & Toast Notification
const contactBtn = document.getElementById('nav-contact');
if (contactBtn) {
  contactBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Stop raw mailto link from failing silently
    
    const email = "anasashraff90@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      // Create and show a beautiful toast notification
      let toast = document.getElementById('email-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'email-toast';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
      }
      toast.textContent = "Email copied to clipboard! (anasashraff90@gmail.com)";
      toast.classList.add('show');
      
      // Auto-hide after 3 seconds
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
      
      // Still try to open mailto in background
      window.location.href = `mailto:${email}`;
    });
  });
}

