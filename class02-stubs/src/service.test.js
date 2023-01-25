import { Service } from "./service.js";

const URL_1 = "https://swapi.dev/api/people/1/";

const service = new Service();
const withoutStub = await service.makeRequest(URL_1);
console.log(JSON.stringify(withoutStub));
