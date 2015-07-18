'use strict'

require('babel/register');
var should = require('should');
var db = require('../../server/model/db')('test');
var Todo = require('../../server/model/todo');
console.log(Todo);
describe('Todo model testing', function(done){

  var todo;

  before(function(done){
    db.createCollection(Todo.getName(),{}, function(err, result){
      done(err);
    });
    todo = new Todo(db);
  });

  it("Should Todo.insert(todo) be successful", function(done){
    var newBook = {
      name: "Java Restful Service",
      priority: "High"
    };
    todo.insert(newBook, function(err, result){
      should.not.exist(err);
      should.exist(result);
      result.should.be.instanceof(Array).with.length(1);
      result[0].should.have.property("_id");
      done(err);
    });
  });

  it('Todo.find({}) should return all data', function(done){
    todo.find({}, function(err, result){
      should.not.exist(err);
      should.exist(result);
      result.should.be.instanceof(Array).with.length(1);
      done(err);
    });
  });

  it('Should Todo.update(query, doc) be successful', function(done){
    var query = {name: "Java Restful Service"};
    var doc = {
      $set: {
        priority: "Low"
      }
    };
    todo.update(query, doc, function(err, success, result){
      should.not.exist(err);
      should.exist(result);
      result.should.have.property('ok', 1);
      result.should.have.property('err', null);
      todo.find(query, function(err, result){
        should.not.exist(err);
        should.exist(result);
        result.should.be.instanceof(Array).with.length(1);
        result[0].should.have.property('priority', 'Low');
        done(err);
      });
    });
  });

  it('Should Todo.remove(query) be successful', function(done){
    var query = {name: "Java Restful Service"};
    todo.remove(query, function(err, success){
      should.not.exist(err);
      should.exist(success);
      success.should.be.equal(1);
      done(err);
    });
  });

  after(function(done){
    db.collection(Todo.getName()).drop(function(err, result){
      done(err);
    });
  });
});
