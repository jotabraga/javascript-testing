import { request } from "undici";

export class Service {
  async makeRequest(url) {
    const { body } = await request(url);
    return body.json();
  }
}
