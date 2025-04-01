# 📁 directory organizer CLI

a node.js CLI tool that organizes files in a folder by file type into categorized subfolders, such as:

  - 📄 documents (`.pdf`, `.docx`, `.txt`)
  - 🎵 audio (`.mp3`, `.wav`)
  - 🎥 video (`.mp4`, `.mov`)
  - 🖼️ images (`.png`, `.jpg`, `.gif`)
  - 📦 compressed files (`.zip`, `.rar`)

## usage

to use it, make sure you have [node.js](https://nodejs.org/en) installed, clone this repository, and then run `node app.js [directory-path]`.
<br/>

## results

initially, the example folder looks like this:
```
.
└── example-folder/
    ├── audio.wav
    ├── document.docx
    ├── file.pdf
    ├── film.webm
    ├── image.jpg
    ├── img.webp
    ├── movie.mov
    ├── noise.m4a
    ├── photo.jpeg
    ├── picture.png
    ├── rar.rar
    ├── seven.7z
    ├── song.mp3
    ├── text.txt
    ├── vid.avi
    ├── video.mp4
    └── zip.zip
```

after running the script, a new folder will be created with `-organized` appended to its name, and it will look like this:
```
.
└── example-folder-organized/
    ├── audio/
    │   ├── audio.wav
    │   ├── noise.m4a
    │   └── song.mp3
    ├── compressed/
    │   ├── rar.rar
    │   ├── seven.7z
    │   └── zip.zip
    ├── documents/
    │   ├── document.docx
    │   ├── file.pdf
    │   └── text.txt
    ├── images/
    │   ├── image.jpg
    │   ├── img.webp
    │   ├── photo.jpeg
    │   └── picture.png
    └── videos/
        ├── film.webm
        ├── movie.mov
        ├── vid.avi
        └── video.mp4
```

## modifications

to organize files within the same directory instead of creating a new one, simply take this part of the source code and comment it out/delete it altogether:
```javascript
33|  // make new folder to put organized content in
34|  if (fs.existsSync(`${folderPath}-organized`)) {
35|    fs.rmSync(`${folderPath}-organized`, { recursive: true, force: true });
36|  }
37|  fs.cpSync(folderPath, `${folderPath}-organized`, { recursive: true });
38|  folderPath = `${folderPath}-organized`;
```
