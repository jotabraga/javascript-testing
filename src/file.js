import { readFile } from 'fs/promises'
import { constants } from './constants.js'
const DEFAULT_OPTION = {
    maxLines: 3,
    fields: ["id","name","profession","age"]
}


export class File {
    static async csvToJson(filepath){
        const content = await File.getFileContent(filepath);
        const validation = File.isValid(content)
        if(!validation.valid) throw new Error(validation.error)
        return content;
    }

    static async getFileContent(filepath) {
        const file = (await readFile(filepath)).toString('utf8');
        return file;
    }

    static isValid(csvString, options = DEFAULT_OPTION) {
        const { error } = constants;

        const [headers, ...fileWithoutHeader] = csvString.split('\n')

        const isHeaderValid = headers === options.fields.join(',');
        if(!isHeaderValid) {
            return {
                error: error.FILE_FIELDS_ERROR_MESSAGE,
                valid: false
            }
        }

        const isContentLengthValid = (fileWithoutHeader.length > 0 && fileWithoutHeader.length <= options.maxLines)
        if(!isContentLengthValid) {
            return {
                error: error.FILE_LENGTH_ERROR_MESSAGE,
                valid: false
            }
        }
        return {
            valid: true
        }
    }
}

// const result = await File.csvToJson('../mocks/threeItems-valid.csv');
const result = await File.csvToJson('../mocks/emptyFile-invalid.csv');
console.log('result', result);