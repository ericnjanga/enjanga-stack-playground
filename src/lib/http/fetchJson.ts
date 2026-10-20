
/*
 * Fetch data and return a JSON-reading promise.
 * (Generic fetch + HTTP error handling)
 */
export const fetchJson = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }

  return response.json();
};