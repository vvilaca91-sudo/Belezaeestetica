// BOTÕES
const botoes = document.querySelectorAll(".btn-servicos");

// MODAIS
const modais = document.querySelectorAll(".modal");

// ABRIR MODAL
botoes.forEach(botao => {
botao.addEventListener("click", () => {
const id = botao.dataset.modal;
const modal = document.getElementById("modal-" + id);

if (modal) {
modal.style.display = "flex";
}
});
});

// FECHAR AO CLICAR NO X
document.querySelectorAll(".close").forEach(btn => {
btn.addEventListener("click", () => {
btn.closest(".modal").style.display = "none";
});
});

// FECHAR AO CLICAR FORA
modais.forEach(modal => {
modal.addEventListener("click", (e) => {
if (e.target === modal) {
modal.style.display = "none";
}
});
});


const imagens = document.querySelectorAll(".galeria-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");
const nextBtn = document.querySelector(".lightbox-next");
const prevBtn = document.querySelector(".lightbox-prev");

let currentIndex = 0;

if (imagens.length && lightbox && lightboxImg && closeBtn && nextBtn && prevBtn) {
imagens.forEach((img, index) => {
img.addEventListener("click", () => {
currentIndex = index;
showImage();
lightbox.classList.add("active");
document.body.classList.add("modal-open");
});
});

function showImage() {
lightboxImg.src = imagens[currentIndex].src;
lightboxImg.alt = imagens[currentIndex].alt;
}

nextBtn.addEventListener("click", (e) => {
e.stopPropagation();
currentIndex = (currentIndex + 1) % imagens.length;
showImage();
});

prevBtn.addEventListener("click", (e) => {
e.stopPropagation();
currentIndex = (currentIndex - 1 + imagens.length) % imagens.length;
showImage();
});

closeBtn.addEventListener("click", (e) => {
e.stopPropagation();
lightbox.classList.remove("active");
document.body.classList.remove("modal-open");
});

lightbox.addEventListener("click", (e) => {
if (e.target === lightbox) {
lightbox.classList.remove("active");
document.body.classList.remove("modal-open");
}
});

document.addEventListener("keydown", (e) => {
if (!lightbox.classList.contains("active")) return;

if (e.key === "ArrowRight") {
currentIndex = (currentIndex + 1) % imagens.length;
showImage();
}

if (e.key === "ArrowLeft") {
currentIndex = (currentIndex - 1 + imagens.length) % imagens.length;
showImage();
}

if (e.key === "Escape") {
lightbox.classList.remove("active");
document.body.classList.remove("modal-open");
}
});
}
