// Progress bar
const progressBar = document.getElementById('progress-bar');
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100;
  progressBar.style.width = pct + '%';
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile drawer
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('drawerOverlay');
  const isOpen = menu.classList.toggle('open');
  overlay.classList.toggle('visible', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('visible');
  document.body.style.overflow = '';
}

// Typing animation
const roles = ['Software Engineer', 'Full Stack Developer', 'C++ Programmer', 'React Developer'];
let ri = 0, ci = 0, del = false;
const el = document.getElementById('typingText');
function type() {
  const cur = roles[ri];
  if (!del) {
    el.textContent = cur.slice(0, ++ci);
    if (ci === cur.length) { del = true; setTimeout(type, 2000); return; }
  } else {
    el.textContent = cur.slice(0, --ci);
    if (ci === 0) { del = false; ri = (ri + 1) % roles.length; setTimeout(type, 400); return; }
  }
  setTimeout(type, del ? 45 : 85);
}
type();

// Scroll reveal
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(r => revealObs.observe(r));

// EmailJS init
emailjs.init("Z5DdTINFYgzJf7hKj");

// Contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const msg = document.getElementById('formMsg');
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const text  = document.getElementById('fmsg').value.trim();

  if (!name || !email || !text) {
    msg.className = 'form-msg error';
    msg.textContent = 'Please fill in all fields.';
    return;
  }

  btn.textContent = 'Sending...';
  btn.disabled = true;

  emailjs.send("service_fevk93p", "template_xv5glar", {
    from_name:  name,
    from_email: email,
    message:    text
  })
  .then(() => {
    msg.className = 'form-msg success';
    msg.textContent = '✓ Message sent! I\'ll get back to you within 24 hours.';
    this.reset();
    setTimeout(() => { msg.className = 'form-msg'; msg.textContent = ''; }, 5000);
  })
  .catch(() => {
    msg.className = 'form-msg error';
    msg.textContent = '✗ Something went wrong. Please try again.';
  })
  .finally(() => {
    btn.textContent = 'Send Message →';
    btn.disabled = false;
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
  });
}, { passive: true });