import { OkPacket } from "mysql";
import dal from "../2-utils/dal"
import ProjectModel from "../4-models/project-model";
import {v4 as uuid} from "uuid"


async function getAllProjects(): Promise<ProjectModel[]> {
    const sql = `SELECT * FROM projects`;
    const projects = await dal.execute(sql);
    return projects;
}

async function getOneProject(id:number):Promise<ProjectModel>{
    const sql = "SELECT * FROM projects WHERE projectId = " + id;
    const project = await dal.execute(sql);
    return project[0];
}

async function addProject(project: ProjectModel): Promise<ProjectModel> {
  
    if (project.image) {
        const dotIndex = project.image.name.lastIndexOf(".");
        const extension = project.image.name.substring(dotIndex);
        project.imageName = uuid() + extension;
        await project.image.mv("src/1-assets/images/" + project.imageName);
        delete project.image;
    }

    const sql = `INSERT INTO projects(description, github, liveDemo, imageName)
                 VALUES('${project.description}', '${project.github}', '${project.liveDemo}', '${project.imageName}')`;
                 const result: OkPacket = await dal.execute(sql);
                    project.projectId = result.insertId;
                    return project;
}

async function deleteProject(id: number): Promise<void> {
    const sql = "DELETE FROM projects WHERE projectId = " + id;
    await dal.execute(sql);
}


export default {
    getAllProjects,
    addProject,
    getOneProject,
    deleteProject
    
};



