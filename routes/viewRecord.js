var express = require('express');
var router = express.Router();
var Record = require('../models/users');
var passport = require('passport');
var mongodb = require('mongodb');
/*var pdf = require('pdfkit');
var fs = require('fs');

var myDoc = new pdf;

myDoc.pipe(fs.createWriteStream('Test.pdf'));

myDoc.font('Times-Roman')
.fontSize(48)
.text('NodeJS PDF Document',100,100);

myDoc.addPage();
myDoc.font('Times-Roman')
.fontSize(12)
.text('Muhammad Arsalan Ahmed',100,100);

myDoc.end();*/
/* GET home page. */

//view records function
router.get('/', function(req, res, next) {

  Record.find({}, function(err,user){
    if(err){throw err;}
    else{
      console.log(user);
      res.render('viewRecord', {users:user});
      console.log('Viewing Record');
    }
  });
});


router.get('/viewRecord/edit/:id', function(req,res,next){
  var delete_id = req.params.id;
  console.log(req.params.id,'\n\n\n\n');

  Record.updateOne({_id: mongodb.ObjectID(req.params.id)}, function(err, result){
    if(err){throw err;}
    else{
      console.log('Inside Else Function... HUlalalalalalalalalalalala');
      res.redirect('/addRecord');}
  });
});

//console.log('outside view function');

module.exports = router;

// view record function ends