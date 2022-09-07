import cyber from "../2-utils/cyber";
import dal from "../2-utils/dal";
import { UnauthorizedError } from "../4-models/error-models";




async function register(user) {

    const isTaken = await isNameExist(user.username);
    if(isTaken) {
        throw new UnauthorizedError("Username is taken");
    }

    const sql = `INSERT INTO users VALUES(DEFAULT,'${user.username}', '${user.password}', "User")`;
    const info = await dal.execute(sql);
    user.id = info.insertId;
    const token = cyber.getNewToken(user);
    delete user.password;
    return token;

}

async function login(credentials) {

    
    const sql = `SELECT * FROM users WHERE username = '${credentials.username}' AND password = '${credentials.password}'`;
    const users = await dal.execute(sql);
    if (users.length === 0) return null;
    const user = users[0];
    if(!user) {
        throw new UnauthorizedError("Incorrect username or password");
    }
    const token = cyber.getNewToken(user);
    delete user.password;
    return token;
}

async function isNameExist(username:string):Promise<boolean> {
    const sql = `SELECT COUNT(username)as count FROM users WHERE username = '${username}'`;
    const result = await dal.execute(sql);
    const count = result[0].count;
    return count > 0;  
}



export default {
    register,
       login,

   };