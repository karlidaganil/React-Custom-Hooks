import { useRef, useState } from "react";
const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useRef({
    switchValue: () => setValue((prevState) => !prevState),
    on: () => setValue(true),
    off: () => setValue(false),
  });

  return [value, updateValue.current];
};

export default useBoolean;
