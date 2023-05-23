const conn = require("../connection");

module.exports = {
    async list(req, res) {
      
        const result = await conn.query("select * from cargos_concursos")

        res.render('./views/cargosConcursos', {
            items: result.rows
        });
    }
}