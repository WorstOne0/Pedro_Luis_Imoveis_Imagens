import fs from "fs";

export default {
  async uploadSingle(req, res) {
    try {
      const filename = req.file.path.split("\\").at(-1);
      console.log("filename", filename);
      const imagePath = `${process.env.HOST}/images/${filename}`;

      return res.json({ status: 200, payload: { path: imagePath, size: req.file.size }, message: "Ok!" });
    } catch (error) {
      console.log("Error - upload_controller.js - uploadSingle", error);
      return res.json({ status: 500, message: JSON.stringify(error) });
    }
  },
  async uploadMany(req, res) {
    try {
      var files = req.files.map((file) => {
        const filename = file.path.split("\\").at(-1);
        const imagePath = `${process.env.HOST}/images/${filename}`;

        return { path: imagePath, size: file.size };
      });

      return res.json({ status: 200, payload: files, message: "Ok" });
    } catch (error) {
      console.log("Error - upload_controller.js - uploadMany", error);
      return res.json({ status: 500, message: JSON.stringify(error) });
    }
  },
  async delete(req, res) {
    try {
      const { filename } = req.body;

      const imagePath = `public/${filename}`;
      fs.rmSync(imagePath);

      return res.json({ status: 200, payload: filename, message: "Ok" });
    } catch (error) {
      console.log("Error - upload_controller.js - delete", error);
      return res.json({ status: 200, message: JSON.stringify(error) });
    }
  },
};
