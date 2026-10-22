
/*
 * Fetch data and return a JSON-reading promise.
 * (Generic fetch + HTTP error handling)
 */

export const fetchJson = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }

  return (await response.json()) as T;
};
