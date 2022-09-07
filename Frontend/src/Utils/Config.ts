class Config {
    public projectsUrl = "";
    public projectsImageUrl = "";
    public registerUrl = "";
    public loginUrl = "";
}

class DevelopmentConfig extends Config {
    public projectsUrl = "http://localhost:3001/api/projects/";
    public projectsImageUrl = "http://localhost:3001/api/projects/image/";
    public registerUrl = "http://localhost:3001/api/auth/register/";
    public loginUrl = "http://localhost:3001/api/auth/login/";
}

class ProductionConfig extends Config {
    
    public projectsUrl = "https://worksport.herokuapp.com/api/projects/";
    public projectsImageUrl = "https://worksport.herokuapp.com/api/projects/image/";
    public registerUrl = "https://worksport.herokuapp.com/api/auth/register/";
    public loginUrl = "https://worksport.herokuapp.com/api/auth/login/";
}


const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
