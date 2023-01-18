import { readFile } from 'fs/promises'

export class File {
    static async csvToJson(filepath){
        const content = await File.getFileContent(filepath);
        return content;
    }

    static async getFileContent(filepath) {
        const file = (await readFile(filepath)).toString('utf8');
        return file;
    }
}

const result = await File.csvToJson('../mocks/threeItems-valid.csv');
console.log('result', result);