import elements from "./elements.js";
import displayEmptyTableMessage from "./displayEmptyTableMessage.js";

export default function userAdd(user) {
  // Referência ao corpo da tabela
  const tableBody = elements.tableBody;

  // Criar uma nova linha para o usuário
  const newRow = document.createElement("tr");
  newRow.id = user.id;

  // Desestruturação do objeto user
  const { avatar, name, repositories, followers } = user;

  // Preencher a nova linha com os dados do usuário
  newRow.innerHTML = `
    <td>
      <img src="${avatar}" alt="avatar de ${name}" />
      <span>${name}</span>
    </td>
    <td>${repositories}</td>
    <td>${followers}</td>
    <td class="remove">Remover</td>
  `;

  // Adicionar a nova linha à tabela
  tableBody.appendChild(newRow);

  // Exibir mensagem se a tabela estiver vazia
  displayEmptyTableMessage();
}
