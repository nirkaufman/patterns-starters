// todo: to get approval for mortage 3 modules needs to be involve: bank approval,
// todo: credit check, and background check (not Peccary in this order)

class Mortgage {
  private _clientName: string;

  constructor(clientName: string) {
    this._clientName = clientName;
  }

  applyFor(amount: number) {
    let result = "approved";
    if (!new Bank().verify(this._clientName, amount)) {
      result = "denied";
    } else if (!new Credit().get(this._clientName)) {
      result = "denied";
    } else if (!new Background().check(this._clientName)) {
      result = "denied";
    }
    return this._clientName + " has been " + result +
        " for a " + amount + " mortgage";
  }
}



class Bank {
  verify(name, amount) {
    return true;
  }
}

class Credit {
  get(name) {
    return true;
  }
}

class Background {
  check(name) {
    return true;
  }
}


function run() {
  const mortgage = new Mortgage("Joan Templeton");
  const result = mortgage.applyFor(100000);

  alert(result);
}
