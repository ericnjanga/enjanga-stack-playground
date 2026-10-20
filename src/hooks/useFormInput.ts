import { useState } from "react";

/**
 * A custom hook for managing form input state.
 * We encapsulate the logic for handling input changes and maintaining the current value of the input field.
 * This hook can be used for both text inputs and select elements.
 * @param initialValue
 * @returns
 */

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
