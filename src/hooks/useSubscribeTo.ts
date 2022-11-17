import { useEffect, useState } from "react";
import { Observable } from "../Entities/Observable";

export function useSubscribeTo<T>(observable: Observable) {
  const [value, setValue] = useState<T>();

  const onUpdate = (valueToUpdate: T) => {
    setValue(valueToUpdate);
  };

  useEffect(() => {
    observable.attach(onUpdate);

    return () => observable.detach(onUpdate);
  }, []);

  return [value];
}
