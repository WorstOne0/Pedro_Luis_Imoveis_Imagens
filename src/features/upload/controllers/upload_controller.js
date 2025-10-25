import fs from "fs";

export default {
  async uploadSingle(req, res) {
    try {
      const filename = req.file.path.split("/").at(-1);
      const imagePath = `${process.env.HOST}/images/${req.params.company}/${filename}`;

      return res.json({ status: 200, payload: { path: imagePath, size: req.file.size }, message: "Ok!" });
    } catch (error) {
      return res.json({ status: 500, message: JSON.stringify(error) });
    }
  },
  async uploadMany(req, res) {
    try {
      var files = req.files.map((file) => {
        const filename = file.path.split("\\").at(-1);
        const imagePath = `${process.env.HOST}/images/${req.params.company}/${filename}`;

        return { path: imagePath, size: file.size };
      });

      return res.json({ status: 200, payload: files, message: "Ok" });
    } catch (error) {
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
      return res.json({ status: 200, message: JSON.stringify(error) });
    }
  },
};
