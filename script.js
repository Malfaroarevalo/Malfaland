// Dark mode toggle
function toggleDarkMode() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Back to top button
function handleScroll() {
  const backToTop = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

// Form handling with loading spinner
function handleFormSubmit(event) {
  const form = event.target;
  const spinner = form.querySelector('.spinner');
  const submitBtn = form.querySelector('button[type="submit"]');
  
  spinner.classList.add('active');
  submitBtn.disabled = true;
  
  // Re-enable after submission (you might want to adjust this based on your actual form handling)
  setTimeout(() => {
    spinner.classList.remove('active');
    submitBtn.disabled = false;
  }, 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set initial theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  
  // Add scroll listener
  window.addEventListener('scroll', handleScroll);
  
  // Add form listeners
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
  
  // Initialize lazy loading
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});