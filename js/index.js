// Seleciona todos os links do menu de navegação
const navLinks = document.querySelectorAll(".navbar a");

// Adiciona o evento de clique a cada link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link

    // Remove a classe 'active' de todas as seções
    const sections = document.querySelectorAll(".container > section");
    sections.forEach((section) => {
      // Inicia o fade-out
      section.style.opacity = "0";
      setTimeout(() => {
        section.classList.remove("active");
        section.style.display = "none";
      }, 500); // Aguarda o término da transição (0.5s)
    });

    // Identifica e ativa a seção correspondente
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      setTimeout(() => {
        targetSection.style.display = "block";
        targetSection.style.opacity = "1"; // Inicia o fade-in
        targetSection.classList.add("active");
      }, 500); // Aguarda o fade-out das outras seções
    }
  });
});
