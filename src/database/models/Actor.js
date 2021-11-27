
module.exports=(sequelize,dataTypes)=>{

    const alias = "actores"

    const cols = {
        first_name : {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name : {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating : {
            type: dataTypes.DECIMAL(3,1)
        },
        favorite_movie_id : {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        }
    }

    const config = {
        tableName: "Actors",
        underscored: true
    }

    const actors = sequelize.define(alias,cols,config)

    return actors
}