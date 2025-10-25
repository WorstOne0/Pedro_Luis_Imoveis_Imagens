import fs from "fs";

export default {
  async getStats(req, res) {
    try {
      const getFolderSize = (await import("get-folder-size")).default;

      const size = await getFolderSize.loose(`public`);

      return res.json({ status: 200, payload: size, message: "Size in bytes" });
    } catch (error) {
      return res.json({ status: 200, message: JSON.stringify(error) });
    }
  },
};
