const express=require('express');

const router=express.Router();

const v1Routes=require('./v1');

const v2Routes=require('./v2');

const airplaneRoutes= require('./v1/airplane-routes')

router.use('/airplanes', airplaneRoutes);
router.use('/v2', v2Routes);
router.use('/v1' , v1Routes)

module.exports= router;

