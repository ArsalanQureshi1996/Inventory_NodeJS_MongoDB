var mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.mongodb.dbURI, ()=>{
    console.log('Welcome to the world of MongoDB');
  });
  var db = mongoose.connection;

module.exports = mongoose.model('Inventory', {
    itemName : {type : String, required:true},
    purchasePrice : {type : Number, required: true},
    salePrice : {type : Number, required: true},
    inStock : {type : Number},
    productCategory: {type: String},
    brandName: {type: String},
});

module.exports.insertMany = function(newRecord, callback){
    newRecord.save(callback);
}

// module.exports.deleteMany = function(newRecord,callback){
//     newRecord.deleteMany(callback);
// }

// module.exports.update = function(editRecord,callback){
//     editRecord.update(callback);
// }
// module.exports = db.collection.deleteMany(function(deleteRecord,callback){
//     deleteRecord.deleteMany(callback);
// })


//module.exports = db.deleteOne({status: "D"});


/*
module.exports = db.collection("TestDatabase").insertMany(newUSer,function(err,res){
    if (err){throw err;}
    else{
        newUSer.save();
    }
})


var doc = { name: "Muhammad Arsalan", age: "22" };
    
    // insert document to 'users' collection using insertOne
    db.collection("TestDatabase").insertOne(doc, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        // close the connection to db when you are done with it
        db.close();
    });*/