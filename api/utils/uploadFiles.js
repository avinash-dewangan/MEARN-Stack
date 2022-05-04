const fs = require('fs');
const multer = require("multer");
const path = require("path");

function createDir(dir){
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //console.log("file info: ", file);
    var ext = path.extname(file.originalname);
    if (ext === ".png" || ext === ".jpg" || ext ===".gif" || ext === ".jpeg") {
      createDir("./public/assets/img")
      cb(null, `./public/assets/img/`);
    }else if(ext === ".pdf" || ext === ".doc" || ext ===".xlsx"){
      createDir("./public/assets/doc")
      cb(null, "./public/assets/doc/");
    }else{
      return cb(new Error("This extennstion not allowed"));
    }
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024,
  },
});

module.exports = upload;