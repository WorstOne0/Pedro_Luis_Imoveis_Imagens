import multer from "multer";
import moment from "moment";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dirPath = `public/`;
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);

    cb(null, dirPath);
  },
  filename: (req, file, cb) => {
    try {
      // Save the extension file
      const extFile = file.originalname.split(".").at(-1);

      // Add the timestamp to the filename
      const newFileName = `${file.originalname.split(".")[0]}_${moment().unix().toString()}`;

      // New filename with extension
      cb(null, `${newFileName}.${extFile}`);
    } catch (error) {
      // New filename with extension
      cb(null, file.originalname);
    }
  },
});

export default multer({ storage });
