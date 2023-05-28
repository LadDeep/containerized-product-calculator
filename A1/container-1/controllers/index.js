import { isFileNull, fileExists } from "../utils/helper.utils.js";

const calculate =  (req, res)=>{
    const {file, product} = req.body;

    console.log(file, product)
    if(isFileNull(file)){
        res.status(200).send({
            "file": null,
            "error": "Invalid JSON input."
        })
    }

    if(!fileExists(file)){
        res.status(200).send({
            "file": "file.dat",
            "error": "File not found."
        })
    }
}

export {calculate};