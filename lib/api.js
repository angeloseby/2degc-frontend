import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

/**
 * Helper to get Strapi Media URL
 * @param {string} url Relative or absolute URL of the media
 * @returns {string} Full URL to the media
 */
export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }

  // Return the URL if it's already an external link
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the Strapi base URL
  return `${getStrapiURL()}${url}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns {Promise<any>} Parsed JSON response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  try {
    // Merge default options with user-provided options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
      console.error(`Strapi Error (${response.status}): ${response.statusText} at ${path}`);
      return null;
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to connect to Strapi at ${path}:`, error.message);
    return null;
  }
}

