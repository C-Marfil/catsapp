const Sequelize = require('sequelize');
const CatModel = require('./cats');

const setUpDatabase = () => {
    const connection = new Sequelize("have_i_fed_the_cat_app", "postgres", "password", {
        host: "localhost",
        port: 5432,
        dialect: "postgres"
    })

    const Cat = CatModel(connection, Sequelize);

    connection.sync({alter: true});
    
    return { Cat };
};

module.exports = setUpDatabase();