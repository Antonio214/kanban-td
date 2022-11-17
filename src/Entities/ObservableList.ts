export type Observer<T> = (data: T) => void;

export abstract class ObservableList<T> {
  abstract itens: T[];
  private observers: Observer<T[]>[] = [];

  public attach(observer: Observer<T[]>) {
    this.observers.push(observer);
  }

  public detach(observerToRemove: Observer<T[]>) {
    this.observers = this.observers.filter(
      (observer) => observer !== observerToRemove
    );
  }

  protected notify(itens: T[]) {
    this.observers.forEach((observer) => observer(itens));
  }
}
