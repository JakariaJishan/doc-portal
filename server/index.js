const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const port = 5000;
const cors = require("cors");
require("dotenv").config();
const admin = require("firebase-admin");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const uri = process.env.DB_URL;
app.get("/", (req, res) => {
  res.send("port listing");
});


const serviceAccount = require("./config/doc-portal-backend-firebase-adminsdk-aiz1i-720a4fb8b4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
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
  app.get('/patients', (req, res) => {
    appointmentCollection.find({}).toArray((err, document) => {
      res.send(document)
    })
  })
  app.post("/appointmentsByDate", (req, res) => {
    const date = req.body;
    // console.log(date.newDate);
    appointmentCollection
      .find({ appointmentDate: date.newDate })
      .toArray((err, document) => {
        res.send(document);
      });
  });
  app.get("/allPatients", (req, res) => {
    const bearer = req.headers.authorization;
    const userEmail = req.query.email;

    if (bearer && bearer.startsWith("Bearer ")) {
      const idtoken = bearer.split(" ")[1];
      admin
        .auth()
        .verifyIdToken(idtoken)
        .then((decodedToken) => {
          const decodedEmail = decodedToken.email;
          console.log({ decodedEmail }, { userEmail });
          if (decodedEmail == userEmail)
            appointmentCollection
              .find({ email: userEmail })
              .toArray((err, document) => {
                res.send(document);
              });
        })
        .catch((error) => {
          // Handle error
        });
    } else {
    }
  });
});

app.listen(port);
