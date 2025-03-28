const fs = require("node:fs");
const path = require("node:path");

// folder to be organized
folderPath = process.argv[2]; // if having trouble, move the folder into this directory and simply use the folder's name
folderPath = folderPath.replace(/^"(.*)"$/, "$1"); // get rid of quotation marks if any (copy as path)
console.log(folderPath + "\n");

// check if folder is real
console.log("CHECKING FOR FOLDER EXISTENCE");
if (!fs.existsSync(folderPath)) {
  console.log("[ERROR]: folder not found\n");
  return;
} else {
  console.log("folder found\n");
}

// check if we have read & write permissions for folder
console.log("CHECKING FOR READ AND WRITE PERMISSIONS");
try {
  fs.accessSync(folderPath, fs.constants.R_OK | fs.constants.W_OK);
  console.log("access granted\n");
} catch (err) {
  console.log("[ERROR]: permission denied\n");
  return;
}

// parse contents to see what folders we are going to use
console.log("PARSING FOLDER'S CONTENTS");
folderContents = fs.readdirSync(folderPath);
// console.log(folderContents);

// make new folder to put organized content in
if (fs.existsSync(`${folderPath}-organized`)) {
  fs.rmSync(`${folderPath}-organized`, { recursive: true, force: true });
}
fs.cpSync(folderPath, `${folderPath}-organized`, { recursive: true });
folderPath = `${folderPath}-organized`;

for (const item of folderContents) {
  console.log(item);

  if (
    path.extname(item) === ".docx" ||
    path.extname(item) === ".doc" ||
    path.extname(item) === ".pdf" ||
    path.extname(item) === ".txt"
  ) {
    if (!fs.existsSync(`${folderPath}/documents`)) {
      fs.mkdirSync(`${folderPath}/documents`);
    }

    fs.renameSync(`${folderPath}/${item}`, `${folderPath}/documents/${item}`);
  } else if (
    path.extname(item) === ".mp3" ||
    path.extname(item) === ".wav" ||
    path.extname(item) === ".m4a"
  ) {
    if (!fs.existsSync(`${folderPath}/audio`)) {
      fs.mkdirSync(`${folderPath}/audio`);
    }

    fs.renameSync(`${folderPath}/${item}`, `${folderPath}/audio/${item}`);
  } else if (
    path.extname(item) === ".mp4" ||
    path.extname(item) === ".mov" ||
    path.extname(item) === ".avi" ||
    path.extname(item) === ".webm"
  ) {
    if (!fs.existsSync(`${folderPath}/videos`)) {
      fs.mkdirSync(`${folderPath}/videos`);
    }

    fs.renameSync(`${folderPath}/${item}`, `${folderPath}/videos/${item}`);
  } else if (
    path.extname(item) === ".png" ||
    path.extname(item) === ".jpg" ||
    path.extname(item) === ".jpeg" ||
    path.extname(item) === ".gif" ||
    path.extname(item) === ".webp" ||
    path.extname(item) === ".svg"
  ) {
    if (!fs.existsSync(`${folderPath}/images`)) {
      fs.mkdirSync(`${folderPath}/images`);
    }

    fs.renameSync(`${folderPath}/${item}`, `${folderPath}/images/${item}`);
  } else if (
    path.extname(item) === ".7z" ||
    path.extname(item) === ".rar" ||
    path.extname(item) === ".zip"
  ) {
    if (!fs.existsSync(`${folderPath}/compressed`)) {
      fs.mkdirSync(`${folderPath}/compressed`);
    }

    fs.renameSync(`${folderPath}/${item}`, `${folderPath}/compressed/${item}`);
  }
}
