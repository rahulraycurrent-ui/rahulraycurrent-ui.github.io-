// typing effect
const text = "Rahul Ray";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// scroll button
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// scroll animation
const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// particle background
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#38bdf8";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  particles.forEach(p => {
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(draw, 30);

// auto year
document.getElementById("year").innerText =
  new Date().getFullYear();
