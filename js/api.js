import User from "./userModel.js";

function fetchGitHubUser(gitUser) {
  const gitHubEndPoit = `https://api.github.com/users/${gitUser}`;

  return fetch(gitHubEndPoit)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Erro na solicitação da API:", error);
      throw new Error("Usuário não encontrado");
    });
}

export function getUserData(gitUser) {
  return fetchGitHubUser(gitUser).then((data) => {
    const user = new User();
    user.update(data);
    return user;
  });
}
