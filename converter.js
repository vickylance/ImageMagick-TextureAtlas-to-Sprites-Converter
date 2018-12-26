const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const isWin = process.platform === "win32";

var questions = [
  {
    type: 'input',
    name: 'inputFile',
    message: "Path to your input spritesheet?"
  },
  {
    type: 'input',
    name: 'jsonFile',
    message: 'Path to your JSON file?'
  },
  {
    type: 'input',
    name: 'output',
    message: 'Path to your output folder?'
  }
];

let config = {}

function ask() {
  inquirer.prompt(questions)
    .then(answers => {
      config.inputFile = path.resolve(answers.inputFile);
      config.jsonFile = path.resolve(answers.jsonFile);
      config.output = path.resolve(answers.output);
      console.log(
  `Your input is:
  \tInput Spritesheet: \t${config.inputFile}
  \tInput JSON File: \t${config.jsonFile}
  \tOutput folder: \t\t${config.output}
  `
      );
      config.jsonFile = require(path.resolve(answers.jsonFile));

      saveScript(generate())
  });
}

ask();

function generate() {
  console.log('Started !!');

  let JSOO = config.jsonFile.map(img => {
    let size = `${img.width}x${img.height}`;
    let offset = `${img.x}+${img.y}`;
    let cropped = isWin ? `\( ${config.inputFile} -crop ${size}+${offset} +repage \)` : `\\( ${config.inputFile} -crop ${size}+${offset} +repage \\)`;
    let output = path.join(config.output, img.name);
    console.log(`Generating for...\t${img.name}.png`);
    
    return `magick -size ${size} canvas:none ${cropped} -gravity northwest -geometry +0+0 -compose over -composite ${output}.png`;
  }).join('\n');
  
  console.log('Done !!');
  return JSOO;
}

function saveScript(text) {
  fs.writeFileSync(path.join(__dirname, `ImageMagick.${isWin ? 'bat' : 'sh'}`), text);
}
