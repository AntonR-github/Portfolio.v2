import Role from "./role-model";

class UserModel {
    public userId: number;
    public username: string;
    public password: string;
    public role: Role;
    



    constructor(user:UserModel){
        this.userId = user.userId;
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;
        
    }
}

export default UserModel;