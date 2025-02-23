
import * as dotenv from 'dotenv';
dotenv.config();

import { pool } from '../connect_db/database.js';

class User {
    #name
    #email
    #age
    #profession

    constructor(name, email, age, profession){
        this.#name = name;
        this.#email = email;
        this.#age = age;
        this.#profession = profession;
    }

    get name (){
        return this.#name;
    }

    set name (name) {
        if(!name) throw new Error('Nome inválido');
        
        else {
            name = name.trim();
            this.#name = name;
        }
    }

    get email (){
        return this.#email;
    }

    set email (email){

        const mail = email;
        const arroba = "@";
        const arrobaIndex = mail.indexOf(arroba);
        const charValue = mail.substring(0, arrobaIndex);

        if(email && email.includes(arroba) && charValue.length >= 5 && !email.includes(" ")){
            this.#email = email
        }

        else{
            throw new Error('Email inválido.');      
        }
    }

    get age (){
        return this.#age;
    }

    set age (age){
        if(typeof age !== Number || isNaN(age) || age <= 15) {
            throw new Error('idade inválida!')
        }
        else {
            age = parseInt(age);
            this.#age = Math.floor(age);
        }
    }

    get profession (){
        return this.#profession
    }

    set profession (profession) {
        if(!profession) throw new Error('Campo profissão inválido');

        else {
            profession = profession.trim();
            this.#profession = profession;
        }
    }

    async save() {
        await pool.execute(`INSERT INTO ${process.env.TABLE_NAME} (user_name, user_email, user_age, user_profession) VALUES (?, ?, ?, ?)`, [this.name, this.email, this.age, this.profession]);
        
        console.log('Registro salvo com sucesso');
    }

    static async search() {
        try {
            const sqlCommand = `SELECT * FROM ${process.env.TABLE_NAME}`;
            const [users] = await pool.execute(sqlCommand);
    
            return users;

        } catch (err) {
            console.error('A busca falhou:', err.message);
            throw new Error('Erro ao buscar usuários no banco de dados');
        }
    }

    async change (idNumber) {
        let id = idNumber;
        await pool.execute(`UPDATE ${process.env.TABLE_NAME} SET user_name = ?, user_email = ?, user_age = ?, user_profession = ? WHERE id = ?;`, [this.name, this.email, this.age, this.profession, id]);
        
        console.log('Usuário alterado com sucesso');
    }

    static async delete (idNumber) {
        let id = idNumber;
        await pool.execute(`DELETE FROM ${process.env.TABLE_NAME} WHERE id = ?;`, [id]);
        console.log('Usuário deletado');
        
    }
};

export default User;