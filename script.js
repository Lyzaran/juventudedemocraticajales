document.addEventListener("DOMContentLoaded", () => {
    // ================== TROCAR PÁGINAS ==================
    const inputs = document.querySelectorAll('.links-pg input[name="page"]');
    const pages = document.querySelectorAll(".multi-pages .page");

    function updatePage() {
        // Esconde todas as páginas
        pages.forEach(page => {
            page.classList.add("none");
        });
        // Verifica qual input está ativo
        const activeInput = document.querySelector('.links-pg input[name="page"]:checked');
        if (activeInput) {
            // Descobre o ID da página correspondente
            const pageId = activeInput.id.replace("link-", "page-");
            const activePage = document.getElementById(pageId);
            // Exibe a página selecionada
            if (activePage) {
                activePage.classList.remove("none");
            }
        }
    }
    // Atualiza ao selecionar outra opção
    inputs.forEach(input => {
        input.addEventListener("change", updatePage);
    });
    // ================== FUNÇÕES AO ABRIR SITE ==================
    updatePage();
});