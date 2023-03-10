import { File } from "./file.js";
import { constants } from "./constants.js";
import { rejects } from "assert";
const { error } = constants;
const test = async () => {
  const filePath = "./mocks/emptyFile-invalid.csv";
  const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
  const result = File.csvToJson(filePath);
  await rejects(result, rejection);
};

test();
