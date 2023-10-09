const db = require("../../dbConnect");

module.exports = {
    getAllEntitiesAccreditation: async (req, res) => {
    try {
      const query = {
        text: "select * from schema_dataset_dev.entities_accreditation",
      };
      const getData = await db.query(query);
      const data = getData.rows;

      if (data.length === 0) {
        res.send({ message: "There is no data" });
      } else {
        res.send(data);
      }
      
    } catch (error) {
      console.log("error", error);
      res
        .status(500)
        .send({ message: "A server error ocurred, try again later" });
    }
  },
};
