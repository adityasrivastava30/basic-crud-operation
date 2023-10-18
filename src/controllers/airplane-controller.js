const { StatusCodes } = require('http-status-codes');
const { AirplaneService }=require('../services');
const { response } = require('express');

async function createAirplane(req ,res)
{
    try{
        const airplane=await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capaicty: req.body.capaicty,
    });
    return res.status(StatusCodes.CREATED).json(
        {
            success : true,
            message: "Successfully created an airplane",
            data: airplane,
            error : {}
        });

    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            succes : false,
            message : "Something went wrong",
            data:{},
            error : error
        });
    }
}
module.exports={

    createAirplane
}
