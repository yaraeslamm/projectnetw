
var express = require('express');
var path = require('path');
var app = express();
//var MongoClient = require('mongodb').MongoClient ;
var flash = require('express-flash');
var alert = require('alert');
const session = require('express-session');
var fs = require('fs');
const { json, raw } = require('express');
//const { Db } = require('mongodb');
const { waitForDebugger, url } = require('inspector');
const { userInfo } = require('os');
const { doesNotMatch } = require('assert');
const store = new session.MemoryStore();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(session({
  secret : "notyourBusinessByTheWay",
  resave : false ,
  saveUninitialized : false ,
    store 
}));

app.set("port",3000);
app.listen(app.get("port"));

//const URI = "mongodb://127.0.0.1:27017";


// MongoClient.connect(URI, { useUnifiedTopology: true }).then(() => {console.log(`Connected to MongoDB at ${"mongodb://127.0.0.1:27017"}`); }).catch(err => {console.log(err); });
// const client = new MongoClient("mongodb://127.0.0.1:27017");
// const db = client.db("myDB");




app.get('/login',async function(req,res){
 
      res.render('login',{message : req.flash('message')})

});



app.get('/',function(req,res){

  res.redirect('login');
});

      
  app.get('/home',async function(req,res){

      if(req.session.log){
  
       
        if(req.session.username =="admin" && req.session.password =="admin"){
          res.render('home',{message : req.flash('message')});
        }
        else {
          res.redirect('login');
        }
       }
  

else {
  res.redirect('login');
}
  
  });

  
app.get('/hiking',async function(req,res){
   
  if(req.session.log){
  
       
    if(req.session.username =="admin" && req.session.password =="admin"){
      res.render('hiking');
    }
    else {
      res.redirect('login');
    }
   }


else {
res.redirect('login');
}

});


app.get('/cities',async function(req,res){
  if(req.session.log){
  
       
    if(req.session.username =="admin" && req.session.password =="admin"){
      res.render('cities');
    }
    else {
      res.redirect('login');
    }
   }


else {
res.redirect('login');
}

});


app.get('/islands',async function(req,res){
  if(req.session.log){
  
       
    if(req.session.username =="admin" && req.session.password =="admin"){
      res.render('islands');
    }
    else {
      res.redirect('login');
    }
   }


else {
res.redirect('login');
}

});


app.get('/wanttogo',async function(req,res){
  if(req.session.log){
  
       
    if(req.session.username =="admin" && req.session.password =="admin"){
      res.render('wanttogo');
    }
    else {
      res.redirect('login');
    }
   }


else {
res.redirect('login');
}

});


app.get('/inca',async function(req,res){

  if(req.session.log){
  
       
    if(req.session.username =="admin" && req.session.password =="admin"){
      res.render('inca',{message : req.flash('message')});
    }
    else {
      res.redirect('login');
    }
   }


else {
res.redirect('login');
}

});


app.get('/annapurna', async function(req,res){
  if(req.session.log){
  
       
    if(req.session.username =="admin" && req.session.password =="admin"){
      res.render('annapurna',{message : req.flash('message')});
    }
    else {
      res.redirect('login');
    }
   }


else {
res.redirect('login');
}

});

app.get('/paris', async function(req,res){
  if(req.session.log){
  
       
    if(req.session.username =="admin" && req.session.password =="admin"){
      res.render('paris',{message : req.flash('message')});
    }
    else {
      res.redirect('login');
    }
   }


else {
res.redirect('login');
}

});

app.get('/rome',async function(req,res){
  if(req.session.log){
  
       
    if(req.session.username =="admin" && req.session.password =="admin"){
      res.render('rome',{message : req.flash('message')});
    }
    else {
      res.redirect('login');
    }
   }


else {
res.redirect('login');
}

});
app.get('/bali',async function(req,res){
  if(req.session.log){
  
       
    if(req.session.username =="admin" && req.session.password =="admin"){
      res.render('bali',{message : req.flash('message')});
    }
    else {
      res.redirect('login');
    }
   }


else {
res.redirect('login');
}

});

app.get('/santorini',async function(req,res){
  if(req.session.log){
  
       
    if(req.session.username =="admin" && req.session.password =="admin"){
      res.render('santorini',{message : req.flash('message')});
    }
    else {
      res.redirect('login');
    }
   }


else {
res.redirect('login');
}

});

app.get('/searchresults',function(req,res){
    
  res.render('searchresults',{searchresults : []});

});


app.get('/registration',function(req,res){
  res.render('registration',{message : req.flash('message')})

});  


  
 

//post methods 




 


app.post('/Search',async function(req,res){
 if(req.session.log){
  if(req.session.username =="admin" && req.session.password == "admin"){
      const DestinationList = ["Paris" ,"Santorini Island","Annapurna Circuit", "Rome","Inca Trail to Machu Picchu", "Bali Island"];
      var search = req.body.Search;
      var results = [];
      for(let i =0 ; i <DestinationList.length; i++){
        if(DestinationList[i].toLowerCase().includes(search.toLowerCase())){
          if(DestinationList[i] ==="Paris"){
                  results.push(["/paris",DestinationList[i]]);
                        }
          else if(DestinationList[i] == "Santorini Island"){
                      results.push(["/santorini" ,DestinationList[i]])
                          }
           else if(DestinationList[i] == "Annapurna Circuit"){
                          results.push(["/annapurna", DestinationList[i]])
                        } 
         else if(DestinationList[i] == "Rome") {
                          results.push(["/rome", DestinationList[i]])
                        }
            
         else if(DestinationList[i] == "Inca Trail to Machu Picchu") {
                          results.push(["/inca", DestinationList[i] ])
                        }
        else if(DestinationList[i] == "Bali Island") {
                          results.push(["/bali",DestinationList[i] ])
                        }
        }
      }
    
      if(results.length ==0){
        alert ('Not found , Ops!');
        res.redirect('home');
        
      }
      else  if(search =="" ){
        alert ('Please enter data in search box first !!');
        res.redirect('home');
     }
      else {
      
        res.render('searchresults',{ searchres : results
                 });
      }
    
    }
   
  }
    else{
      res.redirect('login');
    }
  }  
);






app.post('/login',async function(req,res){
  var userx= req.body.username ;
  var pass = req.body.password ;
  

    if(userx == "admin" ) {
   
        if(pass  == "admin"){
          req.session.username = userx;
          req.session.password = pass;
          req.session.log=true;
          res.redirect('home');
        }
        else {
          req.flash('message','Invalid Password');
          res.redirect('login');
        }
      }
      else {
        req.flash('message','Invalid username');
        res.redirect('login');
      }
    }
  );  



  app.post('/register', async function(req,res) {

      var user = req.body.username ;
      var pass = req.body.password ;

      //var rec =  await db.collection('myCollection').findOne({username: user, password: pass});
      
      
      
       if(user == "" && pass !=""){
           req.flash('message','Please enter a username first');
          res.redirect('registration');
      }
      else if (pass == "" && user !=""){
        req.flash('message','Please enter a valid password ');
          res.redirect('registration');

      }
      else if (pass=="" && user == ""){
        req.flash('message','Please enter Username and Password for Registeration ');
        res.redirect('registration');

      }
      else if( user!="" && pass!=""){
        // if (await db.collection('myCollection').findOne({username : user})){
        //   req.flash('message','User already exists');
       
          res.redirect('registration');
        }
        else{
    
          //await db.collection('myCollection').insertOne({username: user, password: pass, myWantToGoList :[String]});  
          req.flash('message','Registered Successfully');
       
          res.redirect('login');}
      }
        
  
      );

app.post('/addBaliToList',async function(req, res) {

    //db.collection("myCollection").findOne({username: req.session.username, password :req.session.password}, function(err, currentUser){
      if(err) {
        console.log(err);
      }
      
      if(currentUser.myWantToGoList.includes('Bali Island')) {
        req.flash('message', 'Destination already in Want to go List')
        res.redirect('bali');
      
      }
      else{
       // db.collection("myCollection").findOneAndUpdate({username: req.session.username},
       // {$push: {myWantToGoList: "Bali Island"}})
        res.redirect('/home');
      }
    } 
  );
//}
//);


app.post('/addParisToList',async function(req, res) {

  //db.collection("myCollection").findOne({username: req.session.username, password :req.session.password}, function(err, currentUser){
    if(err) {
      console.log(err);
    }
    
    if(currentUser.myWantToGoList.includes('Paris')) {
      req.flash('message', 'Destination already in Want to go List')
      res.redirect('paris');
    
    }
    else{
      //db.collection("myCollection").findOneAndUpdate({username: req.session.username},
     //// {$push: {myWantToGoList: "Paris"}})
      res.redirect('/home');
    }
  } 
);
//}
//);

app.post('/addIncaToList',async function(req, res) {

  //db.collection("myCollection").findOne({username: req.session.username, password :req.session.password}, function(err, currentUser){
    if(err) {
      console.log(err);
    }
    
    if(currentUser.myWantToGoList.includes('Inca Trail to Machu Picchu')) {
      req.flash('message', 'Destination already in Want to go List')
 
      res.redirect('inca');
    
    }
    else{
      //db.collection("myCollection").findOneAndUpdate({username: req.session.username},
      //{$push: {myWantToGoList: "Inca Trail to Machu Picchu"}});
      res.redirect('/home');
    }
  } 
);
//}
//);

app.post('/addAnnapurnaToList',async function(req, res) {

  //db.collection("myCollection").findOne({username: req.session.username, password :req.session.password}, function(err, currentUser){
 if(err) {
      console.log(err);
    }
    
   if(currentUser.myWantToGoList.includes('Annapurna Circuit')) {
      req.flash('message', 'Destination already in Want to go List')
      res.redirect('annapurna');
    }

  else{
      //db.collection("myCollection").findOneAndUpdate({username: req.session.username},
      //{$push: {myWantToGoList: "Annapurna Circuit"}});
      res.redirect('/home');
    }
  } 
);
//}
//);

app.post('/addRomeToList',async function(req, res) {

 // db.collection("myCollection").findOne({username: req.session.username, password :req.session.password}, function(err, currentUser){
 if(err) {

      console.log(err);
    }
    
    if(currentUser.myWantToGoList.includes('Rome')) {
      req.flash('message', 'Destination already in Want to go List')
     res.redirect('rome');
    
    }
    else{
      //db.collection("myCollection").findOneAndUpdate({username: req.session.username},
      //{$push: {myWantToGoList: "Rome"}})
      res.redirect('/home');
    
    }});
// //);

app.post('/addSantoriniToList',async function(req, res) {

  //db.collection("myCollection").findOne({username: req.session.username, password :req.session.password}, function(err, currentUser){
 if(err) {

      console.log(err);
    }
    
    if(currentUser.myWantToGoList.includes('Santorini Island')) {
      req.flash('message', 'Destination already in Want to go List')
      res.redirect('santorini');
    
    }
    else{
      db.collection("myCollection").findOneAndUpdate({username: req.session.username},
      {$push: {myWantToGoList: "Santorini Island"}});
      res.redirect('/home');
    }
  } 
);
// }
// );






