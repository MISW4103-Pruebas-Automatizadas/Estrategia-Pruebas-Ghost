import { readFileSync, writeFileSync } from "fs";
import pkg from 'resemblejs';
const {compare} = pkg;

const options = {
    output: {
        errorColor: {
            red: 255,
            green: 0,
            blue: 255
        },
        errorType: "movement",
        largeImageThreshold: 1200,
        useCrossOrigin: false,
        outputDiff: true
    },
    scaleToSameSize: true,
    ignore: "antialiasing"
};

function compareImages(path1, path2, outputPath) {
    return new Promise((resolve, reject) =>{
        const file1 = readFileSync(path1);
        const file2 = readFileSync(path2);
        compare(file1, file2, options, (err, data) => {
            if (err) reject(err);
            else {
                try {
                    writeFileSync(outputPath, data.getBuffer());
                    resolve(true);
                } catch (err2) {
                    reject(err2)
                }
            }
        });
    });
}

async function main() {
    const array = [{path1: "./People1.jpg", path2: "./People2.jpg", output:"./output-resemble.png"}]
    const promises = array.map(element => { return compareImages(element.path1, element.path2, element.output);});
    const values = await Promise.allSettled(promises);
    console.log(values);
}

main();
