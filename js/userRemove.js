import elements from "./elements.js";
import displayEmptyTableMessage from "./displayEmptyTableMessage.js";

export function setupUserRemovalListeners() {
  displayEmptyTableMessage();
  const tableBody = elements.tableBody;

  tableBody.addEventListener("click", (event) => {
    // Verifique se o elemento clicado tem a classe "remove"
    if (event.target.classList.contains("remove")) {
      // Obtenha a linha do usuário a partir do elemento clicado
      const userRow = event.target.parentElement;

      // Obtenha o ID do usuário
      const userId = userRow.id;

      // Remova a linha do usuário do DOM
      userRow.remove();

      // Exiba a mensagem se a tabela estiver vazia
      displayEmptyTableMessage();
    }
  });
}
