process.env.NODE_ENV="test";

const _ = require('lodash');
const request = require('supertest');
const  chai = require('chai');

const {server,app} = require('../server');

describe("POST /users",() =>{

  it("Should add a user to db and respond with user details excluding password.",(done) =>{
    const userTest = {
      name:"saar3",
      password:"123a",
      age:21,
      height:1.73
    };
    request(app)
      .post("/users")
      .send(userTest)
      .expect(200)
      .expect(res =>{
        chai.expect(res.password).to.be.undefined;
      })
      .end(err => {
          if(err){
            return done(err);
          }
          done();
      })
  })

});

server.close();
