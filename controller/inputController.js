import inputService from '../service/inputService.js';

const initialize = () => inputService.initializeFiles();

const handleInput = (req, res) => {
    try {
        const { number } = req.body;
        const { result, file } = inputService.processInput(number);
        res.send(`Number ${result} stored in file ${file}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getFiles = (req, res) => {
    const fileContents = inputService.getFileContents();
    res.json(fileContents);
};

export default {
    initialize,
    handleInput,
    getFiles
};
