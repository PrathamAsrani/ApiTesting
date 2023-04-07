// In package.json: "main": "index.js", index.js is reading
// express will be fetched from package.json
const app = require("express")();
const cors = require("cors")();
const port = process.env.PORT || 8000;
// import data.json
const data = require("./data.json");

// cors.policies using
app.use(cors);


// app.get( path, callback )
/*
path : represent page, like '/': homepage
*/
app.get("/", (request, response) => { // homepage function
    response.send("Hello, I'm Pratham!");
});

app.get("/users", (req, res)=>{
    res.send("Hello users page")
});

app.get("apiData", (req, res)=>{
    res.send(data);
});

// listen used to start server
app.listen(port, () => {
    console.log("Hello, Pratham!");
});