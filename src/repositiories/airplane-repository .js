const CrudRepository= require('./crud-repository')
const {Airplane} =require('../models/index');

class AirplaneRepository extends CrudRepository {
    
    constructor()
    {
        super(Airplane)
    }

    /* you can here write all the raw queries*/
    
}

module.exports= AirplaneRepository;