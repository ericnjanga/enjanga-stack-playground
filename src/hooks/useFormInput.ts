import { useState } from "react";
import { SortOrderType } from "@/lib/types/products";

/**
 * Manages a string value for a text input or select element.
 * The specialized hooks below provide element-specific change handlers;
 * useFormSort also restricts the value to a valid sort order.
 *
 * @param initialValue - The initial value of the form control.
 * @returns The current value and an onChange handler to bind to the control.
 */
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

/**
 * Manages the text value and change handler for a search input.
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

/**
 * Manages a sort select value, accepting only "ASC" or "DESC".
 * Invalid values are ignored, preserving the previous selection.
 */
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
