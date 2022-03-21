const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const port = 5000;
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const uri =
  "mongodb+srv://doctor:doctor123@cluster0.7e5ei.mongodb.net/doctorsPortal?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("port listing");
});

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const appointmentCollection = client
    .db("doctorsPortal")
    .collection("appointments");
  app.post("/addAppointment", (req, res) => {
    const appointment = req.body;
    res.send(appointment);
    appointmentCollection.insertOne(appointment).then((result) => {
      console.log(result);
    });
  });
  app.post("/appointmentsByDate", (req, res) => {
    const date = req.body;
    // console.log(date.newDate);
      appointmentCollection.find({appointmentDate: date.newDate}).toArray((err, document) => {
          res.send(document)
      })
      
  });
});

app.listen(port);
