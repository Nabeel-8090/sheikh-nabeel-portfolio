const progressBar = document.getElementById('progress');
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100;
    progressBar.style.width = pct + '%';
    nav.classList.toggle('scrolled', window.scrollY > 40);
});
function toggleMenu() { document.getElementById('mobileMenu').classList.toggle('open') }
function closeMenu() { document.getElementById('mobileMenu').classList.remove('open') }

const roles = ['Software Engineer', 'Full Stack Developer'];
let ri = 0, ci = 0, del = false;
const el = document.getElementById('typingText');
function type() {
    const cur = roles[ri];
    if (!del) { el.textContent = cur.slice(0, ++ci); if (ci === cur.length) { del = true; setTimeout(type, 1800); return } }
    else { el.textContent = cur.slice(0, --ci); if (ci === 0) { del = false; ri = (ri + 1) % roles.length; setTimeout(type, 300); return } }
    setTimeout(type, del ? 50 : 90);
}
type();

const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }) }, { threshold: 0.1 });
reveals.forEach(r => obs.observe(r));

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const msg = document.getElementById('formMsg');
    const name = document.getElementById('fname').value;
    const email = document.getElementById('femail').value;
    const text = document.getElementById('fmsg').value;
    if (!name || !email || !text) { msg.className = 'form-msg error'; msg.textContent = 'Please fill in all fields.'; return }
    btn.textContent = 'Sending...'; btn.disabled = true;
    setTimeout(() => {
        btn.textContent = 'Send Message →'; btn.disabled = false;
        msg.className = 'form-msg success';
        msg.textContent = '✓ Message sent! I\'ll get back to you within 24 hours.';
        this.reset();
        setTimeout(() => { msg.className = 'form-msg' }, 4000);
    }, 1500);
});