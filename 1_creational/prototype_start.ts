// todo: make copies of user - witout permissions

class User {
  private permissions: string[];
  public userName: string;
  public email: string;

  constructor(userName: string, email: string) {
    this.userName = userName;
    this.email = email;
  }
}

const nir = new User('NirKaufman', 'nir@500tech');





