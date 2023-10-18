const exress=require('express');

const router=exress.Router()

const{ Airplanecontroller }=require("../../controllers");

// /api/v1/airplanes.POST

router.post('/', Airplanecontroller.createAirplane)


module.exports=router