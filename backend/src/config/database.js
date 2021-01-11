module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'addeur',
  database: 'addeur',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,

  },
};
// define: timeStamps will garantee the creation of a
// column inside each table from the database.
// Those columns will store the "Created in (12/12/2020)and Updated at",
