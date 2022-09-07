import mysql from "mysql";
import config from "./config";

const connection = mysql.createPool({
    host: config.sqlHost, // computer name
    user: config.sqlUser, // database username
    password: config.sqlPassword, // database password
    database: config.sqlDatabase // database name
});

function execute(sql: string, values?:any[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        connection.query(sql, values,(err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export default {
    execute
};