import {
  articles_url,
  country_code,
  category,
  api_key,
} from "../config/rest_config";

let api_uri = `${articles_url}/country=${country_code}&category=${category}&apiKey=${api_key}`;

const getNews = async () => {
  try {
    let articles = await fetch(api_uri);
    let result = await articles.json();
    return result.articles;
  } catch (err) {
    throw error;
  }
};
