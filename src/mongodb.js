const mongoose = require("mongoose");
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/code');
      console.log("run");
      
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
      type:String,
      required:true
  },
  })

  const Contactschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Contact:{
      type:String,
      required:true
  },
  Address:{
    type:String,
    required:true
  }
  })

  // const collection=1;
  // const collection4n=2;
  const collection= new mongoose.model("Collection1",LogInSchema);
  const collection3=new mongoose.model("collection2",Contactschema);
  
  module.exports={collection, collection3};