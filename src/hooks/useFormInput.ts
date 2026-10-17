import { useState } from "react";

export default function useFormInput(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
}