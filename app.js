//print statement
// console.log("Tharusha");


//print statement after 5 seconds
// setTimeout(function(){
//     console.log("5 seconds");
// },5000);




//display time again and again after 2 seconds
//stop after the time reached 5 seconds 
// var time =0;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time+ " seconds");

//     if(time>5)
//     {
//         clearInterval(timer);
//     }
// },2000);



//display directory
// console.log(__dirname);



//display filename with directory
// console.log(__filename);



//normal function statement
// function sayDidula() {
//     console.log("Didula");
    
// }
// sayDidula();



//function expression
// var sayPamal = function () {

//     console.log("Pamal");  
// }
// sayPamal();


//callback function
// function callFunction(name) {
//     name();    
// }
// callFunction(sayPamal);


//get  functions in stuff.js
// var stuff= require('./stuff');
// console.log(stuff.counter(["Tharusha","Didula","Pamal"]));
// console.log(stuff.adder(4,5));
// console.log(stuff.sayMenura());
// console.log(stuff.pi);


//use event module
// var events = require('events');
// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent',function(msg){
//     console.log(msg);
// });
// myEmitter.emit('someEvent','The event was emitted');



//use events and util modules
// var events = require('events');
// var util = require('util');
// var Person = function (name) 
// {
//     this.name = name;    
// };
// util.inherits(Person,events.EventEmitter);
// var Tharusha = new Person('Tharusha');
// var Didula = new Person('Didula');
// var people = [Tharusha,Didula];
// people.forEach(function (person) {
//     person.on('speak',function (msg) {
//         console.log(person.name+" said " +msg );
//     });    
// })
// Tharusha.emit('speak',"Hello");
// Didula.emit('speak','Hi bokka');


//read and display a file using fs module
// var fs = require('fs');
// var readMe = fs.readFileSync('readme.txt','utf8');
// console.log(readMe);


//read and copy file using fs module(synchronous)
// var fs = require('fs');
// var readMe = fs.readFileSync('readme.txt','utf8');
// fs.writeFileSync('writeme.txt',readMe);
 

//read and copy file using fs module(Asynchronous)
// var fs = require('fs');
// fs.readFile('readme.txt','utf8',function (err,data) 
// {
//      console.log(data); 
//      fs.writeFile('writeme.txt',data,err=>{
//          if(err)
//          {
//              console.log(err);
//          }
//          else{
//              console.log("data copied");
//          }
//      })
// });




//delete a file using fs module
//  var fs = require('fs');
//  fs.unlink('writeme.txt',(err => {
//     if (err) console.log(err);
//     else {
//       console.log("file Deleted");
//     }}));


//create a folder(Synchronous)
// var fs = require('fs');
// fs.mkdirSync('stuff');

//delete a folder(Synchronous)
// var fs = require('fs');
// fs.rmdirSync('stuff');

//create a folder and and copy a file to that folder
// var fs = require('fs');
// fs.mkdir('stuff',(err=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         fs.readFile('readme.txt','utf8',function (err,data) {

//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 fs.writeFile('./stuff/writeme.txt',data,(err=>{

//                     if(err)
//                     {
//                         console.log(err);
//                     }
//                     else{
//                         console.log("copied");
//                     }
//                 }));
//             } 
//         });
//     }
// }))

//delete directory(Asynchronous)
// var fs= require('fs');
// fs.unlink('./stuff/writeme.txt',(err=>{

//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         fs.rmdir('stuff',(err=>{
//             if(err)
//             {
//                 console.log(err);
//             }
//             else{
//                 console.log("deleted");
//             }
//         }));
//     }
// }));

//create a server
// var http = require('http');
// var server = http.createServer(function (req,res) {

//     console.log("Bitch");
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('Hello Nightkihng');
    
// });
// server.listen(3000,'127.0.0.1');
// console.log('Listening to port 3000');

//read stream
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');

// myReadStream.on('data',function(chunk)
// {
//     console.log('new chunk received');
//     console.log(chunk);
// });

//read and write stream
// var fs = require('fs');
// var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
// var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');

// myReadStream.on('data',function (chunk) {
//     console.log('new chunk received');
//     myWriteStream.write(chunk,(err=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else{
//             console.log("chunk printed");
//         }
//     }))
// });

//stream pip(read and write stream)
// var fs = require('fs');
// var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
// var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');

// myReadStream.pipe(myWriteStream,(err=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log('copied');
//     }
// }));

//stream data to client
// var http = require('http');
// var fs = require('fs');
// var server=http.createServer(function (req,res) 
// {
//     console.log('request url: ' +req.url);
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     var myReadStream = fs.createReadStream(__dirname+'/readme.txt');
//     myReadStream.pipe(res); 
// });
// server.listen(3000,'127.0.0.1');
// console.log("Now listening to port 3000");

//read and stream html file
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req,res) {
//     console.log('request url : '+req.url);
//     res.writeHead(200,{'Content-Type':'text/html'});
//     var myReadStream = fs.createReadStream(__dirname+'/index.html');
//     myReadStream.pipe(res);
    
// });
// server.listen(3000,'127.0.0.1');
// console.log("Listening server port 3000");


//stream json data
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req,res) 
// {
//     console.log("request url: "+req.url);
//     res.writeHead(200,{'Comtent-Type':'application/json'});

//     var myObj ={
//         name :'Nightking',
//         age : 21,
//         Town : 'Horana'
//     }
//     res.end(JSON.stringify(myObj));
// });
// server.listen(3000,'127.0.0.1');
// console.log('Start lintening 3000 port');

   
//basic routing
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req,res) 
// {
//    console.log("request made url : "+req.url);
//    if(req.url==='/' || req.url==='/home')
//    {
//         res.writeHead(200,{'Content-Type':'text/html'});
//         fs.createReadStream(__dirname+'/index.html').pipe(res);
//    }
//    else if(req.url ==="/contact-us")
//    {
//         res.writeHead(200,{'Content-Type':'text/html'});
//         fs.createReadStream(__dirname+'/contact.html').pipe(res);
//    }
//    else if(req.url==="/json")
//    {
//         res.writeHead(200,{'Content-Type':'application/json'})
//         var Obj = [{name:'Tharusha',age:22},{name:'Didula',age:22}];
//         res.end(JSON.stringify(Obj));
//    }
//    else{
//        res.writeHead(200,{'Content-Type':'text/html'});
//        fs.createReadStream(__dirname+'/404.html').pipe(res);
//    }    
// });
// server.listen(3000,'127.0.0.1');
// console.log("Listening to port 3000");


//basic routing using express
// var express = require('express');
// var app = express();
// app.get('/',function (req,res) {
//    res.send("This is home page"); 
// });
// app.get('/contact',function (req,res) {
//    res.send("This is contact us page"); 
// });
// app.listen(3000);


//route params
// var express = require('express');
// var app = express();
// app.get('/profile/:id',function (req,res) {
//     res.send("Your id is : "+req.params.id);   
// });
// app.listen(3000);


//display html page using express routing
// var express = require('express');
// var app= express();
// app.get('/',function (req,res) {
//     res.sendFile(__dirname +'/index.html');   
// });
// app.get('/contact',function (req,res) {

//     res.sendFile(__dirname+'/contact.html');  
// })
// app.listen(3000);

//use ejs for templating
// var express = require('express');
// var app= express();
// app.set('view engine','ejs');

// app.get('/',function (req,res) {
//     res.sendFile(__dirname +'/index.html');   
// });
// app.get('/contact',function (req,res) {
//     res.sendFile(__dirname+'/contact.html');
// })
// app.get('/profile/:name',function (req,res) {
//     var data = {age:29, town:'Horana',hobbies:['watching','playing','eating','coding','sleeping']};
//     res.render('profile',{person:req.params.name,data:data});  
// });
// app.listen(3000);

//partial ejs
var express = require('express');
var bodyParser = require('body-parser');
var app= express();
app.set('view engine','ejs');
app.use('/styles',express.static('styles'));

var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get('/',function (req,res) {
    
    res.render('index');   
});
app.get('/contact',function (req,res) {
    res.render('contact',{qs:req.query});
});

app.post('/contact', urlencodedParser, function (req,res) {
    console.log(req.body);
    res.render('contact',{qs:req.query});
});

app.get('/profile/:name',function (req,res) {
    var data = {age:29, town:'Horana',hobbies:['watching','playing','eating','coding','sleeping']};
    res.render('profile',{person:req.params.name,data:data});  
});
app.listen(3000);


