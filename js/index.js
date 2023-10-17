import { getUserData } from "./api.js";
import elements from "./elements.js";
import displayEmptyTableMessage from "./displayEmptyTableMessage.js";
import { updateTable } from "./updataTable.js";

displayEmptyTableMessage();
// Lidando com a ação de clique no botão "Favoritar"
elements.sendButton.addEventListener("click", async () => {
  try {
    const gitUser = elements.searchInput.value;
    const user = await getUserData(gitUser); // Aguarde a resposta da API
    updateTable(user);
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    displayEmptyTableMessage(); // Exibir mensagem de usuário não encontrado
  }
});
