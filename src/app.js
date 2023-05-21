const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;

const hbs = require("hbs");
const { collection, collection3} = require("./mongodb");
// const collection3 = require("./mongodb");

const tempelatePath = path.join(__dirname, '../Views/Views')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", tempelatePath)
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index1")
})
app.get("/index1", (req, res) => {
    res.render("index1")
})
app.get("/Login", (req, res) => {
    res.render("Login")
})
app.get("/python", (req, res) => {
    res.render("python")
})
app.get("/index", (req, res) => {
    res.render("index")
})
app.get("/upsc", (req, res) => {
    res.render("upsc")
})
app.get("/java", (req, res) => {
    res.render("java")
})
app.get("/Signup", (req, res) => {
    res.render("Signup")
})
app.get("/contact", (req, res) => {
    res.render("index")
})
app.get("/10", (req, res) => {
    res.render("10")
})
app.get("/12", (req, res) => {
    res.render("12")
})
app.get("/jee", (req, res) => {
    res.render("jee")
})
app.get("/banking", (req, res) => {
    res.render("banking")
})
app.get("/full", (req, res) => {
    res.render("full")
})
app.get("/app", (req, res) => {
    res.render("app")
})
app.get("/c", (req, res) => {
    res.render("c")
})
app.get("/ui", (req, res) => {
    res.render("ui")
})
app.get("/database", (req, res) => {
    res.render("database")
})
app.get("/cyber", (req, res) => {
    res.render("cyber")
})
app.get("/reality", (req, res) => {
    res.render("reality")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/code", (req, res) => {
    res.render("code")
})
app.get("/exams", (req, res) => {
    res.render("exams")
})
app.get("/neet", (req, res) => {
    res.render("neet")
})
app.get("/cuet", (req, res) => {
    res.render("cuet")
})
app.get("/frontend", (req, res) => {
    res.render("frontend")
})
app.get("/backend", (req, res) => {
    res.render("backend")
})
app.get("/devops", (req, res) => {
    res.render("devops")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.get("/mongo", (req, res) => {
    res.render("mongo")
})

app.post("/Signup", async (req, res) => {

    const data = {
        name: req.body.name,
        password: req.body.password,
        cpassword: req.body.cpassword

    }
    const a= req.body.password;
    const b= req.body.cpassword;
    const check = await collection.findOne({ name: req.body.name })
    if (check==null){

    
     if (a ===b) {

        await collection.insertMany([data])

        res.status(201).render("Login")
    }
    else{
        res.send("Password are not match")
    }
}
else{
    res.send("User already exist");
}

})

app.post("/Login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.render("index")
        }
        else {
            res.send("wrong password")
            res.render("Login")
        }
    }
    catch {
        res.send("wrong details")
    }



})

app.post("/search", async (req, res) =>{
    let a=req.body.search;
    let b=a.toLowerCase();
    if (b=="10"||b=="highschool"||b=="x"){
        res.render("10");
    }
    else if(b=="12"||b=="xii"||b=="senoir secondary"||b=="intermediate"){
        res.render("12")
    }
    else if(b=="frontend development"||b=="frontend"||b=="frontend developer"||b=="front")
    {
        res.render("frontend")
    }
    else if(b=="backend development"||b=="backend"||b=="backend developer"||b=="back")
    {
        res.render("backend");
    }
    else if(b=="full stack development"||b=="full stack"||b=="full"||b=="stack"||b=="full stack web development"||b=="developer"||b=="development"||b=="web"||b=="web development"||b=="web developer")
    {
        res.render("full");
    }
    else if(b=="android developer"||b=="android"||b=="android development"||b=="app development"||b=="app developer"||b=="app")
    {
        res.render("app")
    }
    else if(b=="jee"||b=="iitjee"||b=="iit-jee"||b=="uptu"||b=="engineering"||b=="engineering exam"||b=="engineering entrance exam"||b=="joint entrance exam")
    {
        res.render("jee")
    }
    else if(b=="upsc"||b=="uttar pradesh civil services"||b=="up civil services"||b=="ias"||b=="pcs"||b=="ias,pcs"||b=="pcs")
    {
        res.render("upsc")
    }

    else{
        res.send("Invalid Search");
        
    }
})

app.post("/contact", async (req, res) => {

    const data2 = {
        name: req.body.name,
        email: req.body.email,
        Contact: req.body.Contact,
        Address: req.body.Address

    }


    await collection3.insertMany([data2])
    res.render("index")

})

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})