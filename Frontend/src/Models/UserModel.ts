class UserModel {
    public userId: number;
    public username: string;
    public password: string;
    public role: string;
    



    constructor(user:UserModel){
        this.userId = user.userId;
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;
        
    }
}

export default UserModel;