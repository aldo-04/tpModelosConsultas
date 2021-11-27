const db = require("../database/models")

module.exports={
    list: (req,res)=>{
        db.Pelicula.findAll()
            .then(movies =>{
               return res.render("moviesList",{
                   movies
               })
            })
            .catch(error => console.log(error))
    },
    nueva: (req,res)=>{
        db.Pelicula.findAll({
            order: [["release_date", "DESC"]],
            limit: 5
        })
            .then(movies => {
                res.render("newestMovies",{
                    movies
                })
            })
            .catch(error => console.log(error))
    },
    recommended: (req,res)=>{
        db.Pelicula.findAll({
            order: [["rating", "DESC"]],
            limit: 5,
            where: {
                rating : {[db.Sequelize.Op.gt] : 7}
            }
        })
            .then(movies => {
                res.render("recommendedMovies",{
                    movies
                })
            })
            .catch(error => console.log(error))
    },
    detail: (req,res)=>{
        db.Pelicula.findByPk(+req.params.id)
            .then(
                movie => {
                    res.render("moviesDetail",{
                        movie
                    })
                }
            ).catch(error =>{
                console.log(error)
            })
    }
}
