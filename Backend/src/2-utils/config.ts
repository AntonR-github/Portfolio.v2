if(!process.env.NODE_ENV) process.env.NODE_ENV = "development";

class Config {
    public isDevelopment = process.env.NODE_ENV === "development";
    public isProduction = process.env.NODE_ENV === "production";
    public port = 0;
    public sqlHost = "";
    public sqlUser = "";
    public sqlPassword = "";
    public sqlDatabase = "";
}

class DevelopmentConfig extends Config {
    public port = 3001;
    public sqlHost = "localhost";
    public sqlUser = "root";
    public sqlPassword = "";
    public sqlDatabase = "portfolio"; // Database Name
}

class ProductionConfig extends Config {
    public port = +process.env.PORT;
    public sqlHost = "eu-cdbr-west-03.cleardb.net";
    public sqlUser = "b5026a875b88e2";
    public sqlPassword = "69f682fa";
    public sqlDatabase = "heroku_62ff8893de1beea";
}



// mysql://b5026a875b88e2:69f682fa@eu-cdbr-west-03.cleardb.net/heroku_62ff8893de1beea?reconnect=true

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
