
//----------------------------------------- Understanding and working with Route-----------------------------------------------

// const express = require("express");
// const app = express();

// app.get ("/",function(req,res){
//     res.send("<h1>Hello Rehan</h1>");
// });

// app.get("/contact",function(req,res){
//     res.send("Contact me at:9153989990");
// });

// app.get("/about",function(req,res){
//     res.send("<ul><li>Md Rehan Ansari</li><li>Web Devloper</li><li>Ranchi-834001</li></ul>");
// });

// app.listen(3000,function(){
//     console.log("Server Started on port 3000");
// });



// ----------------------------------------------------responding to requests with  HTML file----------------------------------

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/rehan.html")
// });


// app.listen(3000,function(){
// console.log("Server Started on port 3000");
// });


// ---------------------------------------------------BodyParser to access html data------------------------------------------

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/rehan.html")
// });

// app.post("/",function(req,res){
//     var num1 = Number(req.body.num1);
//     var num2 = Number(req.body.num2);
//     var result=num1+num2;

//     res.send("The result of the calculate is "+result);
// });


// app.listen(3000,function(){
// console.log("Server Started on port 3000");
// });


// --------------------------------------------------------------BMI Calculator-------------------------------------------------

// const express = require("express");
// const bodyParser = require("body-parser");
 
// const app = express();
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/bmi",function(req,res){
//     res.sendFile(__dirname +"/rehan.html");
// });

// app.post("/bmi",function(req,res){
//     var weight = parseFloat(req.body.weg);
//     var height = parseFloat(req.body.hig);
//     var Bmi = weight / (height * height);


//     res.send("Your bmi value is" + Bmi);
// });


// app.listen(3000,function(){
//     console.log("server is live on port 3000");
// });


// -----------------------------------Making Get Request with Node HTTPS Module------------------------------------------- 


// const express = require("express");
// const bodyParser = require("body-parser");

// const https =require("https");
// const app = express();

// app.get("/",function(req,res){

//     const url ="https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=893cc15b1cce4b1fa106e7c84c344018";
//     https.get(url,function(response){
//         console.log(response);


//     });
//  res.send("server is up and running");
// });

// app.listen(3000,function(){
//     console.log("server is live on port 3000");
// });


// --------------------------------------------How to Parse JSON-------------------------------------------------------

// const express = require("express");
// const https = require("https");

// const app = express();

// app.get("/",function(req,res){
//     const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=893cc15b1cce4b1fa106e7c84c344018&units=metric";
//     https.get(url,function(response){
//         console.log(response.statusCode);
       
//         response.on("data",function(data){
//             const weatherData = JSON.parse(data)
//             const temp = weatherData.main.temp
//             const weatherDescription=weatherData.weather[0].description
//             res.send("Teamprature in London is "+temp+" degree celsius");
//         });

//     });
// });

// app.listen(3000,function(){
//     console.log("server is live on port 3000");
// });


// -----------------------------Using express to render a website with multiple live API data--------------------------

// const express = require("express");
// const https = require("https");
 
// const app = express();
// app.get("/",function(req,res){
//     const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=893cc15b1cce4b1fa106e7c84c344018&units=metric";
//     https.get(url,function(response){
//        console.log(response.statusCode);

//        response.on("data",function(data){
//         const weatherData = JSON.parse(data)
//         const temp = weatherData.main.temp
//         const weatherDescription = weatherData.weather[0].description
//         const icon = weatherData.weather[0].icon
//         const URL = " http://openweathermap.org/img/wn/"+icon+"@2x.png";
        
//         res.write("<p>The Weathe is currently "+weatherDescription);
//         res.write(`<h1>The Temprature in London is ${temp} degree celsiuse </h1>`);
//         res.write(`<img src= ${URL}>`);
//         res.send();

//        });
//     });
// });
 
// app.listen(3000,function(){
//     console.log("server is running on port 3000")
// });



// __________________________________Using Body Parser to Post Request to the server_____________________________________ 


const { response } = require("express");
const express = require("express");
const request = require("request");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

 app.get("/",function(req,res){
     res.sendFile(__dirname +`/rehan.html`);
 
 app.post("/",function(req,res){
    const query = req.body.cityName;
    const apikey = "ef5500531e8f7caa3183c3dcada359ec";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=${unit}`;


https.get(url,function(response){
    console.log(response);

response.on("data",function(data){
    const weatherData = JSON.parse(data);
    const weatherDescription = weatherData.weather[0].description;
    const temp = weatherData.main.temp;
    const wind = weatherData.wind.speed;
    const icon = weatherData.weather[0].icon;
    const imgURL =  `http://openweathermap.org/img/wn/${icon}@2x.png`;

    res.write(`<h1>Weathe in ${query} ${weatherDescription}</h1>`);
    res.write(`<p>Temprature in ${query} ${temp} </p>`);
    res.write(`<p>Wind speed in ${query} ${wind} </p>`);
    res.write(`<img src = ${imgURL}>`);
    res.send();
});
});
});
});

app.listen(3000,function(){
    console.log("Server is live on port 3000");
});