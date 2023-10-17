import elements from "./elements.js";

export default function displayEmptyTableMessage() {
  // Obter uma referência direta para o corpo da tabela a partir do objeto elements
  const { tableBody } = elements;

  // Verificar se a tabela está vazia
  if (tableBody.childElementCount < 1) {
    const existingMessage = tableBody.querySelector(".not-found");

    if (!existingMessage) {
      // Criar e adicionar a linha da mensagem
      const tableRow = document.createElement("tr");
      tableRow.classList.add("not-found");
      tableRow.innerHTML = `
        <td><img src="./assets/star-fill-not-found.svg" alt="Ícone de estrela com rosto de algo não encontrado." /></td>
        <td>Nenhum favorito ainda</td>
        <td></td>
        <td></td>
      `;
      tableBody.appendChild(tableRow);
    }
  } else {
    // Remover a mensagem se houver
    const existingMessage = tableBody.querySelector(".not-found");
    if (existingMessage) {
      existingMessage.remove();
    }
  }
}
