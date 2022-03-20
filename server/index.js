const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const uri = "mongodb+srv://doctor:doctor123@cluster0.7e5ei.mongodb.net/doctorsPortal?retryWrites=true&w=majority";
app.get('/', (req, res) => {
    res.send('port listing')
})


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const appointmentCollection = client.db("doctorsPortal").collection("appointments");
  app.post('/addAppointment', (req, res) =>{
      const appointment = req.body;
      appointmentCollection.insertOne(appointment)
      .then(result => {
          console.log(result)
      })
  })
});

app.listen(port)