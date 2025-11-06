// ===== Background Slider =====
const backgroundImages = [
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg"
];
let bgIndex = 0;
const bgSlider = document.getElementById("background-slider");

function changeBackground() {
  bgSlider.style.backgroundImage = `url('${backgroundImages[bgIndex]}')`;
  bgIndex = (bgIndex + 1) % backgroundImages.length;
}
changeBackground();
setInterval(changeBackground, 4000);

// ===== Navigation & Sections =====
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('.content-section');
sections.forEach(sec => sec.style.display = 'none');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    sections.forEach(sec => sec.style.display = 'none');
    targetSection.style.display = 'block';

    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Project Image Sliders =====
document.querySelectorAll('.project-slider').forEach(slider => {
  const images = slider.querySelectorAll('img');
  let index = 0;
  images[index].classList.add('active');

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000);
});
