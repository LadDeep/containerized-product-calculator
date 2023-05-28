import fs from 'fs';

const isFileNull = (file) => {
    return file===null;
}

const fileExists = (file) => {
    const volumePath = "/app";
    const filePath = `${volumePath}/${file}`

    if(!fs.existsSync(filePath))
        return false
    
    return true
}
export {isFileNull, fileExists};