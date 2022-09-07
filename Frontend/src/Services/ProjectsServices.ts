import axios from "axios";
import store from "../Redux/Store";
import config from "../Utils/Config";
import ProjectModel from './../Models/ProjectModel';
import { addProjectAction, deleteProjectAction, fetchProjectsAction } from '../Redux/ProjectsState';


class ProjectsServices {

    public async getAllProjects(): Promise<ProjectModel[]> {
      let projects = store.getState().projectsState.projects;
      if (projects.length === 0){
        const response = await axios.get<ProjectModel[]>(config.projectsUrl);
        projects = response.data;
        store.dispatch(fetchProjectsAction(projects));
      }
      return projects;
    }

    public async getOneProject(id:number): Promise<ProjectModel>{
        const projects = await this.getAllProjects();
        const project = projects.find(p => p.projectId === id);
        return project;
    }


    public async addProject(project: ProjectModel): Promise<ProjectModel>{
        const formData = new FormData();
        formData.append("description", project.description);
        formData.append("github", project.github);
        formData.append("liveDemo", project.liveDemo);
        formData.append("image", project.image.item(0));
        const response = await axios.post<ProjectModel>(config.projectsUrl, formData);
        const newProject = response.data;
        store.dispatch(addProjectAction(newProject));
        return newProject;
    }

    public async deleteProject(id:number): Promise<void>{
        await axios.delete(config.projectsUrl + id);
        store.dispatch(deleteProjectAction(id))
    }


}

const projectsServices = new ProjectsServices();
export default projectsServices;