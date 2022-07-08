const API_KEY = "17d1d47ed2a14a04a52113030210107";

export async function api_get(val) {
  const result = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${val}&days=3`
  ).then((r) => r.json());

  return result;
}
