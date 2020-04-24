const Heroes = require ('../models/Heroes')

module.exports = {
    create : (req, res, next) => {
        Heroes.create({
            fullname : req.body.fullname,
            born : req.body.born,
            dead : req.body.dead,
            description : req.body.description,
            establishment : req.body.establishment,
        },
        (err,result) => {
            if (err) next (err);
            else {
                res.json({status : "success", data:result});
            }
        }
        );
    },

    getData: (req,res) => {
        Heroes.find({})
        .then ((result) => {
            res.json ({status : "success", data : result});
        })
        .catch ((err) => err);
            
    },

    getDatabyID : (req,res) =>{
        Heroes.findById(req.params.heroesId)
        .then ((result) => res.json (result))
        .catch((err) => res.json(err));
        },

    deleteByID : (req,res) => {
        Heroes.findByIdAndRemove(req.params.heroesId)
        .then ((result) => res.json(result))
        .catch((err) => res.json(err));
    },

    editById : (req,res) => {
        Heroes.findByIdAndUpdate(req.params.heroesId,{
            fullname:req.body.fullname,
                born: req.body.born,
                dead : req.body.dead,
                description:req.body.description,
                establishment:req.body.establishment,
        })
        .then ((result) => res.json (result))
        .catch ((result) => res.json (err));
    },
  
};