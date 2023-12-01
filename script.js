document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value;

        // Verifica se o termo de pesquisa não está vazio
        if (searchTerm.trim() !== "") {
            // Faz uma solicitação AJAX para o servidor (substitua a URL com a sua)
            fetch(`URL_DO_SEU_SERVIDOR?q=${encodeURIComponent(searchTerm)}`)
                .then(response => response.json())
                .then(data => {
                    // Limpa os resultados antigos
                    searchResults.innerHTML = "";

                    // Adiciona os novos resultados ao DOM
                    data.forEach(result => {
                        const resultItem = document.createElement("div");
                        resultItem.textContent = result.title; // Supondo que cada resultado tenha um atributo "title"
                        searchResults.appendChild(resultItem);
                    });

                    // Exibe a área de resultados
                    searchResults.style.display = "block";
                })
                .catch(error => console.error("Erro na solicitação:", error));
        }
    });
});
