import fs from 'fs';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const options = {
    threshold: 0.1,
    includeAA: true,
    alpha: 0.1,
    aaColor: [255, 0, 0],
    diffColor: [255, 0, 255]
  };

function compareImages(path1, path2, outputPath) {
    const img1 = PNG.sync.read(fs.readFileSync(path1));
    const img2 = PNG.sync.read(fs.readFileSync(path2));
    const {width, height} = img1;
    const diff = new PNG({width, height});

    pixelmatch(img1.data, img2.data, diff.data, width, height, options);
    fs.writeFileSync(outputPath, PNG.sync.write(diff));
}

function main() {
    const array = [{path1: "./Zurich1.png", path2: "./Zurich2.png", output:"./output-pixelmatch.png"}]
    for (const element of array) {
        compareImages(element.path1, element.path2, element.output);
    }
}

main();
