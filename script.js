// CTA Button Click Handler
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#sobre').scrollIntoView({ behavior: 'smooth' });
});

// Form Submit Handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
    this.reset();
});

// Mobile Menu Toggle (para versões futuras com menu mobile)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
});