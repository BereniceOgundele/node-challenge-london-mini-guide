const express = require ("express")
const app = express ()

const harrow = require ("./data/Harrow.json")
const heathrow = require ("./data/Heathrow.json")
const stratford = require ("./data/Stratford.json")

port = process.env.PORT || 3005 
app.get("/", (req, res) => {
  res.send({
    SupportedRoutes: ["/Pharmacies", "/Doctors", "/Colleges", "/Hospitals"],
    Version: "0.0.0.1",
    Author: "Berenice Ogundele",
  });
});

app.get("/pharmacies", (req, res) => {
    res.json(harrow.pharmacies)
})
app.listen (port, ()=> console.log("server is listening"));