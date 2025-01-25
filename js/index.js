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

document.querySelectorAll(".livro").forEach((button) => {
  button.addEventListener("click", () => {
    const livro = button.dataset.livro;
    const capitulosContainer = document.getElementById(`${livro}-capitulos`);

    // Remove a classe 'active' de outros livros
    document.querySelectorAll(".capitulos").forEach((container) => {
      if (container !== capitulosContainer) {
        container.classList.remove("active");
      }
    });

    // Adiciona ou remove a classe 'active' no container atual
    if (capitulosContainer.classList.contains("active")) {
      capitulosContainer.classList.remove("active");
    } else {
      capitulosContainer.classList.add("active");

      // Se os capítulos ainda não foram gerados, cria dinamicamente
      if (capitulosContainer.children.length === 0) {
        const numCapitulos = getNumeroCapitulos(livro); // Função para obter o número de capítulos
        for (let i = 1; i <= numCapitulos; i++) {
          const chapterButton = document.createElement("button");
          chapterButton.textContent = i;
          capitulosContainer.appendChild(chapterButton);
        }
      }
    }
  });
});

// Função para retornar o número de capítulos por livro
function getNumeroCapitulos(livro) {
  const capitulosPorLivro = {
    Genesis: 50,
    Exodus: 40,
    Leviticus: 27,
    // Adicione os demais livros aqui
  };
  return capitulosPorLivro[livro] || 0;
}
