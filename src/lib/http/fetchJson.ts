
/*
 * Fetch data and return a JSON-reading promise.
 * (Generic fetch + HTTP error handling)
 */

export const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }

  return (await response.json()) as T;
};
