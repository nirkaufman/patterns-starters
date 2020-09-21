/************************
 *  version I
 ***********************/

abstract class AbstractHandler<T> {
  private nextHandler: AbstractHandler<T>;

  next(handler: AbstractHandler<T>): AbstractHandler<T> {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: T): T {
    return this.nextHandler ? this.nextHandler.handle(request) : null;
  }
}
