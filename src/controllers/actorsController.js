const db = require("../database/models")

module.exports = {
    list : (req,res) => {
        db.actores.findAll()
            .then(
                actors => {
                    return res.render("actorsList",{
                        actors
                    })
                }
            )
    },
    detail : (req,res) => {
        db.actores.findByPk(+req.params.id)
            .then(
                actor =>{
                    return res.render("actorDetail",{
                        actor
                    })
                }
            )
    }
}