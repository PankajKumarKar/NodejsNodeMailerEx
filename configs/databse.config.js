const { connect } = require("mongoose");

exports.dbConnect = () => {
  connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Database Connection Established !");
    })
    .catch((err) => {
      console.error("Issue In Database Connection");
    });
};
