import ProjectModel from "../Models/ProjectModel";




export class ProjectsState{
    public projects: ProjectModel[] = [];
}

export enum ProjectsActionType{
    FetchProjects = "FetchProjects",
    AddProject = "AddProject",
    DeleteProject = "DeleteProject",
}

export interface ProjectsAction{
    type: ProjectsActionType;
    payload: any;
}

export function fetchProjectsAction(projects: ProjectModel[]): ProjectsAction{
    const action: ProjectsAction = { type: ProjectsActionType.FetchProjects, payload: projects };
    return action;
}

export function addProjectAction(project: ProjectModel): ProjectsAction{
    const action: ProjectsAction = { type: ProjectsActionType.AddProject, payload: project};
    return action;
}

export function deleteProjectAction(id:number): ProjectsAction{
    const action: ProjectsAction = { type: ProjectsActionType.DeleteProject, payload: id};
    return action;
}

export function projectsReducer(currentState: ProjectsState = new ProjectsState(), action: ProjectsAction): ProjectsState{
    const newState = {...currentState};
    switch(action.type){

        case ProjectsActionType.FetchProjects:
            newState.projects = action.payload;
            break;

        case ProjectsActionType.AddProject:
            newState.projects.push(action.payload);
            break;
            
        case ProjectsActionType.DeleteProject:
            const indexToDelete = newState.projects.findIndex(p => p.projectId === action.payload);
            if (indexToDelete >= 0){
                newState.projects.splice(indexToDelete, 1);
            }   
            break;
    }
    return newState;
}