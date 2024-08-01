const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('rel_1_n', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('conexão realizada com sucesso')
}).catch((err)=>{
    console.error('erro de conexão com o banco de dados',err)
})

module.exports = sequelize