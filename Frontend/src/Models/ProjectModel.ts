
class ProjectModel {
    public projectId : number;
    public description: string;
    public github: string;
    public liveDemo: string;
    public imageName: string;
    public image: FileList;

    public constructor(project : ProjectModel) {
        this.projectId = project.projectId;
        this.description = project.description;
        this.github = project.github;
        this.liveDemo = project.liveDemo;
        this.imageName = project.imageName;
        this.image = project.image;
    }
}

export default ProjectModel;