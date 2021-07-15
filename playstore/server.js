const  exp=require('express')
const app=exp();
const port=2500
app.listen(port,()=>console.log(`server listening on ${port}`))
const path=require("path")

//connect angular to express server 
app.use(exp.static(path.join(__dirname,'./dist/playstore')))

//import mongoclient
const mc=require("mongodb").MongoClient;

//database cloud connection string 
const databaseurl="mongodb+srv://backend:backend@sowmya.mjms4.mongodb.net/backend?retryWrites=true&w=majority"

//connect to Db
mc.connect(databaseurl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err)
    {
        console.log("error in db connection=",err)
    }
    else{
        //get database object
        let dbobj=client.db("nodejs")

        //creating collection object
        colobj=dbobj.collection("users")
        cartobj=dbobj.collection("cart products")
        app.set("userobj",colobj)
        app.set("usersproductsobj",cartobj)
        console.log("database connection successfull")
    }
})

const userapi=require("./APIS/user-api")

app.use("/user",userapi)