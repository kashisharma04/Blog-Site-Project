const blogModel = require('../models/blogModel');

const getBlog = async function(req, res){
    let input  = req.query; 
    const query ={
         isDeleted :false,
          isPublished : true 
        }

          if(!query) return res.status(400).send({status : false, message: "provide dtails"});

          if(input.title){
            query.title = input.title;
          }
          if(input.category){
            query.title = input.title;
          }
    let data  = await blogModel.findOne(query);
    res.status(201).send({status : true , message : "Data :-", data : data})

}