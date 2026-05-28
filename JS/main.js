document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // Verifica a memória local do navegador
    let savedTheme = localStorage.getItem("theme");

    // Se não tiver nada salvo, define o "dark" (escuro) como o padrão inicial
    if (!savedTheme) {
        savedTheme = "dark";
    }

    // Aplica o tema inicial no elemento raiz do HTML (<html>)
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Lógica do clique do botão para alternar
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            // Pega o tema que está rodando exatamente agora
            const currentTheme = document.documentElement.getAttribute("data-theme");
            
            // Alterna o valor
            const newTheme = currentTheme === "light" ? "dark" : "light";

            // Aplica o novo tema no HTML e salva na memória do navegador
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            
            console.log("Tema alterado com sucesso para: " + newTheme); // Ajuda a testar no painel do desenvolvedor
        });
    } else {
        console.error("Botão 'theme-toggle' não foi encontrado na página atual.");
    }
});