var express = require('express');
var app = express();
var studentRoutes = express.Router();

// Require Item model in our routes module
var Student = require('../models/student');

// Defined store route
studentRoutes.route('/add').post(function (req, res) {
  var student = new Student(req.body);
   student.save()
    .then(item => {
    res.status(200).json({'student': 'Student added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
studentRoutes.route('/').get(function (req, res) {
   Student.find(function (err, students){
    if(err){
      console.log(err);
    }
    else {
      res.json(students);
    }
  });
});

// Defined edit route
studentRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Student.findById(id, function (err, student){
      res.json(student);
  });
});

//  Defined update route
studentRoutes.route('/update/:id').post(function (req, res) {
   Student.findById(req.params.id, function(err, student) {
    if (!student)
     console.log('error')
    else {
        student.id = req.body.id;
        student.name = req.body.name;
        student.age = req.body.age;

        student.save().then(student => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
studentRoutes.route('/delete/:id').get(function (req, res) {
   Student.findByIdAndRemove({_id: req.params.id}, function(err, student){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = studentRoutes;