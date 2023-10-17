class User {
  constructor() {
    this.id = null;
    this.name = null;
    this.login = null;
    this.avatar = null;
    this.repositories = null;
    this.followers = null;
  }

  update(data) {
    this.id = data.id || this.id;
    this.name = data.name || this.name;
    this.login = data.login || this.login;
    this.avatar = data.avatar_url || this.avatar;
    this.repositories = data.public_repos || this.repositories;
    this.followers = data.followers || this.followers;
  }
}

export default User;
