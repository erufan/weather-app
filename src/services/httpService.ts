import apiClient from "./apiClient";

class HttpService {
  constructor(private url: string, private endpoint: string) {}

  getData<T>() {
    const controller = new AbortController();
    const request = apiClient(this.url).get<T>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}
const httpService = (url: string, endpoint: string) =>
  new HttpService(url, endpoint);

export default httpService;
