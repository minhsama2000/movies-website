import axios from "axios";

const env = {
  BASE_URL: "/minhsama/api",
  VERSION1: "/v1",
  DOMAIN: "http://localhost:8080",
};
const baseUrl = env.DOMAIN + env.BASE_URL + env.VERSION1;

export default function MovieApi() {
  const findHotMovies = async (url: string, param: {}) => {
    let fullUrl = baseUrl + url;
    const promise = await axios.get(fullUrl, { params: param });
    return promise.data;
  };

  const findByOption = async (option: string) => {
    const promise = await axios.get(`${baseUrl}/movie`, {
      params: { option: option },
    });
    return promise.data;
  };

  return {
    findHotMovies,
    findByOption,
  };
}
