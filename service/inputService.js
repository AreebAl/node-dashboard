import fs from 'fs';

const files = ['A.txt', 'B.txt', 'C.txt', 'D.txt'];
const filePaths = files.map(file => `./${file}`);
let processComplete = false;

const initializeFiles = () => {
    filePaths.forEach(file => {
        if (!fs.existsSync(file)) {
            fs.writeFileSync(file, '');
        }
    });
};

const processInput = (number) => {
    if (processComplete) throw new Error('Process already completed.');
    if (number < 1 || number > 25) throw new Error('Number must be between 1 and 25.');

    const result = number * 7;
    let fileIndex = result > 140 ? 0 : result > 100 ? 1 : result > 60 ? 2 : 3;

    fs.appendFileSync(filePaths[fileIndex], `${result}\n`);
    if (filePaths.every(file => fs.readFileSync(file, 'utf8').trim())) processComplete = true;

    return { result, file: files[fileIndex] };
};

const getFileContents = () => {
    return files.reduce((acc, file, index) => {
        acc[file] = fs.readFileSync(filePaths[index], 'utf8').trim().split('\n');
        return acc;
    }, {});
};

export default {
    initializeFiles,
    processInput,
    getFileContents
};
