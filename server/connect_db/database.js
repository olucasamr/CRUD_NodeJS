import mysql2 from 'mysql2/promise';
import * as dotenv from 'dotenv'
dotenv.config()

const hostName = process.env.DB_HOST;
const database = process.env.DB_NAME;
const userName = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const portNumb = process.env.PORT;


const config = {
    host: hostName,
    user: userName,
    password: dbPassword,
    port: portNumb,
    database: database,
    connectionLimit: 10

}

export const pool = mysql2.createPool(config);


const connection = async () => {
    try {
        await pool.getConnection();
        console.log('Conectado ao banco de dados!');
    }
    
    catch (err) {
        console.log('Ocorreu um erro:', err);
        process.exit(1);
    }
}

connection()

