export type Observer = () => void;

export abstract class Observable {
  private observers: Observer[] = [];

  public attach(observer: Observer) {
    this.observers.push(observer);
  }

  public detach(observerToRemove: Observer) {
    this.observers = this.observers.filter(
      (observer) => observer !== observerToRemove
    );
  }

  protected notify() {
    this.observers.forEach((observer) => observer());
  }
}
