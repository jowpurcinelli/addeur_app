module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'addeur-mysql',
  password: 'addeur',
  database: 'mysql',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,

  }
};



//define: timeStamps will garantee the creation of a column inside each table from the database. Those columns will store the "Created in (12/12/2020)and Updated at", for example.
//This will be very useful for  
//const sequelize = new Sequelize('database', 'username', 'password', {
  //dialect: 'mysql'
//})