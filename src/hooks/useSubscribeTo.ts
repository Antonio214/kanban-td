import { useEffect, useState } from "react";
import { ObservableList } from "../Entities/ObservableList";

export function useSubscribeTo<T>(observable: ObservableList<T>) {
  const [value, setValue] = useState<T[]>(observable.itens);

  const onUpdate = (valueToUpdate: T[]) => {
    setValue(valueToUpdate);
  };

  useEffect(() => {
    observable.attach(onUpdate);

    return () => observable.detach(onUpdate);
  }, []);

  return [value];
}
