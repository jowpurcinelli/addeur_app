module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'addeur',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}