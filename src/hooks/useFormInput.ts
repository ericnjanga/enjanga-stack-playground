import { useState } from "react";
import { SortOrderType } from "@/lib/types/products";

/**
 * A custom hook for managing form input state.
 * We encapsulate the logic for handling input changes and maintaining the current value of the input field.
 * This hook can be used for both text inputs and select elements.
 * @param initialValue
 * @returns
 */


export const useFormSearch = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  }
};



export const useFormSort = (initialValue: SortOrderType) => {
  const [value, setValue] = useState<SortOrderType>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value;
    if (value === 'ASC' || value === 'DESC') {
      setValue(value);
    }
  };

  return {
    value,
    onChange: handleChange,
  }
};


export const useGenericFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  }
};
