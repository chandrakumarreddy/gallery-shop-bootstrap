var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chandra', { useMongoClient: true });

var express=require('express');
const app=express();

var catSchema=new mongoose.Schema({
    title:String,
    id:Number
});
var Cat=mongoose.model('Cat',catSchema);
var name;
Cat.find({},function (err,data) {
    if(err){
        console.log('error found');
        console.log(err);
    }else{
        name=(data);
    }
});
app.get('/',function(req,res){
    res.send(name);
})
//console.log(a);
app.listen(3000);