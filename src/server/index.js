// used to create a server
const express=require("express")
/// to parse the request ,to extract the user data
const bodyParser=require("body-parser")

// to let the app.js to talk to the mongoDB ,mongoose is used as driver
const mongoose=require('mongoose')

// this is used to send request to eventbrite api to get event details
var request = require('request');
//this will parser the request to get the user insert data
app.use(bodyParser.urlencoded({extended:true}))


app.use(cors())

// to parser the json 
app.use(bodyParser.json())
const { redirect } = require('express/lib/response');

mongoose.connect("mongodb+srv://roshan:Roshan@06@cluster0.ogowrex.mongodb.net/eventDB")

const eventIdVenueId=[
    {"eventid":"420319546077",
"venueid":"114658479"},
    {"eventid":"409821004657",
    "venueid":"111853329"},
    {"eventid":"415804722117",
    "venueid":"113497029"},
    {"eventid":"409806220437",
    "venueid":"111848929"},
    {"eventid":"383871007517",
    "venueid":"105283229"},
    {"eventid":"386809968027",
    "venueid":"105868949"},
    {"eventid":"400183348167",
    "venueid":"109172289"},
    {"eventid":"412696575567",
    "venueid":"113285409"},
    {"eventid":"140043498875",
    "venueid":"107877759"},
    {"eventid":"417507645607",
    "venueid":"109172289"},
    {"eventid":"413659595987",
    "venueid":"112840149"},
    {"eventid":"423101125857",
    "venueid":"112614049"},
    {"eventid":"344120562867",
    "venueid":"115270859"},
    {"eventid":"255104282777",
    "venueid":"105868949"},
    {"eventid":"410259115057",
    "venueid":"111848929"},
    {"eventid":"421718049037",
    "venueid":"113497029"},
    {"eventid":"404641853677",
    "venueid":"111853329"},
    {"eventid":"183249824157",
    "venueid":"114658479"},
]

// app for customizing the server
const app=express();

const eventids=[]

function getdate(){
    const today = new Date()
    const options={weekday:"long", day:"numeric", month:"long"}
    return today.toLocaleDateString("en-US",options)
}

// schema of collection of events
const eventSchema=new mongoose.Schema({
    Name: {
        type: String
      },
      Venue: {
        type: String
      },
      Start_time: {
        type: String
      },
      End_time: {
        type: String
      },
      Description: {
        type: String
      },
      Addressobject:{
        type:Object
      }

})

// schema of collection of usersdata
const userSchema=new mongoose.Schema({
   email:{
    type:String
   },
   password:{
    type:String
   }

})

//schema for collection of registered user for an event
 const registeredUserSchema=new mongoose.Schema({
    email:{
        type:String
    },
    eventName:{
type:String
    }
 })

//use the document structure and create the collection of it
const Event=mongoose.model("event",eventSchema);


//use the document structure and create the collection of it
const users=mongoose.model("user",userSchema);

//use the document structure and create the collection of it
const eventRegisteredUser=mongoose.model("registeredUser",registeredUserSchema);

// as data is passed as form data
app.use(bodyParser.urlencoded({extended:true}))

// to receive an request on the home route,as a get request is received the callback is invoked
app.get("/",function(req,res){
    const date=getdate();
     // this would render and send the .ejs file present in the views directory ,i.e index
     // the object provided along have key-value pair ,in which key are 
     // used in the .ejs file and value  provided by server get's substituted   at the key-places in ejs
     // hence dynamism ,remember for each variable used in .ejs a value must be passed through the object 
     
     // to read the already present data in the collection in the database
     // basically, retrieve all the document present in the Task collection
     // initially,no document present ,then we push the default documents
     //then we render the ejs with the listtitle and a present documents of database
     Event.find({},function(err,tasks){
       if(err){
         console.log(err)
       }
       else{
        const token="5V5HXRVWVRRHSDU3OYQC";
         if(!tasks.length){

            eventIdVenueId.forEach((ele)=>{
            const eventid=ele.eventid;
            const venueid=ele.venueid;
            var Body=""
             var name=""
         var description=""
         var start_time=""
         var end_time=""
         var venue=""
         var addressOBject=null;
         request({
            method: 'GET',
            url: 'https://private-anon-5db17f8720-eventbriteapiv3public.apiary-proxy.com/v3/venues/'+venueid+"/",
            headers: {
              'Authorization': 'Bearer '+token
            }}, function (error, response, body) {
            Body=JSON.parse(body)
            venue=Body.address.localized_address_display+" , " +Body.address.localized_area_display;
            addressOBject=Body.address
          });
            request({
                method: 'GET',
                url: 'https://www.eventbriteapi.com/v3/events/'+eventid,
                headers: {
                  'Authorization': 'Bearer '+token
                }}, function (error, response, body) {
                // console.log('Status:', response.statusCode);
           Body=JSON.parse(body) 
                name=name+Body.name.text;
                description=Body.description.text;
                start_time=Body.start.local;
                end_time=Body.end.local;
 const eventdetail=new Event({
    Name:name,
    Venue:venue,
    Start_time:start_time,
    End_time:end_time,

    Description:description,
  Addressobject:addressOBject
  })
eventdetail.save();
                
              });

            
           })
         }
        }
       })
     
     })
    


 let port = process.env.PORT;
 if (port == null || port == "") {
   port = 3000;
 }
 // the server is set at 3000 port 
 app.listen(port,function(){
     console.log("server is monitoring the 3000 port")
 })
 
 



