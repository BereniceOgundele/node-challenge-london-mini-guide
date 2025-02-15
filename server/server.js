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

app.get("/pharmacies",(req, res) => {
    res.json(harrow.pharmacies)
})

app.get("/colleges",(req, res) => {
    res.json(harrow.colleges)
})

app.get("/doctors",(req, res) => {
    res.json(harrow.doctors)
})

app.get("/hospitals",(req, res) => {
    res.json(harrow.hospitals)
})


app.get('/harrow',(req,res)=>{
    console.log('route /test')
    var response=req.query;
    console.log(harrow);
    res.send(response);
});

app.listen (port, ()=> console.log(`server is listening to port ${port}`));