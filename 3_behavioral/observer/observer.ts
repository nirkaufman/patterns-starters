
/************************
 *  version I
 ***********************/
interface Subscriber {
  update(publisher: Publisher): void;
}

class Publisher {
  private subscribers: Subscriber[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber: Subscriber) {
    if (this.subscribers.includes(subscriber)) return;
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber) {
    const index = this.subscribers.indexOf(subscriber);

    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  publish() {
    this.subscribers.forEach(subscriber => subscriber.update(this))
  }
}


/************************
 *  version II
 ************************/
interface Observable<T> {
  update(state: T): void;
}

class Subject<T> {
  private observables: Set<Observable<T>>;

  constructor() {
    this.observables = new Set<Observable<T>>();
  }

  subscribe(observable: Observable<T>): void {
    this.observables.add(observable);
  }

  unsubscribe(observable: Observable<T>): void {
    this.observables.delete(observable);
  }

  next(state: T): void {
    this.observables.forEach(observables => observables.update(state));
  }
}

class StatefulSubject<T> extends Subject<T> {
  private state: T;

  constructor(initialState: T) {
    super();
    this.state = initialState;
  }

  subscribe(observable: Observable<T>) {
    super.subscribe(observable);
    observable.update(this.state);
  }

  next(state: T) {
    this.state = state;
    super.next(this.state);
  }
}



