const bcrypt = require('bcrypt');
const pool = require("../config/database");
const auth = require("../config/utils");
const saltRounds = 10; 

function dbUserToUser(dbUser)  {
    let user = new User();
    user.id = dbUser.doador_id;
    user.name = dbUser.nome;
    user.points = dbUser.points;
    return user;
}

class User {
    constructor(id, name, telefone, email, senha, points, token) {
        this.id = id;
        this.name = name;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.points = points;
        this.token = token;
    }
    export() {
        let user=new User();
        user.name = this.name;
        user.points = this.points;
        return user; 
    }


    static async getById(id) {
        try {
            let dbResult = await pool.query("Select * from doador where doador_id=$1", [id]);
            let dbUsers = dbResult.rows;
            if (!dbUsers.length) 
                return { status: 404, result:{msg: "No user found for that id."} } ;
            let dbUser = dbUsers[0];
            return { status: 200, result: 
                new User(dbUser.doador_id, dbUser.nome, dbUser.telefone, dbUser.email_d, dbUser.senha_d, dbUser.points, dbUser.token)} ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }  
    }

    static async register(user) {
        try {
            let dbResult =
                await pool.query("Select * from doador where nome=$1", [user.name]);
            let dbUsers = dbResult.rows;
            if (dbUsers.length)
                return {
                    status: 400, result: [{
                        location: "body", param: "name",
                        msg: "That name already exists"
                    }]
                };
            let encpass = await bcrypt.hash(user.senha,saltRounds);   
            dbResult = await pool.query(`Insert into doador ( nome ,email_d , senha_d)
                       values ($1,$2,$3)`, [user.name ,user.email , encpass]);
            return { status: 200, result: {msg:"Registered! You can now log in."}} ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: { msg: 'Something went wrong. Register Model' } };
        }
    }
 

    static async checkLogin(user) {
        try {
            let dbResult =
                await pool.query("Select * from doador where nome=$1", [user.name]);
            let dbUsers = dbResult.rows;
            if (!dbUsers.length)
                return { status: 401, result: { msg: "Wrong username or password!"}};
            let dbUser = dbUsers[0]; 
            let isPass = await bcrypt.compare(user.senha,dbUser.senha_d);
            if (!isPass) 
                return { status: 401, result: { msg: "Wrong username or password!"}};
           
            return { status: 200, result: dbUserToUser(dbUser) } ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: { msg: 'Something went wrong. Login Model' } };
        }
    }

    // No verifications. Only to use internally
    static async saveToken(user) {
        try {
            let dbResult =
                await pool.query(`Update doador set token=$1 where doador_id = $2`,
                [user.token,user.id]);
            return { status: 200, result: {msg:"Token saved!"}} ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }

    static async getUserByToken(token) {
        try {
            let dbResult =
                await pool.query(`Select * from doador where token = $1`,[token]);
            let dbUsers = dbResult.rows;
            if (!dbUsers.length)
                return { status: 403, result: {msg:"Invalid authentication!"}} ;
            let user = dbUserToUser(dbUsers[0]);
            return { status: 200, result: user} ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }


    static async getUsers() {
        try {
          const dbResult = await pool.query('SELECT * FROM doador');
          const dbUser = dbResult.rows;
          const users = dbUser.map((user) => new User(user.doador_id, user.nome, user.telefone, user.email_d, user.senha_d, user.points, user.token ));
          return { status: 200, result: users };
        } catch (err) {
          console.log(err);
          return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }

      

}

module.exports = User;