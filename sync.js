const { Fabricante, Produto } = require('./model/associacao')
const conn = require('./db/conn')

async function syncDataBase(){
    try{
        await conn.sync({force:true})
        console.log('tabelas criadas e banco de dados sincronizado')
    }catch(err){
        console.error('erro na sincronização com o banco de dados')
    }finally{
        conn.close()
        console.log('conexão do banco de dados fechado')
    }
}

syncDataBase()