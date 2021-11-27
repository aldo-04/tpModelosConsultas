const db = require("../database/models")

module.exports={
    list:(req,res)=>{
        db.Genero.findAll()
            .then(
                genres =>{
                    return res.render("genresList",{
                        genres
                    })
                }
            )
            .catch(error =>{res.send(error)})
    },
    detail:(req,res)=>{
        db.Genero.findByPk(+req.params.id)
            .then(
                genre => {
                    res.render("genresDetail",{
                        genre
                    })
                }
            )
            .catch(error=>{
                res.send(error)
            })
    }
}