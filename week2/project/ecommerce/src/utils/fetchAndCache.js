const cache = new Map();

/**
 * Fetches data from the provided path and caches the response.
 * The cache is only used in case of an error or empty response.
 *
 * @param {string} path - The relative path to fetch data from.
 * @returns {Promise<[Error|null, any|null]>} A promise that resolves to a tuple containing:
 * - `error`: An `Error` object if an error occurred, otherwise `null`.
 * - `data`: The fetched data (or cached data if an error occurred), otherwise `null`.
 *
 * ### Behavior:
 * - If the fetch is successful and the response contains data:
 *   - Caches the data and resolves to `[null, data]`.
 * - If the response is empty:
 *   - Throws an error and resolves to `[error, cachedData]` if cached data is available.
 * - If the fetch fails:
 *   - Resolves to `[error, cachedData]` if cached data is available, otherwise `[error, null]`.
 *
 * ### Example Usage:
 * ```javascript
 * const [error, data] = await fetchAndCache('categories');
 * if (error) {
 *   console.error('Fetch failed:', error.message);
 *   if (data) {
 *     console.log('Using cached data:', data);
 *   }
 * } else {
 *   console.log('Fetched data:', data);
 * }
 * ```
 */

export default async function fetchAndCache(path) {
  const url = 'https://fakestoreapi.com/products/' + path;

  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Fetch failed with status: ${res.status}`);
    if (res.headers.get('Content-Length') === '0') {
      throw new Error('Empty response!');
    } //check for successful req with empty response

    const data = await res.json();

    if (data?.length || Object.keys(data)?.length) {
      cache.set(url, data);
      return [null, data];
    }

    throw new Error('Empty response'); //assumes a res is arr or obj with length > 0
  } catch (error) {
    const data = cache.has(url) ? cache.get(url) : null;
    return [error, data];
  }
}
