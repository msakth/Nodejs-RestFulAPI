var express = require('express');
var StandupRouter = express.Router();
var Standup = require('../models/standupModel');

var routes = function () {

    StandupRouter.route('/')
        .post(function(req,res){

            var standup  =  Standup(req.body);
            standup.save();
            res.status(201).send(standup);
        })
        .get(function(req,res){

            var query={};
            if( req.query.memberName != null) {
                query.memberName = req.query.memberName;
            }

            Standup.find(query, function (err,standups) {
                if( err) {
                    res.status(500).send(err);
                }
                else
                {
                    res.json(standups);
                }
            });
        })

    //Middleware
    StandupRouter.use('/:Id',function (req, res, next) {

        console.log(req.params.Id);

        Standup.findById(req.params.Id, function (err, standup) {


            if( err){
                res.status(500).send(err);
            }
            else if(standup){
                req.Standup = standup;
                next();
            }
            else{
                res.status(400).send('Not Found');
            }
        })
    })

    StandupRouter.route('/:id')
        .get(function (req,res) {

            res.json(req.Standup);

        })
        .put(function (req, res) {

        req.Standup.memberName = req.body.memberName;
        req.Standup.project = req.body.project;
        req.Standup.workYesterday = req.body.workYesterday;
        req.Standup.workToday = req.body.workToday;
        req.Standup.impediment = req.body.impediment;

        req.Standup.save(function (err, standup) {
            if(err){
                res.status(500).send(err);
            }
            else
            {
                res.json(standup);
            }
        });
    })
        .patch(function(req,res){
            if(req.body._id){
                delete req.body._id;
            }
            for( let i in req.body){
                 req.Standup[i] = req.body[i];
            }
            req.Standup.save( function(err,standup){
                if( err){
                    res.status(500).send(err);
                }else{
                    res.json(standup)
                }
            });

        })
        .delete(function(req, res){
            req.Standup.remove(function(err,result){
                if( err) res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            })
        })

    return StandupRouter;

}

module.exports = routes;