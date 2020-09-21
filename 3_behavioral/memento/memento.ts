// represent a snapshot - moment in time
class Memento {
  private readonly _state: any;

  constructor(state: any) {
    this._state = state;
  }

  get state() {
    return this._state;
  }
}

// represent a class that knows how to save and restore
// its own state
interface Originator {
  save(): Memento;
  restore(memento:Memento);
}

class CareTaker {
  private originator: Originator;
  private history: Memento[];

  constructor(originator: Originator) {
    this.originator = originator;
    this.history = [];
  }

  capture() {
    const moment = this.originator.save();
    this.history.push(moment);
  }

  restore() {
    const moment = this.history.pop();
    return this.originator.restore(moment)
  }
}
