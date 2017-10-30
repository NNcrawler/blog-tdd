const jwtprocessor = require('../helpers/jwtprocessor');
const Models = require('../models/all-models');
const mongoose = require('mongoose');

module.exports = class Controller{
    static post(req, res){
      let post = {
        title:req.body.title,
        content:req.body.content
      }

      jwtprocessor.verify(req.body.token)
      .then(response=>{

        post.user = mongoose.Types.ObjectId(response.id);
        return Models.Post.create(post)
      })
      .then(post=>{
        res.send({message:'berhasil', post})
      })
      .catch(err=>{
        res.send({message:'gagal'})
      })
    }
};