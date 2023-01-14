module.exports = {
  development: {
    storage: process.env.DB_FILE, //where to look for the database
    dialect: "sqlite", //what type of database it is connecting to.
    seederStorage: "sequelize", //track which seed files have been run in the database,
    benchmark: true, //log the time it takes for Sequelize to execute each query
    logQueryParameters: true, //log the values used as parameters in the SQL queries
    typeValidation: true, //ey will prevent values from being inserted not having same type in database
    // logging: false //by default uses console.log but can be overridden 
  },
};
